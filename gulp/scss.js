import gulp from "gulp";
import plumber from "gulp-plumber";
import sourcemaps from "gulp-sourcemaps";
import sass from "sass";
import gulpSass from "gulp-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import cmq from "postcss-combine-media-query";
import prettify from "postcss-prettify";

const sassInstance = gulpSass(sass);

var plugins = [
  autoprefixer(),
  cssnano({
    preset: ["default", { normalizeWhitespace: false }],
  }),
  cmq(),
  prettify(),
];

export default () => {
  return (
    gulp
      .src("./src/scss/index.scss")
      // .pipe(sourcemaps.init())
      .pipe(
        plumber({
          handleError: function (err) {
            console.log(err);
            this.emit("end");
          },
        })
      )
      .pipe(
        sassInstance({
          includePaths: ["./src/scss/"],
          outputStyle: "compressed",
        }).on("error", function (err) {
          console.log(err.message);
          // sass.logError
          this.emit("end");
        })
      )
      .pipe(postcss(plugins))
      // .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("./dist/css/"))
  );
};
