/* global module */
module.exports = function(grunt, options) {
	var src = options.settings.jshint || "src/**/*.js";
	return {
		devel: {
			options: grunt.file.readJSON("./grunt/settings/jshint-dev.json"),
			src: src
		},
		release: {
			options: grunt.file.readJSON("./grunt/settings/jshint.json"),
			src: src
		}
	};
};