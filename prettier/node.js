const path = require('path');

module.exports = {
	extends: [path.join(__dirname, '..', 'node.js'), path.join(__dirname, 'prettier.js')],
};
