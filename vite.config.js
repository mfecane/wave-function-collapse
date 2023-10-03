import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	base: '/wave-function-collapse/',
	resolve: {
		alias: [{ find: '@', replacement: '/src' }],
	},
})
