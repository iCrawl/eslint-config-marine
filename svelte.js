const path = require('path');

module.exports = {
	extends: ['aqua/svelte', path.join(__dirname, 'index.js')],
	parserOptions: {
		extraFileExtensions: ['.svelte'],
	},
	settings: {
		'svelte3/typescript': true,
	},
};
