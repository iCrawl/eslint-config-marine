const path = require('path');

module.exports = {
	extends: [path.join(__dirname, '..', 'jsx.js'), 'aqua/prettier/jsx', path.join(__dirname, 'prettier.js')],
};
