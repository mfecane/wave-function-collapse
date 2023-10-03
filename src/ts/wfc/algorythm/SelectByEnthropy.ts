import { randomElement } from '@/ts/utils/utils'
import { ElementSelectorStrategy } from '@/ts/wfc/algorythm/ElementSelectorStrategy'
import { SquareGrid } from '@/ts/wfc/grid/square-grid'
import { SquareGridInstance } from '@/ts/wfc/grid/square-grid-instance'

export class SelectByEnthropy implements ElementSelectorStrategy {
	public select(squareGrid: SquareGrid): SquareGridInstance | null {
		let min = Infinity
		let elements: SquareGridInstance[] = []
		squareGrid.eachElement((el) => {
			if (el.dead || el.enthropy === 1) {
				return
			}
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
}
