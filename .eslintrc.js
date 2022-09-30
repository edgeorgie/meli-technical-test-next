module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: ['react-app', 'eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended'],
  plugins: ['react-hooks'],
  rules: {
    semi: ['error', 'never'],
    'prettier/prettier': ['error', { endOfLine: 'auto', singleQuote: true }],
    'react-hooks/rules-of-hooks': 'error', // Verifica las reglas de los Hooks
    'react-hooks/exhaustive-deps': 'warn', // Verifica los dependencias de los efectos
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
  },
}