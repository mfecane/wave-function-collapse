import { assertBoolean } from '@/ts/utils/utils'
import { CubeAdjacency, modelParser } from '@/ts/wfc/model-parser'
import { SquareGridInstance } from '@/ts/wfc/grid/square-grid-instance'

type AdjacentElementStupidUtilityTypeBecauseImTiredTypingTheSameShitOverAndOverAgain = [
	element: SquareGridInstance,
	adjacencyInfo: CubeAdjacency
]

export class SquareGrid {
	public MAX_HORIZONTAL = 13
	public MAX_VERTICAL = 3

	public instances: (SquareGridInstance | null)[][] = []

	public constructor() {}

	public fill() {
		for (let i = 0; i < this.MAX_HORIZONTAL; ++i) {
			this.instances[i] = []
			for (let j = 0; j < this.MAX_HORIZONTAL; ++j) {
				const instance = new SquareGridInstance()
				instance.x = i
				instance.y = j

				// walls
				if (
					i === 0 ||
					j === 0 ||
					i === this.MAX_HORIZONTAL - 1 ||
					j === this.MAX_HORIZONTAL - 1
				) {
					instance.collapseToId('void')
					instance.dirty = true
				}

				this.instances[i][j] = instance
			}
		}
	}

	public eachElement(callback: (instance: SquareGridInstance) => void) {
		this.eachElementByIndex((x, y) => callback(this.instances[x][y]))
	}

	public eachElementByIndex(callback: (x: number, y: number) => void) {
		for (let i = 0; i < this.instances.length; ++i) {
			for (let j = 0; j < this.instances[i].length; ++j) {
				callback(i, j)
			}
		}
	}

	public print(): void {
		const result: any[][] = []
		for (let i = 0; i < this.instances.length; ++i) {
			result[i] = []
			for (let j = 0; j < this.instances[i].length; ++j) {
				result[i][j] = { ...this.instances[i][j] }
			}
		}
		console.log(result)
	}

	public printFinishedSlice() {
		let result = ''
		for (let i = 0; i < this.instances.length; ++i) {
			for (let j = 0; j < this.instances[i].length; ++j) {
				const instance = this.instances[i][j]
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

		pushIf(result, [this.tryGetElementAt(reference.x + 1, reference.y), CubeAdjacency.px])
		pushIf(result, [this.tryGetElementAt(reference.x - 1, reference.y), CubeAdjacency.nx])
		pushIf(result, [this.tryGetElementAt(reference.x, reference.y + 1), CubeAdjacency.py])
		pushIf(result, [this.tryGetElementAt(reference.x, reference.y - 1), CubeAdjacency.ny])

		return result
	}

	public tryGetElementAt(x: number, y: number) {
		if (x >= 0 && x < this.instances.length) {
			if (y >= 0 && y < this.instances[x].length) {
				return this.instances[x][y]
			}
		}
		return null
	}

	public getNextDirtyElement() {
		for (let x = 0; x < this.instances.length; ++x) {
			for (let y = 0; y < this.instances[x].length; ++y) {
				const instance = this.instances[x][y]
				if (instance.dirty) {
					return instance
				}
			}
		}
		return null
	}

	public validataSolved(): boolean {
		for (let x = 0; x < this.instances.length; ++x) {
			for (let y = 0; y < this.instances[x].length; ++y) {
				const instance = this.instances[x][y]
				if (instance.enthropy > 1) {
					return false
				}
			}
		}
		return true
	}

	public cloneState(): SquareGridInstance[][] {
		return this.instances.map((el1) => el1.map((el2) => el2.clone()))
	}

	public replaceState(instances: SquareGridInstance[][]) {
		this.instances = instances.map((el1) => el1.map((el2) => el2.clone()))
	}
}
