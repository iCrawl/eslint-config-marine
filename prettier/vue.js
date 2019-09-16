const path = require('path');

module.exports = {
	extends: [
		path.join(__dirname, '..', 'vue.js'),
		'aqua/prettier/vue',
		path.join(__dirname, 'prettier.js'),
		'prettier/vue',
	],
};
