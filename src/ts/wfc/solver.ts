import { TemplateMask } from './template-mask.js'
import { pause, randomElement } from '../utils/utils.js'
import { modelParser } from '@/ts/wfc/model-parser.js'
import { SquareGrid } from '@/ts/wfc/grid/square-grid.js'
import { SquareGridInstance } from '@/ts/wfc/grid/square-grid-instance.js'
import { Vector3 } from 'three'

interface HistoryItem {
	instancePos: {
		x: number
		y: number
		z: number
	}
	retries: number
	leftStates: TemplateMask
	state: SquareGridInstance[][][]
}

export interface SolverEventPayload {
	current?: Vector3
	set: SquareGrid
}

export class Solver extends EventTarget {
	private static readonly GUARD_LIMIT = 10000

	public iterations = 0
	public static checks = 0
	private runFlag = false

	private history: HistoryItem[] = []

	public constructor(private readonly set: SquareGrid) {
		super()
	}

	public async run() {
		this.runFlag = true
		this.propagate()
		const tmpin = this.getNextElement()

		this.history.push({
			instancePos: {
				x: tmpin.x,
				y: tmpin.y,
				z: tmpin.z,
			},
			leftStates: tmpin.mask.clone(),
			state: this.set.cloneState(),
			retries: 0,
		})

		let guard = 0
		while (true) {
			if (!this.runFlag) {
				break
			}

			if (guard++ > Solver.GUARD_LIMIT) {
				throw 'Guard overflow'
			}

			// current history step
			if (this.history.length === 0) {
				throw 'No history left'
			}

			const currentHistoryItem = this.history[this.history.length - 1]
			// this.printHistoryItem()
			// TODO assert equal states

			const index = currentHistoryItem.leftStates.getRandomNonZeroIndex()
			try {
				const instance = this.set.tryGetElementAt(
					currentHistoryItem.instancePos.x,
					currentHistoryItem.instancePos.y,
					currentHistoryItem.instancePos.z
				)

				// add assert left states should be included in current instance mask

				// TODO propagate element before collapsing
				// ? or actually this should not be required

				instance.collapseTo(index)
				instance.dirty = true
				this.notify(currentHistoryItem)
				await pause(10)

				this.propagate()
			} catch (e) {
				// console.log('backtrack ', e)
				this.checkHistory(currentHistoryItem, index)
				continue
			}

			// propagation is ok move to next history step
			const inst2 = this.getNextElement()
			if (!inst2) {
				console.log('yay!!')
				const event = new Event('solving_finished', { bubbles: true })
				this.dispatchEvent(event)
				break
			}
			// console.log('getNextElement', inst2.print())
			this.history.push({
				instancePos: {
					x: inst2.x,
					y: inst2.y,
					z: inst2.z,
				},
				leftStates: inst2.mask.clone(),
				state: this.set.cloneState(),
				retries: 0,
			})
		}
	}

	private notify(currentHistoryItem: HistoryItem) {
		const event = new CustomEvent<SolverEventPayload>('element_collapsed', {
			detail: {
				current: new Vector3(
					currentHistoryItem.instancePos.x,
					currentHistoryItem.instancePos.y,
					currentHistoryItem.instancePos.z
				),
				set: this.set,
			},
		})
		this.dispatchEvent(event)
	}

	public stop() {
		this.runFlag = false
	}

	private checkHistory(currentHistoryItem: HistoryItem, index: number) {
		currentHistoryItem.leftStates.setAt(index, 0)
		currentHistoryItem.retries++
		const leftOnes = currentHistoryItem.leftStates.countOnes()
		if (leftOnes === 0) {
			this.goBackInHistory()
			return
		}
		this.set.replaceState(currentHistoryItem.state)
	}

	private goBackInHistory() {
		// single step
		// let step = 1

		// stupid solution, but it kind works
		// let step = Math.floor(Math.random() * this.history.length)

		// incremental probability
		let step = 1
		const OVERSTEP_THRESHOLD = 0.1
		for (let i = 1; i < this.history.length - 1; ++i) {
			step += Math.random() < OVERSTEP_THRESHOLD ? 1 : 0
		}

		// TODO add backtrack limit for each stage
		// TODO make this work
		// TODO backtrack if child retries of history item exceed certaion limit
		// this means that this state is definitely bad no need to check all child states
		// i have to be smart about it it is not that easy

		// while (true) {
		// 	if (step > this.history.length - 1) {
		// 		break
		// 	}
		// 	if (this.history[this.history.length - step].retries < 100) {
		// 		break
		// 	}
		// 	step++
		// }

		this.history.splice(this.history.length - step, step)

		// this.getLastHistoryStep().retries++
		// console.log(
		// 	'this.getLastHistoryStep().retries',
		// 	this.getLastHistoryStep().retries
		// )
	}

	private getLastHistoryStep() {
		return this.history[this.history.length - 1]
	}

	private propagate() {
		let element: SquareGridInstance
		let guard = 0
		while ((element = this.set.getNextDirtyElement())) {
			if (guard++ > Solver.GUARD_LIMIT) {
				throw 'Guard overflow'
			}
			this.propagateElement(element)
		}
	}

	private propagateElement(element: SquareGridInstance) {
		const adjacents = this.set.getElementsAdjacentTo(element)
		adjacents.forEach(([target, adjacencyInfo]) => {
			this.filterTargetStates(element, target, adjacencyInfo)
		})
		element.dirty = false
	}

	private filterTargetStates(
		source: SquareGridInstance,
		target: SquareGridInstance,
		adjacencyInfo: string
	) {
		const oldEnthropy = target.enthropy
		// target
		const templates = modelParser.getTemplates()
		for (let i = 0; i < templates.length; i++) {
			let result = false
			if (target.mask.getAt(i) === 1) {
				// source
				for (let j = 0; j < templates.length; ++j) {
					// at least one of source templates fits target template
					// we keep that target template on source
					if (source.mask.getAt(j) === 1) {
						const sourceTemplateInfo = templates[j][adjacencyInfo] as TemplateMask
						// TODO please keep in mind adjacencyInfo
						result ||= sourceTemplateInfo.getAt(i) === 1
					}
					Solver.checks++
				}
			}
			if (!result) {
				target.mask.setAt(i, 0)
				target.updateEnthropy()
				if (target.enthropy === 0) {
					throw 'Backtrack'
				}
			}
		}
		// if enthropy changed
		if (oldEnthropy !== target.enthropy) {
			// further propagation required
			const adjacents = this.set.getElementsAdjacentTo(target)
			adjacents.forEach(([target, adjacencyInfo]) => {
				target.dirty = true
			})
		}
	}

	private getNextElement(): SquareGridInstance | null {
		let min: number = Infinity
		let elements: SquareGridInstance[] = []

		this.set.eachElement((el) => {
			if (el.dead || el.enthropy === 1) {
				return
			}
			if (el.enthropy < min) {
				min = el.enthropy
				elements = [el]
			}
			if (el.enthropy === min) {
				elements.push(el)
			}
		})

		if (elements.length < 1) {
			return null
		}

		const rand = randomElement<SquareGridInstance>(elements)
		if (rand.z === 0) {
			debugger
		}
		return rand
	}

	/**
	 * @note useful, do not delete
	 */
	private printHistoryItem() {
		const item = this.history[this.history.length - 1]
		const index = this.history.length - 1
		console.log(
			`hist# ${String(index).padStart(2, ' ')}` +
				' at [' +
				String(item.instancePos.x).padStart(2, ' ') +
				', ' +
				String(item.instancePos.y).padStart(2, ' ') +
				'] ' +
				`[${item.leftStates.print()}]`
		)
	}
}
