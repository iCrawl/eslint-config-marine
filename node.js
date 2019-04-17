const path = require('path');

module.exports = {
	'extends': [
		'aqua',
		'aqua/node',
		path.join(__dirname, 'index.js')
	]
};
