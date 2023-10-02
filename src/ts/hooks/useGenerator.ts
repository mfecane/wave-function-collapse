import { build as build2, stop } from '@/ts/wfc/collapse'
import { ref } from 'vue'

// singleton
const canvas = ref<HTMLDivElement>(null)

export function useGenerator() {
	return {
		canvas,
		build() {
			build2(canvas.value)
		},
		stop,
	}
}
