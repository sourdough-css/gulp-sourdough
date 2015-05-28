var gulp = require('gulp')
var sourdough = require('..')

gulp.task('styl', function () {
  return gulp.src('index.styl')
    .pipe(sourdough())
    .pipe(gulp.dest('./'))
})
