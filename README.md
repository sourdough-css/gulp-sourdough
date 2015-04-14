# gulp-sourdough

[Sourdough Preprocessor](https://github.com/sourdough-css/preprocessor) gulp plugin.

## Usage

Compile to CSS

```javascript
var sourdough = require('gulp-sourdough');

gulp.task('sourdough', function() {
  var options = {};

  gulp.src('./lib/*.styl')
    .pipe(sourdough(options)))
    .pipe(gulp.dest('./dist/'))
});
```

## Options

All options supported by the [sourdough-preprocessor](https://github.com/sourdough-css/preprocessor) are supported

## Acknowledgements

Based on [gulp-suitcss](https://github.com/Casear/gulp-suitcss) by Casear Chu.
