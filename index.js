var through = require('through-gulp');
var gutil = require('gulp-util');
var preprocessor = require('sourdough-preprocessor');
var PluginError = gutil.PluginError;

// Consts
var PLUGIN_NAME = 'gulp-sourdough';


function sourdough(options) {
    options = options || {};
    return through(function (file, enc, cb) {
        if (file.isStream()) {
            return cb(new PluginError(PLUGIN_NAME, 'Streaming not supported'));
        }
        if (file.isBuffer()) {
            try {
                file.contents = new Buffer(preprocessor(String(file.contents), options));
            } catch (e) {
                return cb(new PluginError(PLUGIN_NAME, e));
            }
        }
        this.push(file);
        cb();
    }, function (cb) {
        cb();
    });
}
// Exporting the plugin main function
module.exports = sourdough;
