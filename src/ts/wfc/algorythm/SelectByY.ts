import { ElementSelectorStrategy } from '@/ts/wfc/algorythm/ElementSelectorStrategy'
import { SquareGrid } from '@/ts/wfc/grid/square-grid'
import { SquareGridInstance } from '@/ts/wfc/grid/square-grid-instance'
import { modelParser } from '@/ts/wfc/model-parser'

export class SelectByY implements ElementSelectorStrategy {
	private readonly templatesLength = modelParser.getTemplates().length
	private readonly maxY = SquareGrid.MAX_VERTICAL

	private static readonly ENTHROPY_THRESHOLD = 1

	public select(squareGrid: SquareGrid): SquareGridInstance | null {
		let min = Infinity
		let elements: SquareGridInstance[] = []
		squareGrid.eachElement((el) => {
			if (el.dead || el.enthropy === 1) {
				return
			}
			if (el.enthropy < min) {
				min = el.enthropy + SelectByY.ENTHROPY_THRESHOLD
				elements = [el]
			}
			if (el.enthropy === min) {
				elements.push(el)
			}
		})

		if (elements.length < 1) {
			return null
		}

		let minY = Infinity
		let element: SquareGridInstance
		elements.forEach((el) => {
			if (el.y < minY) {
				element = el
			}
		})
		return element
	}
}
