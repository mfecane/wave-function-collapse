import { Cell, EditorModel } from '@/ts/editor/editor-model'
import { Vector2 } from 'three'
import { TemplateMask } from '@/ts/wfc/template-mask'
import { TemplateMaskFactory } from '@/ts/wfc/template-mask-factory'

export enum CubeAdjacency {
	px = 'px',
	nx = 'nx',
	py = 'py',
	ny = 'ny',
}

export interface TemplateData {
	src: string
	id: string
	rotation: 0
	[CubeAdjacency.px]?: TemplateMask
	[CubeAdjacency.py]?: TemplateMask
	[CubeAdjacency.nx]?: TemplateMask
	[CubeAdjacency.ny]?: TemplateMask
}

const srcs = ['meshes/corner.obj', 'meshes/wall.obj']

/**
 * @description creates array of templates to feed to the algorythm by parsing grid created by the user
 * The general idea is to parse non-void cells and find connections between theirs templates. Add corresponding
 * relationships to these templates and also to any rotation of these templates
 * @todo account for symmetry rules
 * If one side of cell template does not have any connections make it to connect with void
 * @todo and also with any other empty connection side
 * @todo try to analyze temoplate mesh to find connections with void
 */
export class ModelParser {
	private readonly templates: TemplateData[] = []
	private readonly templateMaskFactory: TemplateMaskFactory

	public constructor() {
		this.templateMaskFactory = new TemplateMaskFactory()
	}

	public parse(model: EditorModel) {
		this.templates.splice(0)

		const tmpTemplates: TemplateData[] = []
		tmpTemplates.push(...this.getDefaultTemplates())
		tmpTemplates.push(...this.getSrcTemplates())
		const templateCount = tmpTemplates.length
		this.templates.push(
			...tmpTemplates.map((el) => ({
				...el,
				id: el.src,
				px: this.templateMaskFactory.create(templateCount),
				nx: this.templateMaskFactory.create(templateCount),
				py: this.templateMaskFactory.create(templateCount),
				ny: this.templateMaskFactory.create(templateCount),
			}))
		)

		// make zeros adjacent to each other
		for (const key of Object.values(CubeAdjacency)) {
			this.templates[0][key].setAt2(0)
		}

		for (let i = -40; i <= 40; ++i) {
			for (let j = -40; j <= 40; ++j) {
				// if (!model.getCell(new Vector2(i, j))) continue
				// todo optimize
				this.parseCell(model, new Vector2(i, j))
			}
		}

		this.addZeros()
		console.log('parsed templates', this.templates)
	}

	public getTemplates() {
		return this.templates
	}

	private getSrcTemplates(): TemplateData[] {
		const res = []
		for (let i = 0; i < srcs.length; ++i) {
			res.push({ src: srcs[i], rotation: 0 })
			res.push({ src: srcs[i], rotation: 1 })
			res.push({ src: srcs[i], rotation: 2 })
			res.push({ src: srcs[i], rotation: 3 })
		}
		return res
	}

	private findTemplateIndex(_src: string, _rotation: number): number {
		const res = this.templates.findIndex(
			({ src, rotation }) => src === _src && rotation === _rotation
		)
		if (res === -1) throw 'Template not found'
		return res
	}

	private getDefaultTemplates(): TemplateData[] {
		return ['void'].map((src) => ({ src, id: src, rotation: 0 }))
	}

	private parseCell(model: EditorModel, position: Vector2) {
		if (!model.getCell(position)) return
		this.parsePair(model, CubeAdjacency.px, position, position.clone().add(new Vector2(1, 0)))
		this.parsePair(model, CubeAdjacency.nx, position, position.clone().add(new Vector2(-1, 0)))
		this.parsePair(model, CubeAdjacency.py, position, position.clone().add(new Vector2(0, 1)))
		this.parsePair(model, CubeAdjacency.ny, position, position.clone().add(new Vector2(0, -1)))
	}

	private parsePair(
		model: EditorModel,
		key: CubeAdjacency,
		position: Vector2,
		position2: Vector2
	) {
		// todo memoize
		this.parsePairRotate(0, key, model.getCell(position), model.getCell(position2))
		this.parsePairRotate(1, key, model.getCell(position), model.getCell(position2))
		this.parsePairRotate(2, key, model.getCell(position), model.getCell(position2))
		this.parsePairRotate(3, key, model.getCell(position), model.getCell(position2))
	}

	private parsePairRotate(rotation: number, key: CubeAdjacency, cell1: Cell, cell2: Cell | null) {
		const key2 = this.rotateKey(key, -rotation)

		let index1: number
		if (cell1) {
			//symmetry
			index1 = this.findTemplateIndex(cell1.src, this.addRotate(cell1.rotation, rotation))
		} else {
			index1 = 0
		}

		let index2: number
		if (cell2) {
			//symmetry
			index2 = this.findTemplateIndex(cell2.src, this.addRotate(cell2.rotation, rotation))
		} else {
			index2 = 0
		}

		const mask = this.templates[index1][key2]
		mask.setAt2(index2)
		const key3 = this.reverseKey(key2)

		const mask2 = this.templates[index2][key3]
		mask2.setAt2(index1)
	}

	private rotateKey(key: CubeAdjacency, rotation: number): CubeAdjacency {
		const arr = [CubeAdjacency.px, CubeAdjacency.py, CubeAdjacency.nx, CubeAdjacency.ny]
		let index = arr.findIndex((el) => el === key)
		if (index === -1) throw "Can't rotate index"
		return arr[this.addRotate(index, rotation)]
	}

	private reverseKey(key: CubeAdjacency): CubeAdjacency {
		switch (key) {
			case CubeAdjacency.px:
				return CubeAdjacency.nx
			case CubeAdjacency.nx:
				return CubeAdjacency.px
			case CubeAdjacency.py:
				return CubeAdjacency.ny
			case CubeAdjacency.ny:
				return CubeAdjacency.py
		}
	}

	private addZeros(): void {
		this.templates.forEach((el, index) => {
			if (index === 0) return

			for (const key of Object.values(CubeAdjacency)) {
				if (el[key].isAllZeros()) {
					el[key].setAt2(0)
					this.propagateWithZero(el.src, el.rotation, key)
				}
			}
		})
	}

	private propagateWithZero(src: string, rotation: number, key: CubeAdjacency) {
		const zeroTemplate = this.templates[0]
		const key1 = this.reverseKey(key)
		for (let rot = 0; rot < 4; ++rot) {
			const key2 = this.rotateKey(key1, rot)
			console.log('key2', key2)
			const index = this.findTemplateIndex(src, this.addRotate(rotation, rot))
			zeroTemplate[key2].setAt2(index)
		}

		// TODO mate voids with each other
	}

	private addRotate(n1: number, n2: number): number {
		return (4 + n1 + n2) % 4
	}
}

export const modelParser = new ModelParser()
