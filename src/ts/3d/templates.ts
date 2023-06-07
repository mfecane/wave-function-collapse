import { TemplateMask } from '../template-mask'
import { templatesData } from './data/dataset'

// TODO fix circular dependency

export interface SourceData {
	mesh: string
	id: string
	rotate?: boolean
	rotation?: number
	px: string
	nx: string
	py: string
	ny: string
	pz: string
	nz: string
}

export interface MeshTemplate {
	mesh: string
	id: string
	rotation: number
	index: number
	px: TemplateMask
	nx: TemplateMask
	py: TemplateMask
	ny: TemplateMask
	pz: TemplateMask
	nz: TemplateMask
}

const connectionMap = new Map<string, boolean>()
export let templates: MeshTemplate[] = []

function tryPushConnection(allConnecitons: string[], id: string) {
	if (allConnecitons.includes(id)) {
		return
	}
	allConnecitons.push(id)
}

function buildConnections(): void {
	const allConnecitons: string[] = []
	templatesData.forEach((data) => {
		tryPushConnection(allConnecitons, data.nx)
		tryPushConnection(allConnecitons, data.px)
		tryPushConnection(allConnecitons, data.ny)
		tryPushConnection(allConnecitons, data.py)
		tryPushConnection(allConnecitons, data.nz)
		tryPushConnection(allConnecitons, data.pz)
	})

	allConnecitons.forEach((id) => {
		if (id.endsWith('_r')) {
			const newId = id.slice(0, -2) + '_l'
			connectionMap.set(id + '_' + newId, true)
		} else if (id.endsWith('_l')) {
			const newId = id.slice(0, -2) + '_r'
			connectionMap.set(id + '_' + newId, true)
		} else {
			connectionMap.set(id + '_' + id, true)
		}
	})
}

function buildTemplates() {
	const localTemplateData: SourceData[] = templatesData.reduce(
		(arr: SourceData[], templateData: SourceData) => {
			tryPushTemplate(arr, rotateTemplate(templateData, 0))
			tryPushTemplate(arr, rotateTemplate(templateData, 90))
			tryPushTemplate(arr, rotateTemplate(templateData, 180))
			tryPushTemplate(arr, rotateTemplate(templateData, 270))
			return arr
		},
		[]
	)

	const newTemplates: MeshTemplate[] = []
	const templatesCount = localTemplateData.length
	templates.length = templatesCount
	for (let i = 0; i < localTemplateData.length; ++i) {
		const newTemplate: MeshTemplate = {
			mesh: localTemplateData[i].mesh,
			id: localTemplateData[i].id,
			rotation: localTemplateData[i].rotation,
			index: i,
			px: new TemplateMask(),
			nx: new TemplateMask(),
			py: new TemplateMask(),
			ny: new TemplateMask(),
			pz: new TemplateMask(),
			nz: new TemplateMask(),
		}
		for (let j = 0; j < templatesCount; ++j) {
			newTemplate.px.setAt(
				j,
				checkTemplate(localTemplateData[i], localTemplateData[j], 'px')
			)
			newTemplate.nx.setAt(
				j,
				checkTemplate(localTemplateData[i], localTemplateData[j], 'nx')
			)
			newTemplate.py.setAt(
				j,
				checkTemplate(localTemplateData[i], localTemplateData[j], 'py')
			)
			newTemplate.ny.setAt(
				j,
				checkTemplate(localTemplateData[i], localTemplateData[j], 'ny')
			)
			newTemplate.pz.setAt(
				j,
				checkTemplate(localTemplateData[i], localTemplateData[j], 'pz')
			)
			newTemplate.nz.setAt(
				j,
				checkTemplate(localTemplateData[i], localTemplateData[j], 'nz')
			)
		}
		newTemplates.push(newTemplate)
	}
	templates = newTemplates
}

function tryPushTemplate(arr: SourceData[], el: SourceData) {
	const index = arr.findIndex((el1) => {
		return (
			el1.mesh === el.mesh &&
			el1.px === el.px &&
			el1.nx === el.nx &&
			el1.py === el.py &&
			el1.ny === el.ny &&
			el1.nz === el.nz &&
			el1.pz === el.pz
		)
	})

	if (index === -1) {
		arr.push(el)
	}
}

function checkTemplate(
	source: SourceData,
	target: SourceData,
	direction: string
): 0 | 1 {
	return (() => {
		switch (direction) {
			case 'nx':
				return connectionMap.get(`${source.nx}_${target.px}`)
			case 'px':
				return connectionMap.get(`${source.px}_${target.nx}`)
			case 'ny':
				return connectionMap.get(`${source.ny}_${target.py}`)
			case 'py':
				return connectionMap.get(`${source.py}_${target.ny}`)
			case 'nz':
				return connectionMap.get(`${source.nz}_${target.pz}`)
			case 'pz':
				return connectionMap.get(`${source.pz}_${target.nz}`)
		}
	})()
		? 1
		: 0
}

function rotateTemplate(template: SourceData, angle: number): SourceData {
	const result = { ...template, rotation: angle }
	switch (angle) {
		case 90:
			result.px = template.py
			result.nx = template.ny
			result.py = template.nx
			result.ny = template.px
			break
		case 180:
			result.px = template.nx
			result.nx = template.px
			result.py = template.ny
			result.ny = template.py
			break
		case 270:
			result.px = template.ny
			result.nx = template.py
			result.py = template.px
			result.ny = template.nx
			break
	}
	return result
}

buildConnections()
buildTemplates()
