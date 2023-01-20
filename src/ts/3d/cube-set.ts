import { ConstraintsChecker, Solver } from './solver'
import { CubeRenderer } from './cube-renderer'
import { CubeGrid } from './cube-grid'
import { MeshTemplate } from './templates'

export enum CubeAdjacency {
	px = 'px',
	nx = 'nx',
	py = 'py',
	ny = 'ny',
	pz = 'pz',
	nz = 'nz',
}

class CubeConstraintsChecker implements ConstraintsChecker {
	public static iterations = 0

	checkConstraints(
		reference: MeshTemplate,
		element: MeshTemplate,
		adjacencyInfo: CubeAdjacency
	): boolean {
		CubeConstraintsChecker.iterations++
		return reference[adjacencyInfo][element.index] === 1
	}
}

export async function build() {
	const set = new CubeGrid()
	const solver = new Solver(set, new CubeConstraintsChecker())
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
	console.log('iterations', CubeConstraintsChecker.iterations)
	renderer.tryRender(set)
}
