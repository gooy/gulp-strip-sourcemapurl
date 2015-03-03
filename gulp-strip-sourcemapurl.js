var through     = require('through2');
var trim        = require('trim');

var PLUGIN_NAME = 'gulp-strip-sourcemapurl';

function stripSourceMappingURL(opts) {
	if (!opts) opts = {};
	
	return through.obj(function (file, enc, cb) {
		if (!file.isNull()) {
			var src = file.contents.toString('utf8');
			var re = /(^\/\/# sourceMappingURL=.*)/m;
			src = src.replace(re,"");
			file.contents = new Buffer(trim(src));
		}

		this.push(file);
		cb();
	});
}

module.exports = stripSourceMappingURL;