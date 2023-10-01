import { Graphics } from '@/ts/graphics/graphics'
import { SquareGrid } from '@/ts/wfc/grid/square-grid'
import { Solver } from '@/ts/wfc/solver'
import { SquareGridRenderer } from '@/ts/wfc/SquareGridRenderer'

let solver: Solver
let set: SquareGrid
let renderer: SquareGridRenderer

function onFinished() {
	set.printFinishedSlice()
	if (!set.validataSolved()) {
		throw 'validataion not passed'
	}
	console.log('checks', Solver.checks.toLocaleString())
	renderer.tryRender(set)
}

export async function build(container: HTMLDivElement) {
	const graphics = new Graphics(container)
	set = new SquareGrid()
	solver = new Solver(set)
	renderer = new SquareGridRenderer(graphics)
	solver.addEventListener('element_collapsed', () => {
		renderer.tryRender(set)
	})
	solver.addEventListener('solving_finished', onFinished)
	set.fill()
	graphics.animate()
	await solver.run()
}

export function stop() {
	solver.stop()
}
