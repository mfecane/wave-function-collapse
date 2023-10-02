import { MouseEventState } from '@/ts/controls/MouseEventState'
import { PlaceMeshState } from '@/ts/controls/PlaceMeshState'
import { SelectState } from '@/ts/controls/SelectState'
import { Editor } from '@/ts/editor/editor'

export enum States {
	selectState = 'selectState',
	placeState = 'placeState',
}

export class MouseEventController {
	private state: MouseEventState

	public states: { [key in States]: MouseEventState }

	public domElement: HTMLCanvasElement

	public constructor(private readonly editor: Editor) {
		this.domElement = this.editor.graphics.renderer.domElement

		this.subscribeEvents()

		this.states = {
			[States.selectState]: new SelectState(this, this.editor),
			[States.placeState]: new PlaceMeshState(this, this.editor),
		}

		this.state = this.states.selectState
	}

	private subscribeEvents() {
		this.domElement.addEventListener('mousemove', (event: MouseEvent) =>
			this.state.onMouseMove(event)
		)
		this.domElement.addEventListener('mousedown', (event: MouseEvent) =>
			this.state.onMouseDown(event)
		)
		this.domElement.addEventListener('mouseup', (event: MouseEvent) =>
			this.state.onMouseUp(event)
		)
		document.addEventListener('keydown', (event: KeyboardEvent) => this.state.onKeyDown(event))
	}

	public startPlaceMesh() {
		this.switchState(States.placeState)
	}

	public switchState(key: States) {
		this.state.exitState()
		this.state = this.states[key]
		this.state.enterState()
	}
}
