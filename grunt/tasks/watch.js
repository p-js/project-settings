/* global module */
/**
 * options.watch The files to watch
 * options.watchTasks The tasks to run when the files change.
 */
module.exports = function(grunt, options) {
	options.settings = options.settings || {};
	return {
		all: {
			files: options.watch || ['Gruntfile.js', 'src/**/*', 'test/**/*'],
			tasks: options.watchTasks || ['default']
		}
	};
};