module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    './.eslintrc-auto-import.json',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
  },
  ignorePatterns: ['/*', '!/src'],
  rules: {
    'react/no-unescaped-entities': 'off',
    'react/jsx-no-undef': ['off', { allowGlobals: true }],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        prefix: ['T'],
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
  },
}
