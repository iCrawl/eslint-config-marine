const path = require('path');

module.exports = {
	extends: ['aqua/svelte', path.join(__dirname, 'index.js')],
	plugins: ['svelte3'],
	parserOptions: {
		extraFileExtensions: ['.svelte'],
	},
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
	settings: {
		'svelte3/typescript': true,
	},
};
