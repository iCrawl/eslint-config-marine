const path = require('path');

module.exports = {
	extends: [path.join(__dirname, '..', 'jsx.js'), path.join(__dirname, '..', 'prettier.js')],
};
