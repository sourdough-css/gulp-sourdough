var through = require('through-gulp')
var gutil = require('gulp-util')
var rext = require('replace-ext')
var preprocessor = require('sourdough-preprocessor')
var PluginError = gutil.PluginError

var PLUGIN_NAME = 'gulp-sourdough'

function sourdough (options) {
  options = options || {}

  var stream = through(function (file, enc, cb) {
    if (options.from === undefined) {
      options.from = file.path
    }

    if (file.isStream()) {
      return cb(new PluginError(PLUGIN_NAME, 'Streaming not supported'))
    }
    if (file.isBuffer()) {
      file.path = rext(file.path, '.css')
      var that = this
      preprocessor(String(file.contents), options)
        .then(function (result) {
          file.contents = new Buffer(result.css)
          that.push(file)
          cb()
        })
        .catch(function (e) {
          var errorOptions = { fileName: file.path }
          if (e.name === 'CssSyntaxError') {
            e = e.message + e.showSourceCode()
            errorOptions.showStack = false
          }
          setImmediate(function () {
            cb(new PluginError(PLUGIN_NAME, e))
          })
        })
    }
  }, function (cb) {
    cb()
  })
  return stream
}

module.exports = sourdough
