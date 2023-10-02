import { States } from '@/ts/controls/MouseEventController'
import { Editor } from '@/ts/editor/editor'
import { OverlayUI } from '@/ts/editor/OverlayUI'
import { Graphics } from '@/ts/graphics/graphics'
import { Ref, ref, watch } from 'vue'

// singleton
let editor: Editor
export const selectedObject: Ref<number | null> = ref<number | null>(null)

export function useEditor() {
	watch(selectedObject, (value: number | null) => {
		editor.setPlacementMesh(value)
		if (value != null) {
			editor.mouseEventController.switchState(States.placeState)
		} else {
			editor.mouseEventController.switchState(States.selectState)
		}
	})

	return {
		editor,

		selectedObject,

		createEditor(container: HTMLDivElement) {
			const graphics = new Graphics(container)
			editor = new Editor(graphics)
			new OverlayUI(graphics, editor)
			graphics.animate()
		},

		addObject(src: string) {
			editor.addItem(src)
		},

		loadDefault() {
			editor.model.loadDefault()
		},

		objectClick(index: number) {
			if (selectedObject.value === index) {
				selectedObject.value = null
			} else {
				selectedObject.value = index
			}
		},
	}
}
