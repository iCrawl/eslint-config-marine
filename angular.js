const path = require('path');

module.exports = {
	extends: [path.join(__dirname, 'index.js')],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			extends: ['plugin:@angular-eslint/recommended', 'plugin:@angular-eslint/template/process-inline-templates'],
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
			files: ['*.component.html'],
			extends: ['plugin:@angular-eslint/template/recommended'],
			rules: {},
		},
	],
};
