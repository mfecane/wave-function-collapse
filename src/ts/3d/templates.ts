import { templatesData } from './data/dataset'

export interface SourceData {
	mesh: string
	name: string
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
	name: string
	rotation: number
	index: number
	px: Int8Array
	nx: Int8Array
	py: Int8Array
	ny: Int8Array
	pz: Int8Array
	nz: Int8Array
}

const connectionMap = buildConnections()

function tryPushConnection(allConnecitons: string[], id: string) {
	if (allConnecitons.includes(id)) {
		return
	}
	allConnecitons.push(id)
}

function buildConnections(): Map<string, boolean> {
	const connectionMap = new Map<string, boolean>()

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
	return connectionMap
}

export function buildTemplates() {
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
	for (let i = 0; i < localTemplateData.length; ++i) {
		const newTemplate: MeshTemplate = {
			mesh: localTemplateData[i].mesh,
			name: localTemplateData[i].name,
			rotation: localTemplateData[i].rotation,
			index: i,
			px: new Int8Array(templatesCount),
			nx: new Int8Array(templatesCount),
			py: new Int8Array(templatesCount),
			ny: new Int8Array(templatesCount),
			pz: new Int8Array(templatesCount),
			nz: new Int8Array(templatesCount),
		}
		for (let j = 0; j < templatesCount; ++j) {
			newTemplate.px[j] = checkTemplate(
				localTemplateData[i],
				localTemplateData[j],
				'px'
			)
			newTemplate.nx[j] = checkTemplate(
				localTemplateData[i],
				localTemplateData[j],
				'nx'
			)
			newTemplate.py[j] = checkTemplate(
				localTemplateData[i],
				localTemplateData[j],
				'py'
			)
			newTemplate.ny[j] = checkTemplate(
				localTemplateData[i],
				localTemplateData[j],
				'ny'
			)
			newTemplate.pz[j] = checkTemplate(
				localTemplateData[i],
				localTemplateData[j],
				'pz'
			)
			newTemplate.nz[j] = checkTemplate(
				localTemplateData[i],
				localTemplateData[j],
				'nz'
			)
		}
		newTemplates.push(newTemplate)
	}
	return newTemplates
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
