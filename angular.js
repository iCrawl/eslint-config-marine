const path = require('path');

module.exports = {
	overrides: [
		{
			files: ['*.ts'],
			extends: ['plugin:@angular-eslint/recommended', path.join(__dirname, 'index.js')],
			rules: {
				'@typescript-eslint/explicit-function-return-type': [
					'error',
					{
						allowExpressions: true,
					},
				],
				'@typescript-eslint/naming-convention': 0,
				'@typescript-eslint/no-floating-promises': 0,
				'@typescript-eslint/no-extraneous-class': 0,
				'@typescript-eslint/no-empty-function': 0,
			},
		},
		{
			files: ['*.html'],
			extends: ['plugin:@angular-eslint/template/recommended'],
			rules: {},
		},
	],
};
