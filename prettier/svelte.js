const path = require('path');

module.exports = {
	extends: [path.join(__dirname, '..', 'svelte.js'), path.join(__dirname, '..', 'prettier.js')],
};
