import { SolverEventPayload } from '@/ts/wfc/algorythm/algorithm'
import { build, solver, stop } from '@/ts/wfc/collapse'
import { ref } from 'vue'

// singleton
const canvas = ref<HTMLDivElement>(null)
export const iterations = ref<string>('-')

export function useGenerator() {
	return {
		canvas,

		iterations,

		generate() {
			build(canvas.value)
			solver.addEventListener(
				'element_collapsed',
				(event: CustomEvent<SolverEventPayload>) => {
					iterations.value = new Intl.NumberFormat().format(event.detail.iterations)
				}
			)
		},

		stop,
	}
}
