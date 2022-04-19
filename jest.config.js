module.exports = {
  collectCoverage: true,

  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },

  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/lib/$1'
  },

  snapshotSerializers: [
    'jest-serializer-vue'
  ],

  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],

  testURL: 'http://localhost/',

  transform: {
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },

  transformIgnorePatterns: [
    '/node_modules/'
  ],

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],

  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel'
}
