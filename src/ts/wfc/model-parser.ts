import { Cell, EditorModel } from '@/ts/editor/editor-model'
import { Vector3 } from 'three'
import { TemplateMask } from '@/ts/wfc/template-mask'
import { models } from '@/ts/data/models'

export enum AdjacencyKey {
	px = 'px',
	nx = 'nx',
	py = 'py',
	ny = 'ny',
	pz = 'pz',
	nz = 'nz',
}

export interface TemplateData {
	src: string
	id: string
	rotation: 0
	[AdjacencyKey.px]?: TemplateMask
	[AdjacencyKey.py]?: TemplateMask
	[AdjacencyKey.nx]?: TemplateMask
	[AdjacencyKey.ny]?: TemplateMask
	[AdjacencyKey.pz]?: TemplateMask
	[AdjacencyKey.nz]?: TemplateMask
}

/**
 * @description creates array of templates to feed to the algorythm by parsing grid created by the user
 * The general idea is to parse non-void cells and find connections between theirs templates. Add corresponding
 * relationships to these templates and also to any rotation of these templates
 * @todo account for symmetry rules
 * If one side of cell template does not have any connections make it to connect with void
 * @todo and also with any other empty connection side
 * @idea try to analyze template mesh to find connections with no vertices to automatically mate it with the void
 */
export class ModelParser {
	public iterations = 0
	private readonly templates: TemplateData[] = []

	public constructor() {}

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
				[AdjacencyKey.px]: new TemplateMask(templateCount),
				[AdjacencyKey.nx]: new TemplateMask(templateCount),
				[AdjacencyKey.py]: new TemplateMask(templateCount),
				[AdjacencyKey.ny]: new TemplateMask(templateCount),
				[AdjacencyKey.pz]: new TemplateMask(templateCount),
				[AdjacencyKey.nz]: new TemplateMask(templateCount),
			}))
		)

		this.setupDefaultConstraints()

		model.model.forEach((cell) => {
			this.parseCell(model, cell)
		})

		console.log('parser::iterations', this.iterations)
		console.log('parser::templates', this.templates)
	}

	private setupDefaultConstraints() {
		// TODO extract asap and annotate
		// make voids adjacent to each other

		for (const key of Object.values(AdjacencyKey)) {
			this.templates[0][key].on(0)
		}
		for (const key of [AdjacencyKey.px, AdjacencyKey.nx, AdjacencyKey.nz, AdjacencyKey.pz]) {
			this.templates[0][key].on(1)
			this.templates[1][key].on(0)
			this.templates[1][key].on(1)
		}
		this.templates[0].ny.on(1)
		this.templates[1].py.on(0)
	}

	public getTemplates() {
		return this.templates
	}

	private getSrcTemplates(): TemplateData[] {
		const res = []
		for (let i = 0; i < models.length; ++i) {
			res.push({ src: models[i], rotation: 0 })
			res.push({ src: models[i], rotation: 1 })
			res.push({ src: models[i], rotation: 2 })
			res.push({ src: models[i], rotation: 3 })
		}
		return res
	}

	private findTemplateIndex(_src: string, _rotation: number): number | null {
		const res = this.templates.findIndex(
			({ src, rotation }) => src === _src && rotation === _rotation
		)
		if (res === -1) return null
		return res
	}

	private getDefaultTemplates(): TemplateData[] {
		return ['void', 'ground'].map((src) => ({ src, id: src, rotation: 0 }))
	}

	private parseCell(model: EditorModel, cell: Cell) {
		const p = cell.position
		this.parsePair(model, AdjacencyKey.px, cell, p.clone().add(new Vector3(1, 0, 0)))
		this.parsePair(model, AdjacencyKey.nx, cell, p.clone().add(new Vector3(-1, 0, 0)))
		this.parsePair(model, AdjacencyKey.py, cell, p.clone().add(new Vector3(0, 1, 0)))
		this.parsePair(model, AdjacencyKey.ny, cell, p.clone().add(new Vector3(0, -1, 0)))
		this.parsePair(model, AdjacencyKey.pz, cell, p.clone().add(new Vector3(0, 0, 1)))
		this.parsePair(model, AdjacencyKey.nz, cell, p.clone().add(new Vector3(0, 0, -1)))
	}

	/**
	 * @note A very bold assumption that we don't have any tiles under ground
	 * should restrict in editor model
	 */
	private parsePair(model: EditorModel, key: AdjacencyKey, cell1: Cell, position2: Vector3) {
		const cell2: Cell | null = model.getCell(position2)
		if (cell2) {
			this.mateTwo(cell1.src, cell1.rotation, cell2.src, cell2.rotation, key, false)
		} else {
			this.mateTwo(cell1.src, cell1.rotation, 'жопа', 0, key, position2.y < 0)
		}
	}

	private mateTwo(
		src1: string,
		rotation1: number,
		src2: string,
		rotation2: number,
		key: AdjacencyKey,
		isGround: boolean
	): void {
		for (let rotation = 0; rotation < 4; ++rotation) {
			// ? why '-'
			const key1 = this.rotateKey(key, -rotation)
			const key2 = this.reverseKey(key1)
			const index1 = this.findTemplateIndex(src1, this.addRotate(rotation1, rotation))
			let index2 = this.findTemplateIndex(src2, this.addRotate(rotation2, rotation))
			if (!index2) {
				index2 = isGround ? 1 : 0
			}
			this.templates[index1][key1].on(index2)
			this.templates[index2][key2].on(index1)
			this.iterations++
		}
	}

	private addRotate(n1: number, n2: number): number {
		return (4 + n1 + n2) % 4
	}

	private rotateKey(key: AdjacencyKey, rotation: number): AdjacencyKey {
		if ([AdjacencyKey.py, AdjacencyKey.ny].includes(key)) {
			return key
		}
		const arr = [AdjacencyKey.px, AdjacencyKey.pz, AdjacencyKey.nx, AdjacencyKey.nz]
		let index = arr.findIndex((el) => el === key)
		if (index === -1) throw "Can't rotate index"
		return arr[this.addRotate(index, rotation)]
	}

	private reverseKey(key: AdjacencyKey): AdjacencyKey {
		switch (key) {
			case AdjacencyKey.px:
				return AdjacencyKey.nx
			case AdjacencyKey.nx:
				return AdjacencyKey.px
			case AdjacencyKey.py:
				return AdjacencyKey.ny
			case AdjacencyKey.ny:
				return AdjacencyKey.py
			case AdjacencyKey.pz:
				return AdjacencyKey.nz
			case AdjacencyKey.nz:
				return AdjacencyKey.pz
		}
	}
}

export const modelParser = new ModelParser()
