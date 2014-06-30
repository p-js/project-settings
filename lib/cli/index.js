/* jshint node:true */
var settings = require("../commands/settings"),
	tasks = require("../commands/tasks"),
	gruntfile = require("../commands/gruntfile"),
	argv = require("./argv"),
	help = require("./help"),
	version = require("./version"),
	_ = require("lodash"),
	async = require("async");
module.exports = {
	tasks: function(callback) {
		tasks(callback);
	},
	gruntfile: function(callback) {
		gruntfile(callback);
	},
	settings: function(callback) {
		settings(callback);
	},
	argv: function(a) {
		a = argv(a);
		if (a.help) {
			help();
		} else if (a.version) {
			version();
		} else {
			var tasks = [this.settings, this.tasks, this.gruntfile];
			if (!a.tasks) {
				tasks = _.without(tasks, this.tasks);
			}
			if (!a.gruntfile) {
				tasks = _.without(tasks, this.gruntfile);
			}
			async.series(tasks);
		}

	}
};
