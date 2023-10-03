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
import { modelParser, templates } from '@/ts/wfc/model-parser'
import { SquareGrid } from '@/ts/wfc/grid/square-grid'
import { SquareGridInstance } from '@/ts/wfc/grid/square-grid-instance'
import { SolverEventPayload } from '@/ts/wfc/algorythm/algorithm'

export class SquareGridRenderer {
	private readonly TILE_SIZE = 2
	private group: THREE.Group
	private loader: OBJLoader = new OBJLoader()
	private rendering = false
	private cache = new Map<string, Mesh>()

	private readonly squareGeometry = new BoxGeometry(
		this.TILE_SIZE,
		this.TILE_SIZE,
		this.TILE_SIZE
	)

	private material = new MeshStandardMaterial({ color: 0xcccccc })

	private enthropyMaterials = []

	public constructor(private readonly graphics: Graphics) {
		this.group = new Group()
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
		const templatesLength = templates.length
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
		const state = templates[instance.tryGetOnlyState()]
		if (!state || state.src === 'void' || state.src === 'ground') {
			return
		}
		const mesh = await this.loadMesh(state.src)
		mesh.rotateY((state.rotation * Math.PI) / 2)
		mesh.position.copy(this.convertPosition(instance.x, instance.y, instance.z))
		mesh.material = this.material
		mesh.castShadow = true
		mesh.receiveShadow = true

		const child = mesh.children[0]
		//@ts-ignore
		child.material = this.material
		child.castShadow = true
		child.receiveShadow = true

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
	}

	public handleFinishedEvent() {}
}
