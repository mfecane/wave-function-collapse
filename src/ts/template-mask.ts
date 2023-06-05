import { templates } from './3d/templates'

export class TemplateMask {
	public value: Int8Array

	public constructor() {
		this.value = new Int8Array(templates.length)
	}

	public getOnes(): number {
		return this.value.reduce((acc, cur) => acc + cur, 0)
	}
}
