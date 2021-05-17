const path = require('path');

module.exports = {
	extends: ['aqua/vue', path.join(__dirname, 'index.js')],
	parserOptions: {
		parser: '@typescript-eslint/parser',
		extraFileExtensions: ['.vue'],
	},
	rules: {
		'@typescript-eslint/no-unused-vars': 0,
	},
};
