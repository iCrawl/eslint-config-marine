const path = require('path');

module.exports = {
	extends: ['aqua/vue', path.join(__dirname, 'index.js')],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		extraFileExtensions: ['.vue'],
	},
	rules: {
		'@typescript-eslint/no-unused-vars': 0,
	},
};
