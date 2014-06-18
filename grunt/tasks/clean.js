/* global module */
module.exports = function(grunt, options) {
	var path = [options.settings.clean || "dist/*"];
	return {
		folder: path
	};
};