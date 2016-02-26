var gulp = require('gulp')
var sourdough = require('..')

gulp.task('styl', function () {
  return gulp.src('index.styl')
    .pipe(sourdough())
    .pipe(gulp.dest('./'))
})

gulp.task('styl-err', function () {
  return gulp.src('err.styl')
    .pipe(sourdough())
    .pipe(gulp.dest('./'))
})
