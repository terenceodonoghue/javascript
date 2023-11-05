import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

const basic = compat.config({
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['**/*.c[jt]s'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: true,
      typescript: true,
    },
  },
});

export default basic;
