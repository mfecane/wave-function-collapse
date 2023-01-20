import gulp from 'gulp'
import browserSyncImport from 'browser-sync'
import css from './gulp/scss.js'
import html from './gulp/html.js'
import jsTask from './gulp/js.js'
import assets from './gulp/assets.js'

import { deleteAsync } from 'del'

const { src, parallel, series, watch, dest } = gulp

const browserSync = browserSyncImport.create()

const dirs = {
	dist: './dist',
	pug: './src/pug/**/*.pug',
	scss: './src/scss/**/*.scss',
	js: { all: './src/ts/**/*.ts', src: './src/ts/index.ts', dest: './dist/js/' },
}

const clear = () => {
	return deleteAsync(dirs.dist)
}

const server = () => {
	browserSync.init({
		server: {
			baseDir: dirs.dist,
		},
	})
}

const updateBrowser = () => {
	browserSync.reload()
}

export const watcher = () => {
	watch([dirs.pug], html).on('change', updateBrowser)
	watch([dirs.scss], css).on('change', updateBrowser)
	watch([dirs.js.all], js).on('change', updateBrowser)
	watch(['./assets/**/*.png', './assets/**/*.obj'], assets).on(
		'change',
		updateBrowser
	)
}

const js = jsTask(dirs)

export const dev = series(
	clear,
	parallel(html, css, js, assets),
	parallel(watcher, server)
)

export const build = series(clear, parallel(html, css, js, assets))

export default build
