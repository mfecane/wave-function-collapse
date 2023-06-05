import { Transform3d } from '../utils/maths'
import { assertBoolean, randomElement } from '../utils/utils'
import { Instance } from './solver'
import { templates } from './templates'

export class MeshInstance implements Instance {
	public x: number = 0
	public y: number = 0
	public z: number = 0

	public dead = false
	public transform: Transform3d = new Transform3d()

	public enthropy: number = 0
	public mask: Int8Array

	constructor() {
		this.mask = new Int8Array(templates.length)
		this.mask.fill(1)
		this.enthropy = this.countOnes(this.mask)
	}

	private getNonZeroIndices(): number[] {
		return this.mask.reduce((arr, el, idx) => {
			if (el === 1) {
				arr.push(idx)
			}
			return arr
		}, [])
	}

	public collapse() {
		const indices = this.getNonZeroIndices()
		const randomIndex = randomElement(indices)
		this.collapseTo(randomIndex)
	}

	private countOnes(array: Int8Array): number {
		return array.reduce((acc, cur) => acc + cur, 0)
	}

	public collapseTo(index: number) {
		if (this.dead) {
			return
		}
		assertBoolean(index < templates.length)
		this.mask = new Int8Array(templates.length)
		this.mask.fill(0)
		this.mask[index] = 1
		this.enthropy = this.countOnes(this.mask)
	}

	public replaceStates(newStates: Int8Array) {
		this.mask = newStates
		this.enthropy = this.countOnes(this.mask)
		if (this.enthropy < 1) {
			this.die()
		}
	}

	private die() {
		this.dead = true
	}

	public tryGetOnlyState() {
		if (this.enthropy != this.countOnes(this.mask)) {
			throw 'attempt to get only state of element with enthropy > 2'
		}
		const index = this.mask.findIndex((el) => el === 1)
		return index
	}

	public countStates(): number {
		return this.countOnes(this.mask)
	}
}
