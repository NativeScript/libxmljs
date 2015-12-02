var path = require('path');
exports = module.exports = require('prebuilt').
	requireNative(path.join(__dirname, '..'), "xmljs");
