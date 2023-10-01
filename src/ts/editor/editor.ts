import { Cell, EditorModel } from '@/ts/editor/editor-model'
import { Graphics } from '@/ts/graphics/graphics'
import { loader } from '@/ts/graphics/Loader'
import {
	BoxGeometry,
	DoubleSide,
	EdgesGeometry,
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
	selected: Vector3
}

export type Payload = Cell | null

export class Editor extends EventTarget {
	private readonly GRID_SIZE = 2

	public rayCaster = new Raycaster()

	private dragPlane: Mesh
	public selectMesh: LineSegments
	private editable = new Group()

	private state: State = {
		selected: new Vector3(),
	}

	private activeLayer = 0

	public model = new EditorModel()

	private gridHelper: GridHelper

	private static readonly DIMMED_MATERIAL = new MeshStandardMaterial({
		color: 0x666666,
		transparent: true,
		opacity: 0.8,
		side: DoubleSide,
	})

	private static readonly ACTIVE_MATERIAL = new MeshStandardMaterial({
		color: 0xffffff,
		side: DoubleSide,
	})

	public constructor(private readonly graphics: Graphics) {
		super()

		this.dragPlane = this.addDragPlane()
		this.selectMesh = this.addSelectMesh()

		const divisions = 40
		this.gridHelper = new GridHelper(divisions * this.GRID_SIZE, divisions)

		this.graphics.scene.add(this.gridHelper)
		this.graphics.scene.add(this.editable)

		this.graphics.renderer.domElement.addEventListener('mousedown', (event: MouseEvent) =>
			this.onMouseDown(event)
		)

		const renderComponents = this.renderComponents.bind(this)
		this.model.addEventListener('model_updated', renderComponents)
		this.addEventListener('layer_changed', renderComponents)
	}

	public addItem(src: string) {
		this.model.addItem(this.state.selected, src)
	}

	public rotateItem() {
		this.model.rotateItem(this.state.selected)
	}

	public deleteCell() {
		this.model.deleteCell(this.state.selected)
	}

	public async renderComponents() {
		this.editable.clear()
		for (let i = -40; i <= 40; ++i) {
			for (let j = -40; j <= 40; ++j) {
				for (let k = -40; k <= 40; ++k) {
					const cell = this.model.getCell(new Vector3(i, j, k))
					if (cell) {
						const mesh = await loader.loadMesh(cell.src)
						if (j !== this.activeLayer) {
							//@ts-ignore
							mesh.children[0].material = Editor.DIMMED_MATERIAL
						} else {
							//@ts-ignore
							mesh.children[0].material = Editor.ACTIVE_MATERIAL
						}

						if (mesh) {
							mesh.position.copy(
								new Vector3(
									i * this.GRID_SIZE + this.GRID_SIZE / 2,
									j * this.GRID_SIZE + this.GRID_SIZE / 2,
									k * this.GRID_SIZE + this.GRID_SIZE / 2
								)
							)
							mesh.rotateY((cell.rotation * Math.PI) / 2)
							this.editable.add(mesh)
						}
					}
				}
			}
		}
	}

	private onMouseDown(event: MouseEvent) {
		if (event.button !== 0) return
		const point = this.getPoint(event)
		const x = Math.floor(point.x / this.GRID_SIZE)
		const z = Math.floor(point.z / this.GRID_SIZE)
		const y = this.state.selected.y
		this.changeSelected(new Vector3(x, y, z))
	}

	private changeSelected(vec: Vector3) {
		this.state.selected = vec
		this.updateSelectedPosition()
		const selected = this.model.getCell(this.state.selected)
		this.dispatchEvent(new CustomEvent<Payload>('selected', { detail: selected }))
	}

	private updateSelectedPosition() {
		this.selectMesh.position.copy(
			new Vector3(
				this.state.selected.x * this.GRID_SIZE + this.GRID_SIZE / 2,
				this.state.selected.y * this.GRID_SIZE + this.GRID_SIZE / 2,
				this.state.selected.z * this.GRID_SIZE + this.GRID_SIZE / 2
			)
		)
		this.dragPlane.position.y = this.state.selected.y * this.GRID_SIZE
		this.gridHelper.position.y = this.state.selected.y * this.GRID_SIZE
	}

	private getPoint(event: MouseEvent) {
		//@ts-ignore
		const canvasBounds = this.graphics.renderer.getContext().canvas.getBoundingClientRect()
		const mouse = new Vector2()
		mouse.x =
			((event.clientX - canvasBounds.left) / (canvasBounds.right - canvasBounds.left)) * 2 - 1
		mouse.y =
			-((event.clientY - canvasBounds.top) / (canvasBounds.bottom - canvasBounds.top)) * 2 + 1
		this.rayCaster.setFromCamera(mouse, this.graphics.camera)

		const intersects = this.rayCaster.intersectObjects([this.dragPlane!])
		if (intersects.length !== 0) {
			return intersects[0].point
		}
		return new Vector3(0, 0, 0)
	}

	private addDragPlane(): Mesh {
		const geo = new PlaneGeometry(200, 200)
		const dragPlane = new Mesh(
			geo,
			new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 })
		)
		dragPlane.rotateOnAxis(new Vector3(1, 0, 0), -Math.PI / 2)
		dragPlane.name = 'drag plane'
		dragPlane.visible = false
		this.graphics.scene.add(dragPlane)
		return dragPlane
	}

	private addSelectMesh(): LineSegments {
		const cubeGeometry = new BoxGeometry(2, 2, 2)
		const lineMaterial = new LineDashedMaterial({
			color: 0x00ff00,
			linewidth: 2,
			dashSize: 0.1,
			gapSize: 0.05,
		})
		const cube = new LineSegments(new EdgesGeometry(cubeGeometry), lineMaterial)
		cube.computeLineDistances()
		this.graphics.scene.add(cube)
		return cube
	}

	public setLayer(layer: number) {
		this.activeLayer = layer
		this.changeSelected(new Vector3(this.state.selected.x, layer, this.state.selected.z))
		this.dispatchEvent(new CustomEvent('layer_changed'))
	}
}
