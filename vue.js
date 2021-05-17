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
		'no-unused-vars': 0,
		'@typescript-eslint/no-unused-vars': 0,
		
		'no-unused-labels': 0,
		'no-label-var': 0,
	},
};
