import path from 'node:path';

export default {
  icon: true,
  index: true,
  indexTemplate: (paths) => {
    const exportEntries = paths.map(({ path: filePath }) => {
      const basename = path.basename(filePath, path.extname(filePath));
      return `export { default as ${basename} } from './${basename}.js'`;
    });
    return exportEntries.join('\n');
  },
  jsxRuntime: 'automatic',
  outDir: './src/icons/out',
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
  replaceAttrValues: {
    '#000': 'currentColor',
  },
  svgProps: {
    width: '{`${size}rem`}',
    height: '{`${size}rem`}',
  },
  template: ({ imports, componentName, jsx, exports }, { tpl }) => tpl`
    ${imports}
    const ${componentName} = ({ size = 1, ...props}: SVGProps<SVGSVGElement> & { size?: number }) => ${jsx};  
    ${exports}
  `,
  typescript: true,
};
