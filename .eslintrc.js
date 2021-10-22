module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },

  extends: [
    'plugin:vue/recommended'
  ],

  overrides: [
    {
      env: {
        jest: true
      },
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ]
    }
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  root: true,

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },

  'extends': [
    'plugin:vue/recommended',
    '@vue/typescript'
  ]
}
