import { MouseEventController } from '@/ts/controls/MouseEventController'
import { models } from '@/ts/data/models'
import { Cell, EditorModel } from '@/ts/editor/editor-model'
import { MeshNames } from '@/ts/editor/MeshNames'
import { Graphics } from '@/ts/graphics/graphics'
import { loader } from '@/ts/graphics/Loader'
import {
	BoxGeometry,
	DoubleSide,
	EdgesGeometry,
	Euler,
	GridHelper,
	Group,
	LineDashedMaterial,
	LineSegments,
	Mesh,
	MeshBasicMaterial,
	MeshStandardMaterial,
	PlaneGeometry,
	Raycaster,
	Vector2,
	Vector3,
} from 'three'

interface State {
	selected: Vector3 | null
}

export type Payload = Cell | null

export class Editor extends EventTarget {
	private readonly GRID_SIZE = 2

	public rayCaster = new Raycaster()

	private dragPlane: Mesh
	public selectMesh: LineSegments
	private viewGroup = new Group()

	public state: State = {
		selected: new Vector3(),
	}

	public model = new EditorModel()

	private gridHelper: GridHelper

	private static readonly EMPTY_MATERIAL = new MeshBasicMaterial({
		color: 0x000000,
	})

	private readonly LINE_MATERIAL = new LineDashedMaterial({
		color: 0xffffff,
		linewidth: 2,
		dashSize: 0.1,
		gapSize: 0.05,
	})

	private readonly SELECT_BOX_GEOMETRY = new BoxGeometry(2.0, 2.0, 2.0)

	private readonly SELECT_EDGES_GEOMETRY = new EdgesGeometry(this.SELECT_BOX_GEOMETRY)

	public readonly mouseEventController: MouseEventController

	public selectMeshes: Mesh[] = []

	public placementMesh: Group | null
	private placementMeshRotation: number = 0
	private placementMeshPosition: Vector3 = new Vector3()

	public constructor(public readonly graphics: Graphics) {
		super()

		this.dragPlane = this.addDragPlane()
		this.selectMesh = this.addSelectMesh()

		const divisions = 40
		this.gridHelper = new GridHelper(divisions * this.GRID_SIZE, divisions)

		this.graphics.scene.add(this.gridHelper)
		this.graphics.scene.add(this.viewGroup)

		const render = this._render.bind(this)
		this.model.addEventListener('model_updated', render)
		this.addEventListener('layer_changed', render)

		this.mouseEventController = new MouseEventController(this)

		// @ts-ignore
		window.Editor = this
	}

	public addItem(src: string) {
		this.model.addItem(this.state.selected, src)
	}

	public rotateCell() {
		this.model.rotateItem(this.state.selected)
	}

	public deleteCell() {
		this.model.deleteCell(this.state.selected)
	}

	private async _render() {
		this.viewGroup.clear()
		this.selectMeshes = [this.dragPlane]
		for (const cell of this.model.model) {
			await this.renderCube(cell)
		}
	}

	private async renderCube(cell: Cell) {
		const mesh = await loader.loadMesh(cell.src)

		if (!mesh) {
			console.warn('oh shit')
			return
		}

		const { x, y, z } = cell.position

		// if (y !== this.activeLayer) {
		// 	//@ts-ignore
		// 	mesh.children[0].material = Editor.DIMMED_MATERIAL
		// } else {
		// 	//@ts-ignore
		// 	mesh.children[0].material = Editor.ACTIVE_MATERIAL
		// }
		const position = new Vector3(
			x * this.GRID_SIZE + this.GRID_SIZE / 2,
			y * this.GRID_SIZE + this.GRID_SIZE / 2,
			z * this.GRID_SIZE + this.GRID_SIZE / 2
		)

		mesh.position.copy(position)
		mesh.rotateY((cell.rotation * Math.PI) / 2)
		this.viewGroup.add(mesh)

		this.renderSelectCube(position, cell)
	}

	private renderSelectCube(position: Vector3, cell: Cell) {
		const cube = new Mesh(this.SELECT_BOX_GEOMETRY, Editor.EMPTY_MATERIAL)
		cube.name = MeshNames.SelectCube
		cube.userData = { cell }
		cube.position.copy(position)
		cube.visible = false
		this.viewGroup.add(cube)
		this.selectMeshes.push(cube)
	}

	public selectPoint(point: Vector3 | null): void {
		this.state.selected = point
		this.updateSelectedPosition()

		if (this.state.selected) {
			this.dispatchEvent(
				new CustomEvent<Payload>('selected', {
					detail: this.model.getCell(this.state.selected),
				})
			)
			return
		}

		this.dispatchEvent(new CustomEvent<Payload>('selected', {}))
	}

	private updateSelectedPosition() {
		if (!this.state.selected) {
			this.selectMesh.visible = false
			return
		}
		this.selectMesh.visible = true
		this.selectMesh.position.copy(
			new Vector3(
				this.state.selected.x * this.GRID_SIZE + this.GRID_SIZE / 2,
				this.state.selected.y * this.GRID_SIZE + this.GRID_SIZE / 2,
				this.state.selected.z * this.GRID_SIZE + this.GRID_SIZE / 2
			)
		)
	}

	private addDragPlane(): Mesh {
		const geo = new PlaneGeometry(200, 200)
		const dragPlane = new Mesh(
			geo,
			new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 })
		)
		dragPlane.rotateOnAxis(new Vector3(1, 0, 0), -Math.PI / 2)
		dragPlane.name = MeshNames.DragPlane
		dragPlane.visible = false
		this.graphics.scene.add(dragPlane)
		return dragPlane
	}

	private addSelectMesh(): LineSegments {
		const cube = new LineSegments(this.SELECT_EDGES_GEOMETRY, this.LINE_MATERIAL)
		cube.computeLineDistances()
		this.graphics.scene.add(cube)
		return cube
	}

	public async setPlacementMesh(index: number | null) {
		if (index === null) {
			this.graphics.scene.remove(this.placementMesh)
			this.placementMesh = null
			return
		}
		this.placementMesh = await loader.loadMesh(models[index])
		this.placementMesh.userData = { index }
		this.graphics.scene.add(this.placementMesh)
	}

	public rotatePlacementMesh() {
		this.placementMeshRotation = (this.placementMeshRotation + 1) % 4
		this.updatePlacementMesh()
	}

	public setPlacementMeshPosition(point: Vector3) {
		this.placementMeshPosition.copy(
			new Vector3(
				point.x * this.GRID_SIZE + this.GRID_SIZE / 2,
				point.y * this.GRID_SIZE + this.GRID_SIZE / 2,
				point.z * this.GRID_SIZE + this.GRID_SIZE / 2
			)
		)
		this.updatePlacementMesh()
	}

	private updatePlacementMesh() {
		if (!this.placementMesh) return
		this.placementMesh.position.copy(this.placementMeshPosition)
		this.placementMesh.rotation.y = (Math.PI / 2) * this.placementMeshRotation
	}

	public placementMeshPlace() {
		if (this.placementMesh) {
			const index = this.placementMesh.userData?.index
			const p = this.placementMeshPosition
			const newPOs = new Vector3(
				Math.floor(p.x / this.GRID_SIZE),
				Math.floor(p.y / this.GRID_SIZE),
				Math.floor(p.z / this.GRID_SIZE)
			)
			this.model.addItem(newPOs, models[index], this.placementMeshRotation)
		}
	}
}
