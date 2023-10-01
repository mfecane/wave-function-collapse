import { Graphics } from '@/ts/graphics/graphics'
import { SquareGrid } from '@/ts/wfc/grid/square-grid'
import { Algorythm, SolverEventPayload } from '@/ts/wfc/algorythm/algorithm'
import { SquareGridRenderer } from '@/ts/wfc/SquareGridRenderer'
import { SelectByEnthropy } from '@/ts/wfc/algorythm/SelectByEnthropy'
import { SelectByCost } from '@/ts/wfc/algorythm/SelectByCost'
import { SelectByY } from '@/ts/wfc/algorythm/SelectByY'
import { SelectByElementBelow } from '@/ts/wfc/algorythm/SelectByElementBelow'

let solver: Algorythm
let set: SquareGrid
let renderer: SquareGridRenderer

function onFinished() {
	if (!set.validataSolved()) {
		throw 'validataion not passed'
	}
	console.log('checks', Algorythm.checks.toLocaleString())
	renderer.tryRender(set)
}

export async function build(container: HTMLDivElement) {
	const graphics = new Graphics(container)
	set = new SquareGrid()
	solver = new Algorythm(set, new SelectByElementBelow())
	renderer = new SquareGridRenderer(graphics)
	solver.addEventListener('element_collapsed', (event: CustomEvent<SolverEventPayload>) =>
		renderer.handleEvent(event)
	)
	solver.addEventListener('solving_finished', onFinished)
	solver.addEventListener('solving_finished', () => renderer.handleFinishedEvent())
	set.fill()
	graphics.animate()
	await solver.run()
}

export function stop() {
	solver.stop()
}
