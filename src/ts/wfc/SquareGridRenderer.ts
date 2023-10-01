import {
	Mesh,
	Group,
	MeshLambertMaterial,
	BoxGeometry,
	Vector3,
	MeshBasicMaterial,
	MeshStandardMaterial,
} from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Graphics } from '@/ts/graphics/graphics'
import { modelParser } from '@/ts/wfc/model-parser'
import { SquareGrid } from '@/ts/wfc/grid/square-grid'
import { SquareGridInstance } from '@/ts/wfc/grid/square-grid-instance'
import { SolverEventPayload } from '@/ts/wfc/algorythm/algorithm'

export class SquareGridRenderer {
	private readonly TILE_SIZE = 2
	private group: THREE.Group
	private loader: OBJLoader = new OBJLoader()
	private material = new MeshLambertMaterial({ color: 0xffffff })
	private collapsingMaterial = new MeshLambertMaterial({
		color: 0x66cc66,
		transparent: true,
		opacity: 0.5,
	})
	private rendering = false
	private collapsingMesh: Mesh

	private cache = new Map<string, Mesh>()
	private readonly squareGeometry = new BoxGeometry(
		this.TILE_SIZE,
		this.TILE_SIZE,
		this.TILE_SIZE
	)

	private enthropyMaterials = []

	public constructor(private readonly graphics: Graphics) {
		this.group = new Group()
		this.collapsingMesh = new Mesh(
			new BoxGeometry(this.TILE_SIZE, this.TILE_SIZE, this.TILE_SIZE),
			this.collapsingMaterial
		)
		this.collapsingMesh.visible = false
		this.graphics.scene.add(this.collapsingMesh)
		this.graphics.scene.add(this.group)

		this.createEnthropymaterials()
	}

	/**
	 * @todo debounce
	 */
	public async tryRender(set: SquareGrid) {
		if (this.rendering) {
			return
		}
		this.rendering = true
		this.group.clear()
		const list: SquareGridInstance[] = []
		set.eachElement((instance) => list.push(instance))
		for (let instance of list) {
			await this.tryRenderElement(instance)
		}
		this.rendering = false
	}

	private createEnthropymaterials() {
		this.enthropyMaterials = [
			new MeshStandardMaterial(this.getOptions(0.1)),
			new MeshStandardMaterial(this.getOptions(0.2)),
			new MeshStandardMaterial(this.getOptions(0.3)),
			new MeshStandardMaterial(this.getOptions(0.4)),
			new MeshStandardMaterial(this.getOptions(0.5)),
		]
	}

	private getOptions(opacity) {
		return { color: 0xffffff, transparent: true, opacity }
	}

	private async tryRenderElement(instance: SquareGridInstance) {
		if (instance.enthropy !== 1 || instance.dead) {
			return this.renderUnresolved(instance)
		}
		await this.addMesh(instance)
	}

	private renderUnresolved(instance: SquareGridInstance) {
		// todo refactor this
		const templatesLength = modelParser.getTemplates().length
		const index = Math.floor((instance.enthropy / templatesLength) * 5)
		const mesh = new Mesh(this.squareGeometry, this.enthropyMaterials[index])
		mesh.position.copy(this.convertPosition(instance.x, instance.y, instance.z))
		this.group.add(mesh)
	}

	private async loadMesh(url: string) {
		let mesh: Mesh = this.cache.get(url)
		if (mesh) {
			return mesh.clone(true)
		}
		//@ts-ignore
		mesh = await new Promise<Mesh>((resolve) => this.loader.load(url, resolve) as Mesh)
		this.cache.set(url, mesh)
		return mesh.clone(true)
	}

	private async addMesh(instance: SquareGridInstance) {
		const state = modelParser.getTemplates()[instance.tryGetOnlyState()]
		if (!state || state.src === 'void') {
			return
		}
		const mesh = await this.loadMesh(state.src)
		mesh.rotateY((state.rotation * Math.PI) / 2)
		mesh.position.copy(this.convertPosition(instance.x, instance.y, instance.z))
		mesh.material = this.material
		this.group.add(mesh)
	}

	private convertPosition(x: number, y: number, z: number) {
		return new Vector3(
			(x - SquareGrid.MAX_HORIZONTAL / 2) * this.TILE_SIZE,
			y * this.TILE_SIZE - this.TILE_SIZE / 2,
			(z - SquareGrid.MAX_HORIZONTAL / 2) * this.TILE_SIZE
		)
	}

	public handleEvent(event: CustomEvent<SolverEventPayload>) {
		this.tryRender(event.detail.set)
		this.collapsingMesh.visible = true
		if (event.detail.current) {
			this.collapsingMesh.position.copy(
				this.convertPosition(
					event.detail.current.x,
					event.detail.current.y,
					event.detail.current.z
				)
			)
		}
	}

	public handleFinishedEvent() {
		this.collapsingMesh.visible = false
	}
}
