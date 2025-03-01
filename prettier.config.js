/**
 * Prettier will read RC files, you can set your prettier rules here
 */

const baseLintingPath = '{,!(node_modules|dist|build|coverage|.git|reports)/**/}';
module.exports = {
  overrides: [
    {
      files: 'package.json',
      options: {
        parser: 'json-stringify',
      },
    },
    {
      files: `${baseLintingPath}*.yaml`,
      options: {
        parser: 'yaml',
      },
    },
    {
      files: `${baseLintingPath}*.scss`,
      options: {
        parser: 'scss',
      },
    },
    {
      files: `${baseLintingPath}*.json`,
      options: {
        parser: 'json',
      },
    },
  ],
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  printWidth: 130,
  tabWidth: 2,
  proseWrap: 'always',
};
