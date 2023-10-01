import { EditorModel } from '@/ts/editor/editor-model'
import { ModelParser } from '@/ts/wfc/model-parser'
import { Graphics } from '@/ts/graphics/graphics'
import { loader } from '@/ts/graphics/Loader'
import {
	BoxGeometry,
	EdgesGeometry,
	GridHelper,
	Group,
	LineDashedMaterial,
	LineSegments,
	Mesh,
	MeshBasicMaterial,
	PlaneGeometry,
	Raycaster,
	Vector2,
	Vector3,
} from 'three'

interface State {
	selected: Vector2
}

interface Cell {
	x: number
	y: number
	src: string
	rotation: number
}

export class Editor {
	private readonly GRID_SIZE = 2

	public rayCaster = new Raycaster()

	private dragPlane: Mesh
	private selectMesh: LineSegments
	private editable = new Group()

	private state: State = {
		selected: new Vector2(),
	}

	private model = new EditorModel()

	public constructor(private readonly graphics: Graphics) {
		this.dragPlane = this.addDragPlane()
		this.selectMesh = this.addSelectMesh()

		const divisions = 40
		const gridHelper = new GridHelper(divisions * this.GRID_SIZE, divisions)

		this.graphics.scene.add(gridHelper)
		this.graphics.scene.add(this.editable)

		graphics.renderer.domElement.addEventListener('mousedown', (event: MouseEvent) =>
			this.onMouseDown(event)
		)

		this.model.addEventListener('model_updated', this.renderComponents.bind(this))
	}

	public addItem(src: string) {
		console.log('this.state.selected', this.state.selected)
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
				const cell = this.model.getCell(new Vector2(i, j))
				if (cell) {
					const mesh = await loader.loadMesh(cell.src)
					if (mesh) {
						mesh.position.copy(
							new Vector3(
								i * this.GRID_SIZE + this.GRID_SIZE / 2,
								this.GRID_SIZE / 2,
								j * this.GRID_SIZE + this.GRID_SIZE / 2
							)
						)
						mesh.rotateY((cell.rotation * Math.PI) / 2)
						this.editable.add(mesh)
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

		this.state.selected = new Vector2(x, z)
		this.selectMesh.position.copy(this.getSelectionPosition())
	}

	private getSelectionPosition() {
		return new Vector3(
			this.state.selected.x * this.GRID_SIZE + this.GRID_SIZE / 2,
			this.GRID_SIZE / 2,
			this.state.selected.y * this.GRID_SIZE + this.GRID_SIZE / 2
		)
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
}
