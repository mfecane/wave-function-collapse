import { Box3, Group, Vector3 } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

class Loader {
	private objLoader: OBJLoader = new OBJLoader()

	public async loadMesh(url: string): Promise<Group | null> {
		let mesh: Group

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

		return mesh
	}
}
export const loader = new Loader()
