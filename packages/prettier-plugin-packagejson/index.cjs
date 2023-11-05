const babel = require('prettier/parser-babel');
const sortPackageJson = require('sort-package-json');

const parser = babel.parsers['json-stringify'];

exports.parsers = {
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
