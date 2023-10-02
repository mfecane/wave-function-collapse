import { Editor, Payload } from '@/ts/editor/editor'
import { OverlayElementController } from '@/ts/editor/OverlayElementController'
import { Graphics } from '@/ts/graphics/graphics'
import { Vector2 } from 'three'

export class OverlayUI extends EventTarget {
	private readonly container: HTMLCanvasElement
	private readonly panel: HTMLDivElement
	private readonly screenSpacePositionedElementController: OverlayElementController

	public constructor(private readonly graphics: Graphics, private readonly editor: Editor) {
		super()
		this.screenSpacePositionedElementController = new OverlayElementController(this.graphics)
		this.container = document.querySelector('.canvas')

		this.panel = this.setupPanel()

		this.graphics.addEventListener('camera_rotated', () =>
			this.screenSpacePositionedElementController.update()
		)

		this.editor.addEventListener('selected', (event: CustomEvent<Payload>) => {
			this.screenSpacePositionedElementController.update()
			this.panel.classList.toggle('hidden', !event.detail)
		})
	}

	private setupPanel() {
		const panel = document.querySelector('#mesh_menu_panel') as HTMLDivElement

		this.screenSpacePositionedElementController.create(
			this.editor.selectMesh,
			panel as unknown as HTMLDivElement,
			new Vector2(0, 60)
		)

		const rotateButton = document.querySelector(
			'#mesh_menu_panel .rotate__button'
		) as HTMLDivElement

		const deleteButton = document.querySelector(
			'#mesh_menu_panel .delete__button'
		) as HTMLDivElement

		rotateButton.addEventListener('click', () => this.editor.rotateCell())
		deleteButton.addEventListener('click', () => this.editor.deleteCell())

		return panel
	}
}
