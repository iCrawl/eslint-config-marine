const path = require('path');

module.exports = {
	extends: ['aqua/vue', path.join(__dirname, 'index.js'), 'plugin:vue/recommended'],
	parserOptions: {
		parser: '@typescript-eslint/parser',
		extraFileExtensions: ['.vue'],
	},
};
