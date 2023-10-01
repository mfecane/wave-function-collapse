import { Editor } from '@/ts/editor/editor'
import { OverlayUI } from '@/ts/editor/OverlayUI'
import { Graphics } from '@/ts/graphics/graphics'

// singleton
let editor: Editor

export function useEditor() {
	return {
		editor,

		createEditor(container: HTMLDivElement) {
			const graphics = new Graphics(container)
			editor = new Editor(graphics)
			const overlayUI = new OverlayUI(graphics, editor)
			overlayUI.addEventListener('rotate_clicked', () => editor.rotateItem())

			graphics.animate()
		},

		addObject(src: string) {
			editor.addItem(src)
		},

		rotateObject() {
			editor.rotateItem()
		},

		deleteCell() {
			editor.deleteCell()
		},

		setLayer(index: number) {
			editor.setLayer(index)
		},

		loadDefault() {
			editor.model.loadDefault()
		},
	}
}
