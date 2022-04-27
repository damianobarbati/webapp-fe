export default {
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['.spec-e2e.js'],
  transform: {
    '\\.js?$': './jest-babel-transform.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
};
