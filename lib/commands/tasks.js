/* jshint node:true */
var path = require("path"),
	prompt = require("prompt"),
	fs = require("fs-extra"),
	_ = require("lodash"),
	targetDir = "./grunt/tasks",
	util = require("../util.js"),
	fromPath = path.join(__dirname, '..', '..', 'grunt', 'tasks');

module.exports = function(callback) {

	if (fs.existsSync(targetDir)) {
		var exists;
		_.each(fs.readdirSync(fromPath), function(file) {
			var targetFile = path.join(targetDir, file);
			if (fs.existsSync(targetFile) && !util.identical(targetFile, path.join(fromPath, file))) {
				exists = exists || {};
				exists[file] = {
					description: file + " exists, overwrite? (Y)".green
				};
			} else {
				fs.copySync(path.join(fromPath, file), targetFile);
			}
		});
		if (exists) {
			prompt.get({
					properties: exists
				},
				function(err, result) {
					if (err) {
						console.error("Error:" + err + "".red);
					} else if (result) {
						_.each(result, function(overwrite, file) {
							if (overwrite === "Y") {
								console.warn(("Overwrite: " + file).yellow);
								fs.copySync(path.join(fromPath, file), path.join(targetDir, file));
							}
						});
						util.executeCB(callback);
					}
				});
		} else {
			util.executeCB(callback);
		}
	} else {
		fs.copySync(fromPath, targetDir);
		console.log("Done adding grunt tasks.\n".cyan);
		util.executeCB(callback);

	}
};
