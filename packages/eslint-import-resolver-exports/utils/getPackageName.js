module.exports = (source) => {
  if (source.startsWith('.')) {
    return source;
  }

  if (source.startsWith('@')) {
    const [scope, package] = source.split('/');
    return [scope, package].join('/');
  }

  const [package] = source.split('/');
  return package;
};
