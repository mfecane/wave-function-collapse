import {
	AxesHelper,
	Camera,
	Color,
	Fog,
	MathUtils,
	Mesh,
	MeshBasicMaterial,
	MeshStandardMaterial,
	PCFSoftShadowMap,
	PerspectiveCamera,
	PlaneGeometry,
	Scene,
	SpotLight,
	Vector3,
	WebGLRenderer,
	BasicShadowMap,
	DirectionalLight,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Sky } from 'three/examples/jsm/objects/Sky.js'

export class Graphics extends EventTarget {
	private static readonly DEBUG = false

	public readonly scene: Scene
	public readonly camera: Camera
	public readonly renderer: WebGLRenderer
	public readonly orbitControls: OrbitControls

	private cameraRotatedEvent = new Event('camera_rotated')

	public constructor(private readonly container: HTMLDivElement) {
		super()
		this.scene = new Scene()

		this.createEnvironment()

		this.camera = new PerspectiveCamera(
			40,
			this.container.offsetWidth / this.container.offsetHeight,
			0.1,
			1000
		)

		this.renderer = new WebGLRenderer()
		this.renderer.shadowMap.enabled = true
		this.renderer.shadowMap.type = PCFSoftShadowMap
		this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight)

		container.appendChild(this.renderer.domElement)

		const light1 = new DirectionalLight(0xffffff, 1)
		light1.position.set(-20, 30, 20)
		light1.lookAt(0, 0, 0)
		light1.castShadow = true

		light1.shadow.mapSize.width = 512 // default
		light1.shadow.mapSize.height = 512 // default
		light1.shadow.camera.near = 0.5 // default
		light1.shadow.camera.far = 1000 // default

		light1.shadow.camera.left = -20 // default
		light1.shadow.camera.right = 20 // default
		light1.shadow.camera.top = 20 // default
		light1.shadow.camera.bottom = -20 // default

		this.scene.add(light1)

		const light2 = new DirectionalLight(0xcccccc, 1)
		light2.position.set(20, 50, -20)
		light2.lookAt(0, 0, 0)
		this.scene.add(light2)

		this.camera.position.x = 24
		this.camera.position.y = 33
		this.camera.position.z = 24

		this.camera.lookAt(new Vector3(0, 0, 0))

		this.addDebug()

		this.orbitControls = this.addOrbitControls()
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
		orbitControls.addEventListener(
			'change',
			this.dispatchEvent.bind(this, this.cameraRotatedEvent)
		)
		orbitControls.maxPolarAngle = Math.PI * (1 / 2 - 1 / 48)
		return orbitControls
	}

	private updateSize() {
		this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight)
	}

	private createEnvironment() {
		// test sky

		// const sky = new Sky()
		// sky.scale.setScalar(450000)

		// const elevation = 2
		// const azimuth = 180
		// const phi = MathUtils.degToRad(90 - elevation)
		// const theta = MathUtils.degToRad(azimuth)
		// const sun = new Vector3().setFromSphericalCoords(1, phi, theta)

		// const turbidity = 10
		// const rayleigh = 3
		// const mieCoefficient = 0.005
		// const mieDirectionalG = 0.7

		// sky.material.uniforms.sunPosition.value.copy(sun)
		// sky.material.uniforms.turbidity.value = turbidity
		// sky.material.uniforms.rayleigh.value = rayleigh
		// sky.material.uniforms.mieCoefficient.value = mieCoefficient
		// sky.material.uniforms.mieDirectionalG.value = mieDirectionalG

		// this.scene.add(sky)

		const plane = new Mesh(
			new PlaneGeometry(1000, 1000),
			new MeshStandardMaterial({ color: 0x666666 })
		)
		plane.rotateX(-Math.PI / 2)
		plane.receiveShadow = true
		this.scene.add(plane)

		this.scene.background = new Color(0x999999)
		this.scene.fog = new Fog(0x999999, 100, 300)
	}

	public destroy() {
		this.container.removeChild(this.renderer.domElement)
	}
}
