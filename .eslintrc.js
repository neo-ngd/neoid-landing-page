const fs = require('fs');

const foldersUnderSrc = fs
	.readdirSync('src', { withFileTypes: true })
	.filter(dirent => dirent.isDirectory())
	.map(dirent => dirent.name);

module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
		jest: true,
	},
	plugins: ['import', 'react-hooks'],
	extends: ['eslint:recommended', 'plugin:jest/recommended', 'plugin:prettier/recommended'],
	rules: {
		eqeqeq: ['error', 'always', { null: 'never' }],
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'sort-imports': ['error', { ignoreDeclarationSort: true, ignoreCase: true }],
		'import/order': [
			'error',
			{
				alphabetize: { order: 'asc' },
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'object',
					'unknown',
				],
				pathGroups: [{ pattern: `{${foldersUnderSrc.join(',')}}{,/**}`, group: 'internal' }],
				pathGroupsExcludedImportTypes: [],
			},
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
	overrides: [
		{
			files: ['**/*.ts?(x)'],
			parserOptions: {
				project: './tsconfig.json',
			},
			extends: ['plugin:@typescript-eslint/recommended'],
			rules: {
				'@typescript-eslint/explicit-module-boundary-types': [
					'warn',
					{ allowArgumentsExplicitlyTypedAsAny: true },
				],
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
				'@typescript-eslint/strict-boolean-expressions': [
					'warn',
					{
						allowNullableBoolean: true,
						allowNullableObject: false,
						allowAny: true,
					},
				],
			},
		},
	],
};
