import { Editor, Payload } from '@/ts/editor/editor'
import { OverlayElementController } from '@/ts/editor/OverlayElementController'
import { Graphics } from '@/ts/graphics/graphics'
import { Vector2 } from 'three'

export class OverlayUI extends EventTarget {
	private readonly container: HTMLCanvasElement
	private readonly rotateButton: HTMLButtonElement
	private readonly event = new Event('rotate_clicked')
	private readonly screenSpacePositionedElementController: OverlayElementController

	public constructor(private readonly graphics: Graphics, private readonly editor: Editor) {
		super()
		this.screenSpacePositionedElementController = new OverlayElementController(this.graphics)
		this.container = document.querySelector('.canvas')
		this.rotateButton = document.createElement('button')
		this.rotateButton.classList.add('rotate__button')
		this.rotateButton.style.position = `absolute`
		this.container.appendChild(this.rotateButton)
		this.rotateButton.addEventListener('click', () => this.dispatchEvent(this.event))
		this.screenSpacePositionedElementController.create(
			this.editor.selectMesh,
			this.rotateButton as unknown as HTMLDivElement,
			new Vector2(40, 40)
		)
		this.graphics.addEventListener('camera_rotated', () =>
			this.screenSpacePositionedElementController.update()
		)
		this.editor.addEventListener('selected', (event: CustomEvent<Payload>) => {
			this.screenSpacePositionedElementController.update()
			this.rotateButton.classList.toggle('hidden', !event.detail)
		})
	}
}
