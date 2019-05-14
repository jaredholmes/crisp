const gulp = require('gulp')
const stylus = require('gulp-stylus')
const clean = require('gulp-clean-css')

// Convert Stylus to CSS
function stylusCss () {
  return gulp.src(
    'src/stylus/**/*.styl',
  )
    .pipe(stylus(
      {
        'include css': true
      }
    ))
    .pipe(gulp.dest('dist/css'))
}

// Minify CSS
function minCss () {
  return gulp.src(
    [
      'dist/css/**/*.css',
      '!dist/css/min/**/*.css'
    ]
  )
    .pipe(clean())
    .pipe(gulp.dest('dist/css/min'))
}

// Watch
function watch () {
  gulp.watch('src/stylus/**/*.styl',stylusCss)
  gulp.watch(['dist/css/**/*.css', '!dist/css/min/**/*.css'], minCss)
}

exports.watch = watch
