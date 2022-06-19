const resolve = require('resolve');
const getPackageName = require('./utils/getPackageName');

exports.interfaceVersion = 2;

exports.resolve = (source) => {
  try {
    const resolvedPath = resolve.isCore(source)
      ? null
      : resolve.sync(getPackageName(source), {
          packageFilter: (pkg) => {
            const packageJson = pkg;

            if (packageJson.exports) {
              const path = source
                .split(packageJson.name)
                .map((subpath) => `.${subpath}`)
                .pop();

              if (packageJson.exports[path]) {
                packageJson.main = packageJson.exports[path];
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
