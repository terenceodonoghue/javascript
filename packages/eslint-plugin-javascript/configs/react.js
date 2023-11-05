import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

const react = compat.config({
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
});

export default react;
