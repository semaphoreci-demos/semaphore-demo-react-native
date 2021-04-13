module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>__tests__/setupTests.js'],
  testPathIgnorePatterns: ['setupTests.js', 'node_modules', 'e2e'],
};
