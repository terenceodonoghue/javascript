export default {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  importOrderSeparation: true,
  importOrder: ['<THIRD_PARTY_MODULES>', '^@terenceodonoghue/(.*)$', '^[./]'],
  plugins: [
    '@terenceodonoghue/prettier-plugin-packagejson',
    '@trivago/prettier-plugin-sort-imports',
  ],
};
