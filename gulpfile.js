const gulp = require('gulp');
const sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
const beautify = require('gulp-beautify');
const autoprefixer = require('gulp-autoprefixer');

const buildCss = () => {
    return gulp.src('./src/scss/index.scss')
      .pipe(sassGlob())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(beautify.css({ indent_size: 2 }))
      .pipe(gulp.dest('./dist/css'));
  };

gulp.task('sass:watch', function () {
    gulp.watch('./src/scss/*.scss', buildCss);
  });