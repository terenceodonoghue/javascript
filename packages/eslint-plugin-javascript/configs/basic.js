import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

const basic = compat.config({
  extends: [
    'plugin:@typescript-eslint/recommended',
    // 'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
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
