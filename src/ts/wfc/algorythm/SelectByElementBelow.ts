import { randomElement } from '@/ts/utils/utils'
import { ElementSelectorStrategy } from '@/ts/wfc/algorythm/ElementSelectorStrategy'
import { SquareGrid } from '@/ts/wfc/grid/square-grid'
import { SquareGridInstance } from '@/ts/wfc/grid/square-grid-instance'

export class SelectByElementBelow implements ElementSelectorStrategy {
	public select(squareGrid: SquareGrid): SquareGridInstance | null {
		let min = Infinity
		let elements: SquareGridInstance[] = []
		squareGrid.eachElement((el) => {
			if (el.dead || el.enthropy === 1) {
				return
			}
			if (!this.checkElementBelow(el, squareGrid)) {
				return
			}
			// if (!this.checkAllElementsBelow(el, squareGrid)) {
			// 	return
			// }
			if (el.enthropy < min) {
				min = el.enthropy
				elements = [el]
			}
			if (el.enthropy === min) {
				elements.push(el)
			}
		})

		if (elements.length < 1) {
			return null
		}

		const rand = randomElement<SquareGridInstance>(elements)
		if (rand.z === 0) {
			debugger
		}
		return rand
	}

	private checkElementBelow(instance: SquareGridInstance, grid: SquareGrid): boolean {
		const element = grid.tryGetElementAt(instance.x, instance.y - 1, instance.z)
		if (!element) return true
		return element.enthropy === 1
	}

	private checkAllElementsBelow(instance: SquareGridInstance, grid: SquareGrid): boolean {
		let result = true
		for (let i = instance.y; i >= 0; --i) {
			const element = grid.tryGetElementAt(instance.x, instance.y - 1, instance.z)
			if (!element) return true
			result = result && element.enthropy === 1
		}
		return result
	}
}
