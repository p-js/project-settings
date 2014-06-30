/* jshint node:true */
var _ = require("lodash");
module.exports = function(argv) {

	argv.version = argv.v;
	argv.help = argv.h;
	argv.all = argv.a;
	argv.gruntfile = argv.g;
	argv.tasks = argv.t;
	argv.devDeps = argv.d;

	if (argv.all) {
		argv.tasks = argv.gruntfile = true;
	}

	return _.omit(argv, "h", "a", "g", "v", "t", "d");
};
