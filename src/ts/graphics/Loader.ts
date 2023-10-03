import { Box3, Group, Vector3 } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

class Loader {
	private objLoader: OBJLoader = new OBJLoader()

	private cache = new Map<string, Group>()

	public async loadMesh(url: string): Promise<Group | null> {
		let mesh: Group | undefined
		mesh = this.cache.get(url)
		if (mesh) {
			return mesh.clone()
		}

		try {
			mesh = await new Promise<Group>((resolve, reject) =>
				this.objLoader.load(url, resolve, () => {}, reject)
			)

			const boundingBox = new Box3().setFromObject(mesh)
			const boundingBoxSize = new Vector3()
			boundingBox.getSize(boundingBoxSize)
			if (boundingBoxSize.length() === 0) {
				return null
			}
		} catch (error) {
			return null
		}

		this.cache.set(url, mesh.clone())
		return mesh
	}
}
export const loader = new Loader()
