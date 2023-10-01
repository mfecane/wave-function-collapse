import { assertBoolean } from '@/ts/utils/utils'
import { AdjacencyKey, modelParser } from '@/ts/wfc/model-parser'
import { SquareGridInstance } from '@/ts/wfc/grid/square-grid-instance'

type AdjacentElementStupidUtilityTypeBecauseImTiredTypingTheSameShitOverAndOverAgain = [
	element: SquareGridInstance,
	adjacencyInfo: AdjacencyKey
]

export class SquareGrid {
	public static readonly MAX_HORIZONTAL = 15
	public static readonly MAX_VERTICAL = 9

	public instances: (SquareGridInstance | null)[][][] = []

	public constructor() {}

	public fill() {
		for (let x = 0; x < SquareGrid.MAX_HORIZONTAL; ++x) {
			this.instances[x] = []
			for (let y = 0; y < SquareGrid.MAX_VERTICAL; ++y) {
				this.instances[x][y] = []
				for (let z = 0; z < SquareGrid.MAX_HORIZONTAL; ++z) {
					const instance = new SquareGridInstance()
					instance.x = x
					instance.y = y
					instance.z = z

					// walls
					if (
						x === 0 ||
						z === 0 ||
						x === SquareGrid.MAX_HORIZONTAL - 1 ||
						z === SquareGrid.MAX_HORIZONTAL - 1
					) {
						instance.collapseToId('void')
						instance.dirty = true
					}

					if (y === 0) {
						if (instance.countStates() > 1) {
							instance.collapseToId('ground')
							instance.dirty = true
						}
					}

					if (y === SquareGrid.MAX_VERTICAL - 1) {
						if (instance.countStates() > 1) {
							instance.collapseToId('void')
						}
					}

					this.instances[x][y][z] = instance
				}
			}
		}
	}

	public eachElement(callback: (instance: SquareGridInstance) => void) {
		this.eachElementByIndex((x, y, z) => callback(this.instances[x][y][z]))
	}

	public eachElementByIndex(callback: (x: number, y: number, z: number) => void) {
		for (let i = 0; i < this.instances.length; ++i) {
			for (let j = 0; j < this.instances[i].length; ++j) {
				for (let k = 0; k < this.instances[i][j].length; ++k) {
					callback(i, j, k)
				}
			}
		}
	}

	public print(): void {
		const result: any[][] = []
		for (let i = 0; i < this.instances.length; ++i) {
			result[i] = []
			for (let j = 0; j < this.instances[i].length; ++j) {
				for (let k = 0; k < this.instances[i][j].length; ++k) {
					result[i][j][k] = { ...this.instances[i][j][k] }
				}
			}
		}
		console.log(result)
	}

	public printFinishedSlice(z: number) {
		assertBoolean(z >= 0 && z < SquareGrid.MAX_HORIZONTAL)
		let result = ''
		for (let i = 0; i < this.instances.length; ++i) {
			for (let j = 0; j < this.instances[i].length; ++j) {
				const instance = this.instances[i][j][z]
				assertBoolean(instance.enthropy <= 1)
				result += `\t${
					modelParser.getTemplates()[instance.tryGetOnlyState()]?.id ?? 'dead'
				}`
			}
			result += '\n'
		}
		console.log(result)
	}

	public getElementsAdjacentTo(
		reference: SquareGridInstance
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
			AdjacencyKey.px,
		])
		pushIf(result, [
			this.tryGetElementAt(reference.x - 1, reference.y, reference.z),
			AdjacencyKey.nx,
		])
		pushIf(result, [
			this.tryGetElementAt(reference.x, reference.y + 1, reference.z),
			AdjacencyKey.py,
		])
		pushIf(result, [
			this.tryGetElementAt(reference.x, reference.y - 1, reference.z),
			AdjacencyKey.ny,
		])
		pushIf(result, [
			this.tryGetElementAt(reference.x, reference.y, reference.z + 1),
			AdjacencyKey.pz,
		])
		pushIf(result, [
			this.tryGetElementAt(reference.x, reference.y, reference.z - 1),
			AdjacencyKey.nz,
		])

		return result
	}

	public tryGetElementAt(x: number, y: number, z: number) {
		if (x >= 0 && x < this.instances.length) {
			if (y >= 0 && y < this.instances[x].length) {
				if (z >= 0 && z < this.instances[x][y].length) {
					return this.instances[x][y][z]
				}
			}
		}
		return null
	}

	public getNextDirtyElement() {
		for (let x = 0; x < this.instances.length; ++x) {
			for (let y = 0; y < this.instances[x].length; ++y) {
				for (let z = 0; z < this.instances[x][y].length; ++z) {
					const instance = this.instances[x][y][z]
					if (instance.dirty) {
						return instance
					}
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
					if (instance.enthropy > 1) {
						return false
					}
				}
			}
		}
		return true
	}

	public cloneState(): SquareGridInstance[][][] {
		return this.instances.map((el1) => el1.map((el2) => el2.map((el3) => el3.clone())))
	}

	public replaceState(instances: SquareGridInstance[][][]) {
		this.instances = instances.map((el1) => el1.map((el2) => el2.map((el3) => el3.clone())))
	}
}
