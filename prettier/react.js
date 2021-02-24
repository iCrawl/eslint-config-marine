const path = require('path');

module.exports = {
	extends: [path.join(__dirname, '..', 'react.js'), 'aqua/prettier/react', path.join(__dirname, 'prettier.js')],
};
