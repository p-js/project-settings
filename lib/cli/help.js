/* jshint node:true */
var path = require("path"),
	fs = require("fs");
module.exports = function() {
	var helpFile = path.join(__dirname, "..", "..", "doc", "help.txt");
	console.log("\n" + fs.readFileSync(helpFile, "utf-8") + "\n");
};
