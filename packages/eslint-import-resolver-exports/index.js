const resolve = require('resolve');

exports.interfaceVersion = 2;

exports.resolve = (source) => {
  try {
    const resolvedPath = resolve.sync(source);
    return { found: true, path: resolvedPath };
  } catch {
    return { found: false };
  }
};
