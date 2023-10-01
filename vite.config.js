import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	base: '/3d-wave/',
	resolve: {
		alias: [{ find: '@', replacement: '/src' }],
	},
})
