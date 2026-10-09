import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
    },
    rules: {
      'no-unused-vars': 'warn',
      eqeqeq: 'error',
      'prefer-const': 'warn',
      'no-console': 'warn',
    },
  },
];
