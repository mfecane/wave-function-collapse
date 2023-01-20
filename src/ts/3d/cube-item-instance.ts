import { Transform3d } from '../utils/maths'
import { assertBoolean, assertNonZero } from '../utils/utils'
import { Instance } from './solver'
import { MeshTemplate } from './templates'

export class MeshInstance implements Instance {
	public x: number = 0
	public y: number = 0
	public z: number = 0

	public dead = false
	public transform: Transform3d = new Transform3d()

	public enthropy: number = 0

	constructor(public states: MeshTemplate[]) {}

	public collapse() {
		const randomIndex = Math.floor(Math.random() * this.states.length)
		this.collapseTo(randomIndex)
	}

	public collapseTo(index: number) {
		if (this.dead) {
			return
		}
		assertNonZero(this.states.length)
		assertBoolean(index < this.states.length)
		this.states = [this.states[index]]
		this.enthropy = 1
	}

	public replaceStates(newStates: MeshTemplate[]) {
		this.states = newStates
		this.enthropy = this.states.length
		if (this.enthropy < 1) {
			this.die()
		}
	}

	private die() {
		this.dead = true
	}

	public tryGetOnlyState() {
		if (this.enthropy != 1) {
			throw 'attempt to get only state of element with enthropy > 2'
		}
		return this.states[0]
	}
}
