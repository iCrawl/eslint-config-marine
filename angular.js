const path = require('path');

module.exports = {
	extends: [path.join(__dirname, 'index.js')],
	plugins: ['@angular-eslint', '@typescript-eslint/tslint'],
	rules: {
		'prettier/prettier': [
			'error',
			{},
			{
				usePrettierc: true,
			},
		],
		'@typescript-eslint/tslint/config': [
			'warn',
			{
				rules: {
					'template-accessibility-alt-text': true,
					'template-accessibility-elements-content': true,
					'template-accessibility-label-for': true,
					'template-accessibility-tabindex-no-positive': true,
					'template-accessibility-table-scope': true,
					'template-accessibility-valid-aria': true,
				},
				rulesDirectory: ['node_modules/codelyzer'],
			},
		],
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

		'@angular-eslint/component-class-suffix': 'error',
		'@angular-eslint/contextual-lifecycle': 'error',
		'@angular-eslint/directive-selector': [
			'error',
			{
				type: 'attribute',
				prefix: 'eworkbench',
				style: 'camelCase',
			},
		],
		'@angular-eslint/component-selector': [
			'error',
			{
				type: 'element',
				prefix: 'eworkbench',
				style: 'kebab-case',
			},
		],
		'@angular-eslint/no-conflicting-lifecycle': 'error',
		'@angular-eslint/no-host-metadata-property': 'error',
		'@angular-eslint/no-input-rename': 'error',
		'@angular-eslint/no-inputs-metadata-property': 'error',
		'@angular-eslint/no-output-native': 'error',
		'@angular-eslint/no-output-on-prefix': 'error',
		'@angular-eslint/no-output-rename': 'error',
		'@angular-eslint/no-outputs-metadata-property': 'error',
		'@angular-eslint/use-lifecycle-interface': 'warn',
		'@angular-eslint/use-pipe-transform-interface': 'error',
	},
	overrides: {
		files: ['*.component.html'],
		parser: '@angular-eslint/template-parser',
		plugins: ['@angular-eslint/template'],
		rules: {
			'@angular-eslint/template/banana-in-a-box': 'error',
			'@angular-eslint/template/no-negated-async': 'error',
		},
	},
};
