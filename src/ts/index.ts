import { build } from './3d/cube-collapser'
import { setup } from './renderer/graphics'

//! Remember: this file should be lean

window.addEventListener('load', () => {
	setup()
	build()
})
