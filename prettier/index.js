const path = require('path');

module.exports = {
	extends: [path.join(__dirname, '..', 'index.js'), 'prettier'],
};
