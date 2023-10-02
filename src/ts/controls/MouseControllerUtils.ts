import { Vector2 } from 'three'

export function mapMousePoint(event: MouseEvent, domElement: HTMLCanvasElement) {
	const canvasBounds = domElement.getBoundingClientRect()
	const mouse = new Vector2()
	mouse.x =
		((event.clientX - canvasBounds.left) / (canvasBounds.right - canvasBounds.left)) * 2 - 1
	mouse.y =
		-((event.clientY - canvasBounds.top) / (canvasBounds.bottom - canvasBounds.top)) * 2 + 1
	return mouse
}
