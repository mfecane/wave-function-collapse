import { assertBoolean } from '../utils/utils'
import { MeshInstance } from './cube-item-instance'
import { CubeAdjacency } from './cube-set'
import { InstanceSet, Solver } from './solver'
import { buildTemplates } from './templates'

type AdjacentElementStupidUtilityTypeBecauseImTiredTypingTheSameShitOverAndOverAgain =
	[element: MeshInstance, adjacencyInfo: CubeAdjacency]

export class CubeGrid implements InstanceSet {
	public MAX_HORIZONTAL = 11
	public MAX_VERTICAL = 3

	public instances: (MeshInstance | null)[][][] = []

	public constructor() {}

	public fill(solver: Solver) {
		const templates = buildTemplates()
		console.log('templates', templates)

		for (let i = 0; i < this.MAX_HORIZONTAL; ++i) {
			this.instances[i] = []
			for (let j = 0; j < this.MAX_HORIZONTAL; ++j) {
				this.instances[i][j] = []
				for (let k = 0; k < this.MAX_VERTICAL; ++k) {
					const instance = new MeshInstance(templates)
					instance.x = i
					instance.y = j
					instance.z = k
					this.instances[i][j][k] = instance
				}
			}
		}
		// build boundary positions

		// floor
		for (let i = 0; i < this.instances.length; ++i) {
			for (let j = 0; j < this.instances[i].length; ++j) {
				this.instances[i][j][0].collapseTo(1)
				solver.pushToQ(this.instances[i][j][0])
			}
		}

		// top
		for (let i = 0; i < this.instances.length; ++i) {
			for (let j = 0; j < this.instances[i].length; ++j) {
				this.instances[i][j][this.MAX_VERTICAL - 1].collapseTo(0)
				solver.pushToQ(this.instances[i][j][0])
			}
		}

		// sides
		for (let i = 0; i < this.instances.length; ++i) {
			for (let j = 0; j < this.instances[i].length; ++j) {
				for (let k = 1; k < this.MAX_VERTICAL; ++k) {
					if (
						i === 0 ||
						j === 0 ||
						i === this.MAX_HORIZONTAL - 1 ||
						j === this.MAX_HORIZONTAL - 1
					) {
						this.instances[i][j][k].collapseTo(0)
					}
				}
			}
		}

		this.print()
	}

	public eachElement(callback: (instance: MeshInstance) => void) {
		this.eachElementByIndex((x, y, z) => callback(this.instances[x][y][z]))
	}

	public eachElementByIndex(
		callback: (x: number, y: number, z: number) => void
	) {
		for (let i = 0; i < this.instances.length; ++i) {
			for (let j = 0; j < this.instances[i].length; ++j) {
				for (let k = 0; k < this.instances[i][j].length; ++k) {
					callback(i, j, k)
				}
			}
		}
	}

	public print(): void {
		const result: any[][][] = []
		for (let i = 0; i < this.instances.length; ++i) {
			result[i] = []
			for (let j = 0; j < this.instances[i].length; ++j) {
				result[i][j] = []
				for (let k = 0; k < this.instances[i][j].length; ++k) {
					result[i][j][k] = { ...this.instances[i][j][k] }
				}
			}
		}
		console.log(result)
	}

	public printFinishedSlice(z: number) {
		assertBoolean(z >= 0 && z < this.MAX_HORIZONTAL)
		let result = ''
		for (let i = 0; i < this.instances.length; ++i) {
			for (let j = 0; j < this.instances[i].length; ++j) {
				const instance = this.instances[i][j][z]
				assertBoolean(instance.states.length <= 1)
				result += `\t${instance.states[0]?.name ?? 'dead'}`
			}
			result += '\n'
		}
		console.log(result)
	}

	public getElementsAdjasentTo(
		reference: MeshInstance
	): AdjacentElementStupidUtilityTypeBecauseImTiredTypingTheSameShitOverAndOverAgain[] {
		function pushIf(
			arr: AdjacentElementStupidUtilityTypeBecauseImTiredTypingTheSameShitOverAndOverAgain[],
			el: AdjacentElementStupidUtilityTypeBecauseImTiredTypingTheSameShitOverAndOverAgain
		) {
			if (el[0]) {
				arr.push(el)
			}
		}

		const result: AdjacentElementStupidUtilityTypeBecauseImTiredTypingTheSameShitOverAndOverAgain[] =
			[]

		pushIf(result, [
			this.tryGetElementAt(reference.x + 1, reference.y, reference.z),
			CubeAdjacency.px,
		])
		pushIf(result, [
			this.tryGetElementAt(reference.x - 1, reference.y, reference.z),
			CubeAdjacency.nx,
		])
		pushIf(result, [
			this.tryGetElementAt(reference.x, reference.y + 1, reference.z),
			CubeAdjacency.py,
		])
		pushIf(result, [
			this.tryGetElementAt(reference.x, reference.y - 1, reference.z),
			CubeAdjacency.ny,
		])
		pushIf(result, [
			this.tryGetElementAt(reference.x, reference.y, reference.z - 1),
			CubeAdjacency.nz,
		])
		pushIf(result, [
			this.tryGetElementAt(reference.x, reference.y, reference.z + 1),
			CubeAdjacency.pz,
		])

		return result
	}

	private tryGetElementAt(x: number, y: number, z: number) {
		if (x >= 0 && x < this.instances.length) {
			if (y >= 0 && y < this.instances[x].length) {
				if (z >= 0 && z < this.instances[y].length) {
					return this.instances[x][y][z]
				}
			}
		}
		return null
	}

	public validataSolved(): boolean {
		for (let x = 0; x < this.instances.length; ++x) {
			for (let y = 0; y < this.instances[x].length; ++y) {
				for (let z = 0; z < this.instances[x][y].length; ++z) {
					const instance = this.instances[x][y][z]
					if (instance.states.length > 1) {
						return false
					}
				}
			}
		}
		return true
	}
}
