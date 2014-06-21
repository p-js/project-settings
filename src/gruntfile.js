/* jshint node:true */
var path = require("path"),
	prompt = require("prompt"),
	fs = require("fs-extra"),
	_ = require("lodash"),
	copyFrom = path.join(__dirname, '..', 'grunt', 'Gruntfile.js'),
	util = require("./util"),
	copyTo = "Gruntfile.js";

function copy() {
	fs.copySync(copyFrom, "./Gruntfile.js");
}

module.exports = function(callback) {
	if (fs.existsSync(copyTo)) {
		if (!util.identical(copyFrom, copyTo)) {
			prompt.get({
					properties: {
						answer: {
							description: "Overrite Gruntfile.js? (Y)".green
						}
					}
				},
				function(err, result) {
					if (err) {
						console.error("Error:" + err + "".red);
					} else {
						if (result && result.answer === "Y") {
							process.stdin.destroy();
							fs.removeSync(copyTo);
							copy();
							util.executeCB(callback);
							console.warn("Overwrote Gruntfile.js.\n".yellow);
						}
					}
				});
		}
	} else {
		copy();
		console.log("Added Gruntfile.js.\n".cyan);
		util.executeCB(callback);
	}
};