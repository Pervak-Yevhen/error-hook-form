const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin"); //eslint-disable-line

module.exports = config => {
  // Remove the ModuleScopePlugin which throws when we try to import something
  // outside of src/.
  config.resolve.plugins.pop();

  // Resolve the path aliases.
  config.resolve.plugins.push(new TsconfigPathsPlugin());

  // Let Babel compile outside of src/.
//   console.warn(config.module.rules);
//   const tsRule = config.module.rules[2].oneOf[1];
//   tsRule.include = undefined;
//   tsRule.exclude = /node_modules/;

  // Let Babel compile outside of src/.
  const babelLoaderRule = config.module.rules[1].oneOf.find(rule => rule.loader && rule.loader.includes('babel-loader'));
  babelLoaderRule.include = undefined;
  babelLoaderRule.exclude = /node_modules/;

  return config;
};
