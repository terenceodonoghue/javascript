module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  importOrderSeparation: true,
  importOrder: ['<THIRD_PARTY_MODULES>', '^@terenceodonoghue/(.*)$', '^[./]'],
  plugins: [
    require.resolve('@terenceodonoghue/prettier-plugin-packagejson'),
    require.resolve('@trivago/prettier-plugin-sort-imports'),
  ],
};
