import { Graphics } from '@/ts/graphics/graphics'
import { Object3D, Vector2 } from 'three'
import { generateUUID } from 'three/src/math/MathUtils'

export class OverlayElement {
	public guid: string

	public constructor(
		private graphics: Graphics,
		private readonly reference: Object3D,
		private readonly dom: HTMLDivElement,
		private readonly offset: Vector2 = new Vector2()
	) {
		this.guid = generateUUID()
	}

	public update(): void {
		if (!this.reference) {
			return
		}

		const position = this.reference.position.clone().project(this.graphics.camera)

		const widthHalf = 0.5 * this.graphics.renderer.domElement.offsetWidth
		const heightHalf = 0.5 * this.graphics.renderer.domElement.offsetHeight

		const position2D = new Vector2()

		position2D.x = position.x * widthHalf + widthHalf + this.offset.x
		position2D.y = -(position.y * heightHalf) + heightHalf + this.offset.y

		this.dom.style.top = `${position2D.y}px`
		this.dom.style.left = `${position2D.x}px`
	}
}
