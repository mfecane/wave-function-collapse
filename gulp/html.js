import gulp from "gulp";
import browserSyncImport from "browser-sync";
import plumber from "gulp-plumber";
import prettify from "gulp-prettify";
import fileinclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import pugPlugin from "gulp-pug";

const { src, dest, parallel } = gulp;

const browserSync = browserSyncImport.create();

const html = () =>
  src(["./src/html/*.html"])
    .pipe(
      plumber({
        handleError: function (err) {
          console.log(err);
          this.emit("end");
        },
      })
    )
    .pipe(fileinclude())
    .pipe(htmlmin({ collapseWhitespace: false, removeComments: true }))
    .pipe(prettify({ indent_size: 2, unformatted: ["pre", "code"] }))
    .pipe(dest("./dist/"))
    .pipe(browserSync.stream());

const pug = () =>
  src(["./src/pug/*.pug"])
    .pipe(
      plumber({
        handleError: function (err) {
          console.log(err);
          this.emit("end");
        },
      })
    )
    .pipe(pugPlugin())
    .pipe(htmlmin({ collapseWhitespace: false, removeComments: true }))
    .pipe(prettify({ indent_size: 2, unformatted: ["pre", "code"] }))
    .pipe(dest("./dist/"))
    .pipe(browserSync.stream());

export default parallel(pug, html);
