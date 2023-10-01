import { debounce } from '@/ts/utils/debounce'
import { modelParser } from '@/ts/wfc/model-parser'
import { Vector2 } from 'three'

export interface Cell {
	x: number
	y: number
	src: string
	rotation: number
}

export class EditorModel extends EventTarget {
	private model: Cell[] = []
	private event = new Event('model_updated', { bubbles: true })

	public constructor() {
		super()
		this.addEventListener('model_updated', debounce(this.serialize.bind(this), 1000))
		// TODO remove this dumb hack
		// event is dispatched before we added event listener
		window.setTimeout(this.load.bind(this), 100)
	}

	public addItem(selected: Vector2, src: string) {
		const { x, y } = selected
		const cell = this.getCell(selected)
		if (!cell) {
			this.model.push({
				x,
				y,
				src,
				rotation: 0,
			})
		} else {
			cell.src = src
		}
		this.dispatchEvent(this.event)
	}

	public rotateItem(selected: Vector2) {
		const cell = this.getCell(selected)
		if (cell) cell.rotation = (cell.rotation + 1) % 4
		this.dispatchEvent(this.event)
	}

	public deleteCell(selected: Vector2) {
		const { x, y } = selected
		const index = this.model.findIndex((el) => el.x === x && el.y === y)
		if (index !== -1) {
			this.model.splice(index, 1)
		}
		this.dispatchEvent(this.event)
	}

	public getCell(selected: Vector2): Cell | null {
		const { x, y } = selected
		return this.model.find((el) => el.x === x && el.y === y) ?? null
	}

	private serialize() {
		localStorage.setItem('editor-model-data', JSON.stringify(this.model))
	}

	private load() {
		const data = localStorage.getItem('editor-model-data')
		if (data) {
			this.model = JSON.parse(data)
			this.dispatchEvent(this.event)
			modelParser.parse(this)
		}
	}
}
