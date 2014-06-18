/*global module, require, process */
module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt, {
		scope: 'devDependencies'
	});
	require('load-grunt-config')(grunt, {
		configPath: require("path").join(process.cwd(), 'grunt', 'tasks'),
		data: {
			pkg: grunt.file.readJSON('package.json'),
			settings: {
				clean: "dist/*",
				jshint: "src/**/*.js",
				jsbeautifier: "src/**/*.js"
			}
		}
	});
};