module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'e2e',
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)',
  ],
  setupFiles: ['./jest.mock.js'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  modulePathIgnorePatterns: ['e2e'],
};
