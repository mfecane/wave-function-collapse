import { TemplateMask } from '../template-mask.js'
import { pause, randomElement } from '../utils/utils.js'
import { CubeGrid } from './cube-grid.js'
import { MeshInstance } from './cube-item-instance.js'
import { templates } from './templates.js'

const GUARD_LIMIT = 5000

interface HistoryItem {
	instancePos: {
		x: number
		y: number
		z: number
	}
	retries: number
	leftStates: TemplateMask
	state: MeshInstance[][][]
}

export class Solver extends EventTarget {
	public iterations = 0
	public static checks = 0

	history: HistoryItem[] = []

	public constructor(private set: CubeGrid) {
		super()
	}

	public async run() {
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
			if (guard++ > GUARD_LIMIT) {
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

				const event = new Event('element_collapsed', { bubbles: true })
				this.dispatchEvent(event)
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
		let element: MeshInstance
		let guard = 0
		while ((element = this.set.getNextDirtyElement())) {
			if (guard++ > GUARD_LIMIT) {
				throw 'Guard overflow'
			}
			this.propagateElement(element)
		}
	}

	private propagateElement(element: MeshInstance) {
		const adjacents = this.set.getElementsAdjacentTo(element)
		adjacents.forEach(([target, adjacencyInfo]) => {
			this.filterTargetStates(element, target, adjacencyInfo)
		})
		element.dirty = false
	}

	private filterTargetStates(
		source: MeshInstance,
		target: MeshInstance,
		adjacencyInfo: string
	) {
		const oldEnthropy = target.enthropy
		// target
		for (let i = 0; i < templates.length; i++) {
			let result = false
			if (target.mask.getAt(i) === 1) {
				// source
				for (let j = 0; j < templates.length; ++j) {
					// at least one of source templates fits target template
					// we keep that target template on source
					if (source.mask.getAt(j) === 1) {
						const sourceTemplateInfo = templates[j][
							adjacencyInfo
						] as TemplateMask
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

	private getNextElement(): MeshInstance | null {
		let min: number = Infinity
		let elements: MeshInstance[] = []

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

		return randomElement<MeshInstance>(elements)
	}

	private printHistoryItem() {
		const item = this.history[this.history.length - 1]
		const index = this.history.length - 1
		console.log(
			`hist# ${String(index).padStart(2, ' ')}` +
				' at [' +
				String(item.instancePos.x).padStart(2, ' ') +
				', ' +
				String(item.instancePos.y).padStart(2, ' ') +
				', ' +
				String(item.instancePos.z).padStart(2, ' ') +
				'] ' +
				`[${item.leftStates.print()}]`
		)
	}
}
