import { Mesh, Group, MeshLambertMaterial } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Graphics } from '@/ts/graphics/graphics'
import { modelParser } from '@/ts/wfc/model-parser'
import { SquareGrid } from '@/ts/wfc/grid/square-grid'
import { SquareGridInstance } from '@/ts/wfc/grid/square-grid-instance'

export class SquareGridRenderer {
	private readonly TILE_SIZE = 2
	private group: THREE.Group
	private loader: OBJLoader = new OBJLoader()
	private material = new MeshLambertMaterial({ color: 0xffffff })
	private rendering = false

	private cache = new Map<string, Mesh>()

	public constructor(private readonly graphics: Graphics) {
		this.group = new Group()
		this.graphics.scene.add(this.group)
	}

	public async tryRender(set: SquareGrid) {
		if (this.rendering) {
			return
		}
		this.rendering = true
		this.group.clear()
		const list: SquareGridInstance[] = []
		set.eachElement((instance) => list.push(instance))
		for (let instance of list) {
			await this.tryRenderELement(set, instance)
		}
		this.rendering = false
	}

	private async tryRenderELement(set: SquareGrid, instance: SquareGridInstance) {
		if (instance.enthropy !== 1 || instance.dead) {
			return
		}
		await this.addMesh(set, instance)
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

	private async addMesh(set: SquareGrid, instance: SquareGridInstance) {
		const state = modelParser.getTemplates()[instance.tryGetOnlyState()]
		if (!state || state.src === 'void') {
			return
		}
		const mesh = await this.loadMesh(state.src)
		mesh.rotateY((state.rotation * Math.PI) / 2)
		mesh.position.set(
			(instance.x - set.MAX_HORIZONTAL / 2) * this.TILE_SIZE,
			0,
			(instance.y - set.MAX_HORIZONTAL / 2) * this.TILE_SIZE
		)
		mesh.material = this.material
		this.group.add(mesh)
	}
}
