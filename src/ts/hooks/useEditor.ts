import { Editor } from '@/ts/editor/editor'
import { OverlayUI } from '@/ts/editor/OverlayUI'
import { Graphics } from '@/ts/graphics/graphics'

let editor: Editor

export function useEditor() {
	function createEditor(container: HTMLDivElement) {
		const graphics = new Graphics(container)
		editor = new Editor(graphics)
		const overlayUI = new OverlayUI(graphics, editor)
		overlayUI.addEventListener('rotate_clicked', () => editor.rotateItem())

		graphics.animate()
	}

	function addObject(src: string) {
		editor.addItem(src)
	}

	function rotateObject() {
		editor.rotateItem()
	}

	function deleteCell() {
		editor.deleteCell()
	}

	function setLayer(index: number) {
		editor.setLayer(index)
	}

	return { editor, createEditor, addObject, rotateObject, deleteCell, setLayer }
}
