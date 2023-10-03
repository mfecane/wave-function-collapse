import { Graphics } from '@/ts/graphics/graphics'
import { SquareGrid } from '@/ts/wfc/grid/square-grid'
import { Algorythm, SolverEventPayload } from '@/ts/wfc/algorythm/algorithm'
import { SquareGridRenderer } from '@/ts/wfc/SquareGridRenderer'
import { SelectByElementBelow } from '@/ts/wfc/algorythm/SelectByElementBelow'
import { EditorModel } from '@/ts/editor/editor-model'
import { modelParser } from '@/ts/wfc/model-parser'

export let solver: Algorythm
let set: SquareGrid
let renderer: SquareGridRenderer
let graphics: Graphics

function onFinished() {
	if (!set.validataSolved()) {
		throw 'validataion not passed'
	}
	console.log('solver::iterations', solver.iterations.toLocaleString())
	renderer.tryRender(set)
}

function prepareModel() {
	const editorModel = new EditorModel()
	editorModel.loadLocal()
	modelParser.parse(editorModel)
}

export async function build(container: HTMLDivElement) {
	prepareModel()
	graphics = new Graphics(container)
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
	graphics.destroy()
}
