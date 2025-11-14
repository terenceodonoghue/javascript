import { parsers as babelParsers } from 'prettier/plugins/babel';
import { sortPackageJson } from 'sort-package-json';

const parser = babelParsers['json-stringify'];

export const parsers = {
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
