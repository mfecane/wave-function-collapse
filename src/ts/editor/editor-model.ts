import { debounce } from '@/ts/utils/debounce'
import { modelParser } from '@/ts/wfc/model-parser'
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
		// TODO remove this dumb hack
		// event is dispatched before we added event listener
		window.setTimeout(this.load.bind(this), 100)
	}

	public addItem(position: Vector3, src: string) {
		const cell = this.getCell(position)
		if (!cell) {
			this.model.push({
				position,
				src,
				rotation: 0,
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

	private load() {
		const data = localStorage.getItem('editor-model-data')
		if (data) {
			this.model = JSON.parse(data)
			this.model.forEach((el) => {
				el.position = new Vector3(el.position.x, el.position.y, el.position.z)
			})
			this.dispatchEvent(this.event)
			modelParser.parse(this)
		}
	}
}
