module.exports = {
	'extends': [
		'aqua',
		'plugin:@typescript-eslint/recommended',
		'plugin:promise/recommended'
	],
	'parserOptions': {
		project: './tsconfig.json'
	},
	'rules': {
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': 0,
		'@typescript-eslint/await-thenable': 0,
		'@typescript-eslint/class-name-casing': 'error',
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'indent': 0,
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/interface-name-prefix': 0,
		'@typescript-eslint/member-delimiter-style': 'error',
		'@typescript-eslint/member-ordering': 0,
		'@typescript-eslint/no-empty-interface': 0,
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-non-null-assertion': 0,
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/prefer-interface': 'error',
		'@typescript-eslint/promise-function-async': 0,
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/type-annotation-spacing': 'error',
		'@typescript-eslint/unified-signatures': 'error',
		'@typescript-eslint/camelcase': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
		'semi': 0,
		'@typescript-eslint/semi': 'error',
		'promise/catch-or-return': 'error',
		'promise/no-return-wrap': 'error',
		'promise/param-names': 'error',
		'promise/always-return': 'error',
		'promise/no-nesting': 'error',
		'promise/no-new-statics': 'error',
		'promise/prefer-await-to-then': 'error',
		'promise/prefer-await-to-callbacks': 'error'
	}
};
