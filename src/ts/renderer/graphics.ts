import * as THREE from 'three'
//@ts-ignore
import { OrbitControls } from 'three/addons/controls/OrbitControls'

let renderer: THREE.WebGLRenderer
export let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let controls: OrbitControls
let pointLight: THREE.SpotLight
let pointLight1: THREE.SpotLight

export function setup() {
	const container = document.getElementById('root')
	scene = new THREE.Scene()
	camera = new THREE.PerspectiveCamera(
		75,
		container.offsetWidth / container.offsetHeight,
		0.1,
		1000
	)
	renderer = new THREE.WebGLRenderer()
	renderer.setSize(container.offsetWidth, container.offsetHeight)
	container.appendChild(renderer.domElement)

	// const geometry = new THREE.BoxGeometry(1, 1, 1)
	// const material = new THREE.MeshLambertMaterial({ color: 0xffffff })
	// const cube = new THREE.Mesh(geometry, material)
	// scene.add(cube)

	pointLight = new THREE.SpotLight(0xffffff, 1, 100)
	pointLight.position.set(20, 50, 20)
	pointLight.lookAt(0, 0, 0)
	scene.add(pointLight)

	pointLight1 = new THREE.SpotLight(0xcccccc, 0.5, 100)
	pointLight1.position.set(-20, 50, -20)
	pointLight1.lookAt(0, 0, 0)
	scene.add(pointLight1)

	camera.position.x = 20
	camera.position.y = 25
	camera.position.z = 20

	camera.lookAt(new THREE.Vector3(0, 0, 0))

	controls = new OrbitControls(camera, renderer.domElement)

	animate()
}

function animate() {
	requestAnimationFrame(animate)

	controls.update()
	renderer.render(scene, camera)
}

class Graphics {}

export const graphics = new Graphics()
