const fs = require('fs');

const foldersUnderSrc = fs
	.readdirSync('src', { withFileTypes: true })
	.filter(dirent => dirent.isDirectory())
	.map(dirent => dirent.name);

module.exports = {
	root: true,
	env: {
		node: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:react-hooks/recommended',
	],
	parserOptions: {
		project: './tsconfig.json',
	},
	plugins: ['import'],
	rules: {
		eqeqeq: ['error', 'always', { null: 'never' }],
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'sort-imports': ['error', { ignoreDeclarationSort: true, ignoreCase: true }],
		'@typescript-eslint/explicit-module-boundary-types': [
			'warn',
			{ allowArgumentsExplicitlyTypedAsAny: true },
		],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/strict-boolean-expressions': ['error'],
		'import/order': [
			'error',
			{
				alphabetize: { order: 'asc' },
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
				pathGroups: [{ pattern: `{${foldersUnderSrc.join(',')}}{,/**}`, group: 'internal' }],
				pathGroupsExcludedImportTypes: [],
			},
		],
	},
	ignorePatterns: ['/build', '/*.js'],
};
