/* jshint node:true */
var devDependencies = {
		"grunt": "0.4.x",
		"grunt-bumpx": "^0.2.0",
		"grunt-contrib-clean": "*",
		"grunt-contrib-concat": "~0.4.0",
		"grunt-contrib-copy": "*",
		"grunt-contrib-jshint": "~0.10.0",
		"grunt-contrib-uglify": "^0.4.0",
		"grunt-contrib-watch": "*",
		"grunt-githooks": "^0.3.1",
		"grunt-jsbeautifier": "^0.2.7",
		"grunt-push-svn": "^0.1.9",
		"grunt-replace": "^0.7.2",
		"grunt-rigger": "*",
		"grunt-shell": "^0.7.0",
		"grunt-karma": "0.x.x",
		"grunt-karma-coveralls": "^2.5.2",
		"load-grunt-config": "^0.10.0",
		"load-grunt-tasks": "^0.6.0",
		"karma": "^0.12.23",
		"karma-coverage": "^0.2.6",
		"karma-growl-reporter": "^0.1.1",
		"karma-mocha": "^0.1.9",
		"karma-mocha-reporter": "^0.3.1",
		"karma-phantomjs-launcher": "^0.1.4"
	},
	_ = require("lodash"),
	spawn = require('child_process').spawn;
module.exports = function() {
	var cmd = ["install", "--save-dev"];
	_.each(devDependencies, function(version, pkg) {
		cmd.push(pkg + "@" + version);
	});
	spawn("npm", cmd, {
		stdio: 'inherit'
	});
};
