module.exports = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
  setupFiles: ['<rootDir>/src/components/__tests__/jest.setup.js'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(vuetify|@vue)/)',
  ],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/src/components/__tests__/__mocks__/styleMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['js', 'json', 'vue'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/__mocks__/',
    'setup\\.js$',
    'jest\\.setup\\.js$',
  ],
}
