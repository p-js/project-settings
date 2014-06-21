/* jshint node:true */
var path = require("path"),
	fs = require("fs-extra"),
	_ = require("lodash"),
	util = require("./util"),
	copyFrom = path.join(__dirname, '../');
module.exports = function(callback) {
	_.each(["jsbeautify.json", "jshint.json", "jshint-dev.json"], function(f) {
		var projectFile = path.join(copyFrom, f),
			targetFile = path.join("./grunt/settings/", f);
		if (fs.existsSync(targetFile)) {
			if (!util.identical(targetFile, projectFile)) {
				console.log("Overwriting grunt/settings.\n", f);
				fs.copySync(projectFile, targetFile);
			} else {
				console.log(f + " settings are up to date.");
			}
		} else {
			fs.mkdirsSync("./grunt/settings");
			console.log("Adding grunt/settings.\n", f);
			fs.copySync(projectFile, targetFile);
		}
	});
	if (_.isFunction(callback)) {
		callback();
	}
};