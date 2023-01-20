import { Mesh, Group, MeshLambertMaterial } from 'three'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { scene } from '../renderer/graphics'
import { MeshInstance } from './cube-item-instance'
import { CubeGrid } from './cube-grid'

export class CubeRenderer {
	private readonly TILE_SIZE = 2
	private group: THREE.Group
	private loader: OBJLoader = new OBJLoader()
	private material = new MeshLambertMaterial({ color: 0xffffff })
	private rendering = false

	private cache = new Map<string, Mesh>()

	public constructor() {
		this.group = new Group()
		scene.add(this.group)
	}

	public async tryRender(set: CubeGrid) {
		if (this.rendering) {
			return
		}
		this.rendering = true
		this.group.clear()
		const list: MeshInstance[] = []
		set.eachElement((instance) => list.push(instance))
		for (let instance of list) {
			await this.tryRenderELement(set, instance)
		}
		this.rendering = false
	}

	private async tryRenderELement(set: CubeGrid, instance: MeshInstance) {
		if (
			instance.states.length === 0 ||
			instance.dead ||
			instance.states.length > 1
		) {
			return
		}
		await this.addMesh(set, instance)
	}

	private async loadMesh(url: string) {
		let mesh: Mesh = this.cache.get(url)
		if (mesh) {
			return mesh.clone(true)
		}
		mesh = await new Promise<Mesh>(
			(resolve) => this.loader.load(url, resolve) as Mesh
		)
		this.cache.set(url, mesh)
		return mesh.clone(true)
	}

	private async addMesh(set: CubeGrid, instance: MeshInstance) {
		const state = instance.states[0]
		if (!state || state.mesh === 'void') {
			return
		}
		const mesh = await this.loadMesh(state.mesh)
		mesh.rotateY((state.rotation / 180) * Math.PI)
		mesh.position.set(
			(instance.x - set.MAX_HORIZONTAL / 2) * this.TILE_SIZE,
			instance.z * this.TILE_SIZE,
			(instance.y - set.MAX_HORIZONTAL / 2) * this.TILE_SIZE
		)
		mesh.material = this.material
		this.group.add(mesh)
	}
}
