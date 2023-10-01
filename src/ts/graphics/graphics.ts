import {
	AxesHelper,
	Camera,
	Color,
	PerspectiveCamera,
	Scene,
	SpotLight,
	Vector3,
	WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export class Graphics extends EventTarget {
	private static readonly DEBUG = true

	public readonly scene: Scene
	public readonly camera: Camera
	public readonly renderer: WebGLRenderer
	public readonly orbitControls: OrbitControls

	private cameraRotatedEvent = new Event('camera_rotated')

	public constructor(private readonly container: HTMLDivElement) {
		super()
		this.scene = new Scene()
		this.scene.background = new Color(0xc0ccd1)

		this.camera = new PerspectiveCamera(
			40,
			this.container.offsetWidth / this.container.offsetHeight,
			0.1,
			1000
		)
		this.renderer = new WebGLRenderer()
		this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight)
		container.appendChild(this.renderer.domElement)

		const pointLight = new SpotLight(0xffffff, 1)
		pointLight.position.set(20, 50, 20)
		pointLight.lookAt(0, 0, 0)
		this.scene.add(pointLight)

		const pointLight1 = new SpotLight(0xcccccc, 1)
		pointLight1.position.set(-20, 50, -20)
		pointLight1.lookAt(0, 0, 0)
		this.scene.add(pointLight1)

		this.camera.position.x = 13
		this.camera.position.y = 18
		this.camera.position.z = 13

		this.camera.lookAt(new Vector3(0, 0, 0))

		this.addDebug()

		this.orbitControls = this.addOrbitControls()
		this.orbitControls.addEventListener(
			'change',
			this.dispatchEvent.bind(this, this.cameraRotatedEvent)
		)
	}

	public animate() {
		if (!document.body.contains(this.container)) {
			// terminate this event loop
			return
		}
		this.updateSize()
		requestAnimationFrame(this.animate.bind(this))
		this.orbitControls.update()
		this.renderer.render(this.scene, this.camera)

		if (Graphics.DEBUG) {
			//@ts-ignore
			window.graphics = this
		}
	}

	public dump() {
		if (Graphics.DEBUG) {
			console.log('scene', this.scene)
		}
	}

	private addDebug() {
		if (Graphics.DEBUG) {
			const axesHelper = new AxesHelper(20)
			this.scene.add(axesHelper)

			// const geometry = new BoxGeometry(1, 1, 1)
			// const material = new MeshLambertMaterial({ color: 0xffffff })
			// const cube = new Mesh(geometry, material)
			// this.scene.add(cube)
		}
	}

	private addOrbitControls(): OrbitControls {
		const orbitControls = new OrbitControls(this.camera, this.renderer.domElement)
		orbitControls.enableDamping = true
		orbitControls.dampingFactor = 0.05
		return orbitControls
	}

	private updateSize() {
		this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight)
	}
}
