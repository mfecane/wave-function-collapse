import { loader } from '@/ts/graphics/Loader'
import { Group, PerspectiveCamera, Scene, SpotLight, Vector3, WebGLRenderer } from 'three'

class MeshPreviewRenderer {
	private static readonly WIDTH = 512
	private static readonly HEIGHT = 512

	private renderer: WebGLRenderer = new WebGLRenderer()
	private camera: PerspectiveCamera = new PerspectiveCamera(
		40,
		MeshPreviewRenderer.WIDTH / MeshPreviewRenderer.HEIGHT,
		0.1,
		1000
	)
	private scene: Scene = new Scene()
	private group: Group = new Group()

	public constructor() {
		this.renderer.setSize(MeshPreviewRenderer.WIDTH, MeshPreviewRenderer.HEIGHT)
		this.group.name = 'Container'

		const pointLight = new SpotLight(0xffffff, 1)
		pointLight.position.set(20, 50, 20)
		pointLight.lookAt(0, 0, 0)
		this.scene.add(pointLight)

		const pointLight1 = new SpotLight(0xcccccc, 1)
		pointLight1.position.set(-20, 50, -20)
		pointLight1.lookAt(0, 0, 0)
		this.scene.add(pointLight1)

		this.camera.position.copy(new Vector3(2, 10, 8))
		this.camera.lookAt(new Vector3(0, 0, 0))

		this.scene.add(this.group)
	}

	public async render(url: string): Promise<string | null> {
		this.group.clear()

		const mesh = await loader.loadMesh(url)
		if (!mesh) {
			return null
		}

		this.group.add(mesh)

		document.body.appendChild(this.renderer.domElement)
		this.renderer.render(this.scene, this.camera)
		const dataURL = this.renderer.domElement.toDataURL()
		document.body.removeChild(this.renderer.domElement)
		return dataURL
	}
}

export const meshPreviewRenderer = new MeshPreviewRenderer()
