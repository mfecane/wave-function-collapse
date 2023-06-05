import { pause, randomElement } from '../utils/utils.js'
import { templates } from './templates.js'

export interface WaveState {}

export type AdjacencyInfo = string

export interface Instance {
	enthropy: number
	mask: Int8Array
	dead: boolean

	replaceStates(newStates: Int8Array): void

	collapse(): void

	collapseTo(i: number): void

	countStates(): number
}

export interface InstanceSet {
	eachElement(callback: (el: Instance) => void): void

	getElementsAdjacentTo(
		reference: Instance
	): [element: Instance, adjacencyInfo: AdjacencyInfo][]

	print(): void
}

// interface HistoryItem {
// 	instance: Instance
// 	triedStates: number[]
// 	state: CubeGridState
// }

export class Solver extends EventTarget {
	public iterations = 0
	private q: Instance[] = []
	public static checks = 0

	history = []

	public constructor(private set: InstanceSet) {
		super()
	}

	public async run() {
		// propagate border conditions
		// this.propagate()

		let instance: Instance
		while ((instance = this.getNextElement())) {
			this.collapseElement(instance)
			this.propagate()
			await pause(50)
		}
	}

	private propagate() {
		let element: Instance
		let guard = 0

		while ((element = this.q.shift())) {
			if (guard++ > 1000) {
				throw 'Guard overflow'
			}
			this.propagateElement(element)
		}
	}

	private propagateElement(element: Instance) {
		const adjacents = this.set.getElementsAdjacentTo(element)
		adjacents.forEach(([target, adjacencyInfo]) => {
			this.filterTargetStates(element, target, adjacencyInfo)
		})
	}

	private countOnes(array: Int8Array): number {
		return array.reduce((acc, cur) => acc + cur, 0)
	}

	private filterTargetStates(
		source: Instance,
		target: Instance,
		adjacencyInfo: AdjacencyInfo
	) {
		if (target.enthropy <= 1) {
			return
		}

		const newStates = new Int8Array(templates.length)

		// target
		for (let i = 0; i < templates.length; i++) {
			if (target.mask[i] === 1) {
				let result = false
				// source
				for (let j = 0; j < templates.length; ++j) {
					// at least one of source templates fits target template
					// we keep that target template on source
					if (source.mask[j] === 1) {
						result ||= templates[j][adjacencyInfo][i] === 1
					}
					Solver.checks++
				}
				if (result) {
					newStates[i] = 1
				}
			}
		}

		if (this.countOnes(target.mask) !== this.countOnes(newStates)) {
			// further propagation required
			const adjacents = this.set.getElementsAdjacentTo(target)
			adjacents.forEach(([target, adjacencyInfo]) => {
				this.pushToQ(target)
			})
		}
		target.replaceStates(newStates)
	}

	public pushToQ(instance: Instance): void {
		// console.groupCollapsed('pushToQ instance', instance)
		// console.trace()
		// console.groupEnd()

		if (this.q.includes(instance)) {
			return
		}
		this.q.push(instance)
	}

	private getNextElement(): Instance | null {
		let min: number = Infinity
		let elements: Instance[] = []

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

		return randomElement<Instance>(elements)
	}

	private collapseElement(element: Instance) {
		element.collapse()
		const event = new Event('element_collapsed', { bubbles: true })
		this.dispatchEvent(event)
		this.propagateElement(element)
	}
}
