module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'coverage',
    'dist',
  ],
  verbose: true,
  coverageThreshold: {
    global: {
      functions: 0,
      lines: 0,
      statements: -10,
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['**/__tests__/**/*.{js,ts}?(x)'],
  testPathIgnorePatterns : [
    "./lib",
    "./dist"
  ],
  collectCoverage: true
};
