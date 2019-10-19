const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()


//Compile sass into css

function style() {
  return gulp.src('src/sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css'))
  // Stream Changes to all browser
  .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
  gulp.watch('src/sass/**/*.scss', style);
  gulp.watch('src/*.html').on('change', browserSync.reload);
  gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
