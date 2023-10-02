import { mapMousePoint } from '@/ts/controls/MouseControllerUtils'
import { MouseEventController } from '@/ts/controls/MouseEventController'
import { MouseEventState } from '@/ts/controls/MouseEventState'
import { Editor } from '@/ts/editor/editor'
import { Raycaster } from 'three'

export class SelectState extends MouseEventState {
	private rayCaster = new Raycaster()

	public constructor(
		private readonly controller: MouseEventController,
		private readonly editor: Editor
	) {
		super()
	}

	public onMouseMove(event: MouseEvent) {}

	public onMouseDown(event: MouseEvent) {
		const mouse = mapMousePoint(event, this.controller.domElement)
		this.rayCaster.setFromCamera(mouse, this.editor.graphics.camera)
		const intersects = this.rayCaster.intersectObjects(this.editor.selectMeshes)

		if (intersects.length > 0) {
			const intersect = intersects[0]
			const point = intersect.object.userData?.cell?.position
			if (point) {
				this.editor.selectPoint(point)
				return
			}
		}
		this.editor.selectPoint(null)
	}

	enterState(): void {
		this.editor.selectPoint(null)
	}

	exitState(): void {
		this.editor.selectPoint(null)
	}
}
