/* jshint node:true */
var fs = require("fs"),
	_ = require("lodash");
module.exports = {
	identical: function(file1, file2) {
		file1 = fs.readFileSync(file1).toString().replace(/\s+/g, ' ');
		file2 = fs.readFileSync(file2).toString().replace(/\s+/g, ' ');
		return file1 === file2;
	},
	executeCB: function(callback) {
		if (_.isFunction(callback)) {
			callback();
		}
	}
};