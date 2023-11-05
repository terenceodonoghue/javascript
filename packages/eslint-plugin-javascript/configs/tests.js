import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

const tests = compat.config({
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      rules: {
        'testing-library/no-manual-cleanup': 'off',
      },
    },
  ],
});

export default tests;
