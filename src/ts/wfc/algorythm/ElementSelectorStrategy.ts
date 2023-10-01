import { SquareGrid } from '@/ts/wfc/grid/square-grid'
import { SquareGridInstance } from '@/ts/wfc/grid/square-grid-instance'

export interface ElementSelectorStrategy {
	select(squareGrid: SquareGrid): SquareGridInstance | null
}
