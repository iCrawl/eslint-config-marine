module.exports = {
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'aqua',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	rules: {
		'@typescript-eslint/array-type': 0,
		'@typescript-eslint/await-thenable': 0,
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/ban-ts-ignore': 0,
		'@typescript-eslint/consistent-type-assertions': [
			2,
			{ assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' },
		],
		'@typescript-eslint/consistent-type-definitions': [2, 'interface'],
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/explicit-member-accessibility': 2,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/interface-name-prefix': 0,
		'@typescript-eslint/member-delimiter-style': 2,
		'@typescript-eslint/member-ordering': 0,
		'@typescript-eslint/method-signature-style': [2, 'method'],
		'@typescript-eslint/naming-convention': 0,
		'@typescript-eslint/no-base-to-string': 2,
		'@typescript-eslint/no-confusing-non-null-assertion': 2,
		'@typescript-eslint/no-dynamic-delete': 2,
		'@typescript-eslint/no-empty-interface': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-extra-non-null-assertion': 2,
		'@typescript-eslint/no-extraneous-class': 2,
		'@typescript-eslint/no-floating-promises': [2, { ignoreVoid: true, ignoreIIFE: true }],
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 2,
		'@typescript-eslint/no-non-null-asserted-optional-chain': 2,
		'@typescript-eslint/no-non-null-assertion': 0,
		'@typescript-eslint/no-require-imports': 2,
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
		'@typescript-eslint/no-unnecessary-condition': 2,
		'@typescript-eslint/no-unnecessary-type-arguments': 2,
		'@typescript-eslint/non-nullable-type-assertion-style': 2,
		'@typescript-eslint/prefer-as-const': 2,
		'@typescript-eslint/prefer-for-of': 2,
		'@typescript-eslint/prefer-function-type': 2,
		'@typescript-eslint/prefer-includes': 2,
		'@typescript-eslint/prefer-nullish-coalescing': 2,
		'@typescript-eslint/prefer-optional-chain': 2,
		'@typescript-eslint/prefer-readonly': 2,
		'@typescript-eslint/prefer-readonly-parameter-types': 0,
		'@typescript-eslint/prefer-reduce-type-parameter': 2,
		'@typescript-eslint/prefer-regexp-exec': 2,
		'@typescript-eslint/prefer-return-this-type': 2,
		'@typescript-eslint/prefer-string-starts-ends-with': 2,
		'@typescript-eslint/prefer-ts-expect-error': 1,
		'@typescript-eslint/require-array-sort-compare': 2,
		'@typescript-eslint/triple-slash-reference': 0,
		'@typescript-eslint/switch-exhaustiveness-check': 2,
		'@typescript-eslint/type-annotation-spacing': 2,
		'@typescript-eslint/unbound-method': 0,
		'@typescript-eslint/unified-signatures': 2,

		'brace-style': 0,
		'@typescript-eslint/brace-style': [2, '1tbs', { allowSingleLine: true }],
		'comma-dangle': 0,
		'@typescript-eslint/comma-dangle': [2, 'always'],
		'comma-spacing': 0,
		'@typescript-eslint/comma-spacing': [2, { before: false, after: true }],
		'dot-notation': 0,
		'@typescript-eslint/dot-notation': [2, { allowKeywords: true, allowPattern: '(^[A-Z])|(^[a-z]+(_[a-z]+)+$)' }],
		'func-call-spacing': 0,
		'@typescript-eslint/func-call-spacing': [2, 'never'],
		indent: 0,
		'@typescript-eslint/indent': [2, 'tab'],
		'keyword-spacing': 0,
		'@typescript-eslint/keyword-spacing': [2, { before: true, after: true }],
		'lines-between-class-members': 0,
		'@typescript-eslint/lines-between-class-members': [2, 'always', { exceptAfterSingleLine: true }],
		'no-dupe-class-members': 0,
		'@typescript-eslint/no-dupe-class-members': 2,
		'no-duplicate-imports': 0,
		'@typescript-eslint/no-duplicate-imports': [2, { includeExports: false }],
		'no-extra-semi': 0,
		'@typescript-eslint/no-extra-semi': 2,
		'no-implied-eval': 0,
		'@typescript-eslint/no-implied-eval': 2,
		'no-redeclare': 0,
		'@typescript-eslint/no-redeclare': 2,
		'no-throw-literal': 0,
		'@typescript-eslint/no-throw-literal': 2,
		'no-unused-vars': 0,
		'@typescript-eslint/no-unused-vars': [
			2,
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: true,
			},
		],
		'no-use-before-define': 0,
		'@typescript-eslint/no-use-before-define': 2,
		'no-useless-constructor': 0,
		'@typescript-eslint/no-useless-constructor': 2,
		'object-curly-spacing': 0,
		'@typescript-eslint/object-curly-spacing': [2, 'always'],
		quotes: 0,
		'@typescript-eslint/quotes': [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
		'no-return-await': 0,
		'@typescript-eslint/return-await': 1,
		semi: 0,
		'@typescript-eslint/semi': [2, 'always', { omitLastInOneLineBlock: false }],
		'space-before-function-paren': 0,
		'@typescript-eslint/space-before-function-paren': [2, { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
		'space-infix-ops': 0,
		'@typescript-eslint/space-infix-ops': [2, { int32Hint: true }],

		'no-undef': 0,
	},
};
