import { model as defaultModel } from '@/ts/data/default-model'
import { modelParser } from '@/ts/wfc/model-parser'
import { debounce } from 'lodash'
import { Vector3 } from 'three'

export interface Cell {
	position: Vector3
	src: string
	rotation: number
}

export class EditorModel extends EventTarget {
	public model: Cell[] = []
	private event = new Event('model_updated', { bubbles: true })

	public constructor() {
		super()
		this.addEventListener('model_updated', debounce(this.serialize.bind(this), 1000))
	}

	public addItem(position: Vector3, src: string, rotation: number = 0) {
		const cell = this.getCell(position)
		if (!cell) {
			this.model.push({
				position,
				src,
				rotation,
			})
		} else {
			cell.src = src
		}
		this.dispatchEvent(this.event)
	}

	public rotateItem(position: Vector3) {
		const cell = this.getCell(position)
		if (cell) cell.rotation = (cell.rotation + 1) % 4
		this.dispatchEvent(this.event)
	}

	public deleteCell(position: Vector3) {
		const index = this.model.findIndex((el) => el.position.equals(position))
		if (index !== -1) {
			this.model.splice(index, 1)
		}
		this.dispatchEvent(this.event)
	}

	public getCell(position: Vector3): Cell | null {
		return this.model.find((el) => el.position.equals(position)) ?? null
	}

	private serialize() {
		localStorage.setItem('editor-model-data', JSON.stringify(this.model))
	}

	public loadDefault() {
		this.loadaData(defaultModel)
	}

	public loadLocal() {
		const data = JSON.parse(localStorage.getItem('editor-model-data'))
		this.loadaData(data)
	}

	private loadaData(data: any) {
		if (data) {
			this.model = data
			this.model.forEach((el) => {
				el.position = new Vector3(el.position.x, el.position.y, el.position.z)
			})
			this.dispatchEvent(this.event)
			modelParser.parse(this)
		}
	}
}
