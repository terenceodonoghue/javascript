const resolve = require('resolve');

const id = (source) => {
  if (source.startsWith('@')) {
    const [scope, package] = source.split('/');
    return [scope, package].join('/');
  }

  const [package] = source.split('/');
  return package;
};

exports.interfaceVersion = 2;

exports.resolve = (source) => {
  if (resolve.isCore(source) || source.startsWith('.')) {
    return { found: false };
  }

  try {
    const resolvedPath = resolve.sync(id(source), {
      packageFilter: (pkg) => {
        const packageJson = pkg;

        if (packageJson.exports) {
          const subpath = `.${source.split(packageJson.name).pop()}`;

          if (packageJson.exports[subpath]) {
            packageJson.main =
              packageJson.exports[subpath].default ||
              packageJson.exports[subpath];
          }
        }

        return packageJson;
      },
    });

    return { found: true, path: resolvedPath };
  } catch (error) {
    return { found: false };
  }
};
