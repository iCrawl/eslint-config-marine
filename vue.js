const path = require('path');

module.exports = {
	extends: [path.join(__dirname, 'index.js'), 'plugin:vue/recommended', 'aqua/vue'],
	parserOptions: {
		parser: '@typescript-eslint/parser',
		extraFileExtensions: ['.vue'],
	},
};
