const path = require('path');

module.exports = {
	'extends': [
		'aqua',
		'aqua/node',
		'plugin:node/recommended',
		path.join(__dirname, 'index.js')
	],
	'rules': {
		'node/no-extraneous-import': 'error',
		'node/no-missing-import': 'error',
		'node/process-exit-as-throw': 'error',
		'node/no-deprecated-api': 'error',
		'node/prefer-global/buffer': 'error',
		'node/prefer-global/console': 'error',
		'node/prefer-global/process': 'error',
		'node/prefer-global/text-decoder': 'error',
		'node/prefer-global/text-encoder': 'error',
		'node/prefer-global/url-search-params': 'error',
		'node/prefer-global/url': 'error'
	}
};
