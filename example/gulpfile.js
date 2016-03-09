var gulp = require('gulp')
var sourdough = require('..')

gulp.task('test', function () {
  return gulp.src('index.sss')
    .pipe(sourdough())
    .pipe(gulp.dest('./'))
})

gulp.task('test-error', function () {
  return gulp.src('err.sss')
    .pipe(sourdough())
    .pipe(gulp.dest('./'))
})
