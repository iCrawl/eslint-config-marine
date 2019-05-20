const path = require('path');

module.exports = {
	'extends': [
		'plugin:vue/recommended',
		'aqua/vue',
		path.join(__dirname, 'index.js')
	],
	'parserOptions': {
		parser: '@typescript-eslint/parser'
	}
};
