import { Editor } from '@/ts/editor/editor'
import { Graphics } from '@/ts/graphics/graphics'

let editor: Editor

export function useEditor() {
	function createEditor(container: HTMLDivElement) {
		const graphics = new Graphics(container)
		editor = new Editor(graphics)
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

	return { editor, createEditor, addObject, rotateObject, deleteCell }
}
