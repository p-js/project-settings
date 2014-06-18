/* global module */
module.exports = function(grunt, options) {
	var jsbeautifyrc = grunt.file.readJSON("./grunt/settings/jsbeautify.json"),
		src = [options.settings.jsbeautifier || "src/**/*.js"];
	return {
		all: {
			src: src,
			options: {
				js: jsbeautifyrc
			},
		},
		precommit: {
			src: src,
			options: {
				js: jsbeautifyrc,
				mode: "VERIFY_ONLY"
			}
		}

	};
};