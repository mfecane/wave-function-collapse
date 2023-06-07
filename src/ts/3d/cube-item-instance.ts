import { TemplateMask } from '../template-mask'
import { assertBoolean, randomElement } from '../utils/utils'
import { templates } from './templates'

export class MeshInstance {
	public x: number = 0
	public y: number = 0
	public z: number = 0

	public dead = false
	public dirty = false

	public enthropy: number = 0
	public mask: TemplateMask

	constructor() {
		this.mask = new TemplateMask()
		this.mask.fillOnes()
		this.enthropy = this.mask.countOnes()
	}

	private getNonZeroIndices(): number[] {
		return this.mask.getNonZeroIndices()
	}

	public collapse() {
		const indices = this.getNonZeroIndices()
		const randomIndex = randomElement(indices) ?? 0
		this.collapseTo(randomIndex)
	}

	public collapseTo(index: number): void {
		if (this.dead) {
			return
		}
		assertBoolean(index < templates.length)
		assertBoolean(this.mask.getAt(index) === 1)

		this.mask = new TemplateMask()
		this.mask.setAt(index, 1)
		this.enthropy = this.mask.countOnes()
	}

	public collapseToId(id: string): void {
		const index = templates.findIndex((el) => el.id === id)
		this.collapseTo(index)
	}

	private die(): void {
		this.dead = true
	}

	public tryGetOnlyState(): number {
		if (this.enthropy != 1) {
			throw 'attempt to get only state of element with enthropy > 2'
		}
		const index = this.mask.getNonZeroIndices()[0]
		return index
	}

	public countStates(): number {
		return this.mask.countOnes()
	}

	public clone() {
		const clone = new MeshInstance()
		clone.mask = this.mask.clone()
		clone.enthropy = this.mask.countOnes()
		clone.dead = this.dead
		clone.x = this.x
		clone.y = this.y
		clone.z = this.z
		return clone
	}

	public updateEnthropy() {
		this.enthropy = this.mask.countOnes()
		if (this.enthropy < 1) {
			this.die()
		}
	}

	public print(): string {
		let str = `[${this.x.toString().padStart(2, ' ')}, ${this.y
			.toString()
			.padStart(2, ' ')}, ${this.z.toString().padStart(2, ' ')}] `
		str += `[${this.mask.print()}]`
		str += ` entr: ${this.enthropy}`
		return str
	}
}
