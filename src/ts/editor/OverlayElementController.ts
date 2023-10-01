import { OverlayElement } from '@/ts/editor/OverlayElement'
import { Graphics } from '@/ts/graphics/graphics'
import { Object3D, Vector2 } from 'three'

export class OverlayElementController {
	private readonly elements: OverlayElement[] = []

	public constructor(private readonly graphics: Graphics) {}

	public create(
		reference: Object3D,
		dom: HTMLDivElement,
		offset: Vector2 = new Vector2()
	): string {
		const element = new OverlayElement(this.graphics, reference, dom, offset)
		this.elements.push(element)
		return element.guid
	}

	public update(): void {
		this.elements.forEach((element: OverlayElement) => element.update())
	}

	public remove(guid: string): void {
		const index = this.elements.findIndex((element: OverlayElement) => element.guid === guid)
		if (index === -1) {
			throw `Cound not remove ui element with guid ${guid}`
		}
		this.elements.splice(index, 1)
	}
}
