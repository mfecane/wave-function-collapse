import { templates } from './3d/templates'
import { assertBoolean, randomElement } from './utils/utils'

export class TemplateMask {
	public value: number[] = []

	public constructor() {
		this.value = new Array(templates.length).fill(0)
	}

	public countOnes(): number {
		return this.value.reduce((acc, cur) => acc + cur, 0)
	}

	public clone(): TemplateMask {
		const clone = new TemplateMask()
		clone.value = [...this.value]
		return clone
	}

	public getIntersection(other: TemplateMask): TemplateMask {
		assertBoolean(this.value.length === other.value.length)
		const res = new TemplateMask()
		for (let i = 0; i < res.value.length; i++) {
			res.value[i] = Math.min(this.value[i], other.value[i])
		}
		return res
	}

	public fillOnes(): void {
		this.value.fill(1)
	}

	public getNonZeroIndices(): number[] {
		return this.value.reduce((arr: number[], el: number, idx: number) => {
			if (el === 1) {
				arr.push(idx)
			}
			return arr
		}, [])
	}

	public getRandomNonZeroIndex(): number {
		const indices = this.getNonZeroIndices()
		return randomElement(indices)
	}

	public setAt(i: number, value: number): void {
		this.value[i] = value
	}

	public getAt(i: number): number {
		return this.value[i]
	}

	public print(): string {
		return this.value.join(' ')
	}
}
