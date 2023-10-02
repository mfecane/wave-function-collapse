import { mapMousePoint } from '@/ts/controls/MouseControllerUtils'
import { MouseEventController, States } from '@/ts/controls/MouseEventController'
import { MouseEventState } from '@/ts/controls/MouseEventState'
import { Editor } from '@/ts/editor/editor'
import { MeshNames } from '@/ts/editor/MeshNames'
import { selectedObject } from '@/ts/hooks/useEditor'
import { Raycaster, Vector2, Vector3 } from 'three'

export class PlaceMeshState extends MouseEventState {
	private rayCaster = new Raycaster()
	private lastMousePosition: Vector2 = new Vector2()

	public constructor(
		private readonly controller: MouseEventController,
		private readonly editor: Editor
	) {
		super()
	}

	public onMouseMove(event: MouseEvent) {
		const mouse = mapMousePoint(event, this.controller.domElement)
		this.rayCaster.setFromCamera(mouse, this.editor.graphics.camera)
		const intersects = this.rayCaster.intersectObjects(this.editor.selectMeshes)

		if (!intersects.length) return

		const intersect = intersects[0]
		if (intersect.object.name === MeshNames.SelectCube) {
			const point = new Vector3().copy(intersect.object.userData?.cell?.position as Vector3)
			point.add(intersect.face.normal)
			if (point) {
				this.editor.setPlacementMeshPosition(point)
				return
			}
		} else if (intersect.object.name === MeshNames.DragPlane) {
			const point = new Vector3().copy(intersects[0].point)
			// TODO check this math
			point.x = Math.floor(point.x / 2)
			point.y = 0
			point.z = Math.floor(point.z / 2) - 1
			point.add(intersect.face.normal)
			if (point) {
				this.editor.setPlacementMeshPosition(point)
				return
			}
		}
	}

	public onMouseDown(event: MouseEvent) {
		if (event.button === 2) {
			this.editor.setPlacementMesh(null)
			this.controller.switchState(States.selectState)
			// todo questionable pattern
			selectedObject.value = null
			return
		}
		this.lastMousePosition = new Vector2(event.clientX, event.clientY)
	}

	public onMouseUp(event: MouseEvent) {
		const current = new Vector2(event.clientX, event.clientY)
		if (current.distanceTo(this.lastMousePosition) > 2) {
			return
		}
		this.editor.placementMeshPlace()
	}

	public onKeyDown(event: KeyboardEvent) {
		if (event.code === 'KeyR') {
			this.editor.rotatePlacementMesh()
		}
	}

	public exitState() {}
}
