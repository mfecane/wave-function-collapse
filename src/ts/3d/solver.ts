import { pause, randomElement } from '../utils/utils.js'

export interface WaveState {}

export type AdjacencyInfo = string

export interface Instance {
	enthropy: number
	states: WaveState[]
	dead: boolean

	replaceStates(newStates: WaveState): void

	collapse(): void

	collapseTo(i: number): void
}

export interface InstanceSet {
	eachElement(callback: (el: Instance) => void): void

	getElementsAdjasentTo(
		reference: Instance
	): [element: Instance, adjacencyInfo: AdjacencyInfo][]

	print(): void
}

export interface ConstraintsChecker {
	checkConstraints(
		state1: WaveState,
		state2: WaveState,
		adjacencyInfo: AdjacencyInfo
	): boolean
}

export class Solver extends EventTarget {
	public iterations = 0
	private q: Instance[] = []

	public constructor(
		private set: InstanceSet,
		private constraintsChecker: ConstraintsChecker
	) {
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
		const adjacents = this.set.getElementsAdjasentTo(element)
		adjacents.forEach(([target, adjacencyInfo]) => {
			this.filterTargetStates(element, target, adjacencyInfo)
		})
	}

	private filterTargetStates(
		source: Instance,
		target: Instance,
		adjacencyInfo: AdjacencyInfo
	) {
		if (target.states.length <= 1) {
			return
		}

		const newStates: WaveState[] = []

		for (let targetState of target.states) {
			// if (targetState.mesh != 'void') {
			// 	debugger
			// }
			let result = false
			for (let sourceState of source.states) {
				// at least one of source templates fits target template
				// we keep that target template on source
				result ||= this.constraintsChecker.checkConstraints(
					sourceState,
					targetState,
					adjacencyInfo
				)
			}
			if (result) {
				newStates.push(targetState)
			}
		}

		if (target.states.length !== newStates.length) {
			// further propagation required
			const adjacents = this.set.getElementsAdjasentTo(target)
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
