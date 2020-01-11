module.exports = {
  env: {
    node: true
  },
  extends: [
    '@vue/standard',
    'plugin:vue/essential'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  root: true,
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'object-curly-spacing': ['error', 'never'],
    quotes: ['error', 'single'],
    'sort-keys': ['warn', 'asc', {
      caseSensitive: false, natural: true
    }]
  }
}
