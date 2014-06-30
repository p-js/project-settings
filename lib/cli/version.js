/* jshint node:true */
module.exports = function() {
	var packageJSON = require(require("path").join(__dirname, '..', '..', 'package.json'));
	console.log("pjs-project-settings v" + packageJSON.version);
};
