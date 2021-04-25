const prettierOptions = require('./.prettierrc');

module.exports = {
  root: true,
  extends: [
    'prettier',
    '@react-native-community',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', 'jest', 'testing-library'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, {args: 'none'}],
      },
    },
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {
        extensions: ['.js', '.jsx', '.json', '.native.js'],
      },
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    '@typescript-eslint/no-var-requires': 0,
  },
  env: {
    'jest/globals': true,
  },
  globals: {
    fetch: true,
    it: true,
    expect: true,
    describe: true,
    __DEV__: true,
    beforeEach: true,
    device: true,
    by: true,
    element: true,
    jest: true,
    jasmine: true,
    beforeAll: true,
    afterAll: true,
    HermesInternal: true,
  },
};
