const path = require('path');

module.exports = {
	extends: [
		path.join(__dirname, '..', 'vue-ssr.js'),
		'aqua/prettier/vue',
		path.join(__dirname, 'prettier.js'),
		'prettier/vue',
	],
};
