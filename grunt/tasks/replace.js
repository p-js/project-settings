/* global module */
module.exports = {
	dist: {
		options: {
			patterns: [{
				match: 'timestamp',
				replacement: '<%= grunt.template.today() %>'
			}, {
				match: 'version',
				replacement: '<%= pkg.version %><%= grunt.config("buildNumber") %>'
			}]
		},
		src: "dist/*.js",
		dest: "./"
	}
};