/* eslint-disable import/prefer-default-export */
import type { Parser } from 'prettier';
import babel from 'prettier/parser-babel';
import sortPackageJson from 'sort-package-json';

const parser = babel.parsers['json-stringify'];

export const parsers: { [parserName: string]: Parser } | undefined = {
  'json-stringify': {
    ...parser,
    preprocess: (text, options) => {
      let processedText = text;

      if (parser.preprocess) {
        processedText = parser.preprocess(text, options);
      }

      return options.filepath &&
        /(^|\\|\/)package\.json$/.test(options.filepath)
        ? sortPackageJson(processedText)
        : processedText;
    },
  },
};
