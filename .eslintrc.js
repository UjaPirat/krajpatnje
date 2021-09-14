module.exports = {
  parser: '@typescript-eslint/parser', // Parser u ovom slucaju ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Dozvoljava moderne ECMAScript feature
    sourceType: 'module', // Dozvoljava koriscenje import sintakse
    ecmaFeatures: {
      jsx: true, // Dozvoljava parsiranje jsx file-ova
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatski detektuje react verziju
    },
  },
  extends: [
    'plugin:react/recommended', // Koristi standardna @eslint-plugin-react pravila
    'plugin:@typescript-eslint/recommended', // Koristi standardna @typescript-eslint/eslint-plugin pravila
    'plugin:prettier/recommended', // Koristi standardna pravila stila koda
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
  },
};
