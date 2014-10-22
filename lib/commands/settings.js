/* jshint node:true */
var path = require("path"),
	fs = require("fs-extra"),
	_ = require("lodash"),
	rimraf = require("rimraf"),
	util = require("../util"),
	copyFrom = path.join(__dirname, '../../');
module.exports = function(callback) {
	rimraf("./grunt/settings/", function(er) {
		if (er) {
			throw er;
		}
	});
	_.each([".jsbeautifyrc", ".jshintrc"], function(f) {
		var projectFile = path.join(copyFrom, f),
			targetFile = path.join("./", f);
		if (fs.existsSync(targetFile)) {
			if (!util.identical(targetFile, projectFile)) {
				console.log("Overwriting:", f);
				fs.copySync(projectFile, targetFile);
			} else {
				console.log(f + " settings are up to date.");
			}
		} else {
			fs.copySync(projectFile, targetFile);
		}
	});
	if (_.isFunction(callback)) {
		callback();
	}
};
