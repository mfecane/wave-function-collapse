import { Solver } from './solver'
import { CubeRenderer } from './cube-renderer'
import { CubeGrid } from './cube-grid'

export async function build() {
	const set = new CubeGrid()
	const solver = new Solver(set)
	const renderer = new CubeRenderer()
	solver.addEventListener('element_collapsed', () => {
		renderer.tryRender(set)
	})
	set.fill(solver)

	await solver.run()
	set.printFinishedSlice(1)
	if (!set.validataSolved()) {
		throw 'validataion not passed'
	}
	console.log('checks', Solver.checks.toLocaleString())
	renderer.tryRender(set)
}
