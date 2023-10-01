import { ElementSelectorStrategy } from '@/ts/wfc/algorythm/ElementSelectorStrategy'
import { SquareGrid } from '@/ts/wfc/grid/square-grid'
import { SquareGridInstance } from '@/ts/wfc/grid/square-grid-instance'
import { modelParser } from '@/ts/wfc/model-parser'
import { sortBy, sumBy } from 'lodash'

export class SelectByCost implements ElementSelectorStrategy {
	private readonly templatesLength = modelParser.getTemplates().length
	private readonly maxY = SquareGrid.MAX_VERTICAL

	public select(squareGrid: SquareGrid): SquareGridInstance | null {
		let elements: { instance: SquareGridInstance; cost: number }[] = []
		squareGrid.eachElement((el) => {
			if (el.dead || el.enthropy === 1) {
				return
			}
			elements.push({
				instance: el,
				cost: this.getCost(el),
			})
		})

		elements = sortBy(elements, (el) => el.cost)
		const total = sumBy(elements, (el) => el.cost)
		const seed = Math.random() * Math.random() * total
		let sum = 0
		for (let i = 0; i < elements.length; i++) {
			sum += elements[i].cost
			if (sum > seed) {
				return elements[i].instance
			}
		}
		return elements[0].instance
	}

	private getCost(el: SquareGridInstance): number {
		const c = Math.pow(this.templatesLength - el.enthropy, 2)
		return c
	}
}
