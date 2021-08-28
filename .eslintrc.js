module.exports = {
	'env': {
		'node': true,
		'browser': true,
		'commonjs': true,
		'amd': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true,
		},
		'ecmaVersion': 12,
		'sourceType': 'module',
	},
	'plugins': [
		'react',
		'@typescript-eslint',
	],
	'rules': {
		'no-var': 'error',
		'no-console': 'error',
		'quotes': [
			'error',
			'single',
		],
		'semi': [
			'error',
			'never',
		],
		'comma-dangle': [
			'error', 
			'always-multiline',
		],
		'max-len': ['error', 120],
	},
}
