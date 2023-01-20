import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import plumber from 'gulp-plumber'

import gifsicle from 'imagemin-gifsicle'
import jpegtran from 'imagemin-jpegtran'
import optipng from 'imagemin-optipng'
import svgo from 'imagemin-svgo'
// import ttf2woff from "gulp-ttf2woff";

const { src, parallel, dest } = gulp

const paths = {
	jpg: './assets/**/*.jpg',
	png: './assets/**/*.png',
	svg: './assets/**/*.svg',
	ttf: './assets/**/*.ttf',
	ico: './assets/images/favicon.ico',
	obj: './assets/meshes/**/*.obj',
	fonts: './assets/fonts/**/*',
	js: './assets/js/**/*',
}

const imageminOpts = [
	{
		plugins: [
			gifsicle({ interlaced: true }),
			jpegtran({ progressive: true }),
			optipng({ optimizationLevel: 5 }),
			svgo({
				plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
			}),
		],
	},
]

const images = () =>
	src([paths.jpg, paths.png, paths.svg])
		.pipe(
			plumber({
				handleError: function (err) {
					console.log(err)
					this.emit('end')
				},
			})
		)
		.pipe(imagemin(...imageminOpts))
		.pipe(dest('dist/assets'))

// const fonts = () =>
//   src(paths.ttf)
//     .pipe(
//       plumber({
//         handleError: function (err) {
//           console.log(err);
//           this.emit("end");
//         },
//       })
//     )
//     .pipe(ttf2woff())
//     .pipe(dest("dist/assets"));

const fonts = () => src(paths.fonts).pipe(dest('dist/fonts'))

const js = () => {
	return src(paths.js).pipe(dest('dist/js'))
}

const favicon = () => {
	return src(paths.ico).pipe(dest('dist/'))
}

const files = () => {
	return src(paths.obj).pipe(dest('dist/assets/meshes'))
}

export default parallel(js, fonts, images, favicon, files)
