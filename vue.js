const path = require('path');

module.exports = {
	'parser': 'vue-eslint-parser',
	'parserOptions': {
		parser: '@typescript-eslint/parser'
	},
	'extends': [
		'plugin:vue/recommended',
		'aqua/node',
		path.join(__dirname, 'index.js')
	],
	'env': {
		browser: true
	},
	'rules': {
		'vue/html-indent': ['error', 'tab'],
		'vue/max-attributes-per-line': 0,
		'vue/html-closing-bracket-newline': ['error', {
			singleline: 'never',
			multiline: 'never'
		}],
		'vue/attributes-hyphenation': 0
	}
};
