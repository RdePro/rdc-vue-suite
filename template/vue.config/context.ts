const path = require('path');

const templatePath = path.resolve(__dirname, '../');

const { resolve } = path;
module.exports = (config) => {
  // specify eslint config
  config.module.rule('eslint').use('eslint-loader').tap((options = {}) => {
    const opt = {
      ...options,
      configFile: resolve(templatePath, '.eslintrc.js'),
    };
    return opt;
  });

  // specify babel config & tsconfig
  const ext = ['js', 'ts', 'tsx'];
  ext.forEach((rule) => {
    config.module.rule(rule).use('babel-loader').tap((options = {}) => {
      const opt = {
        ...options,
        root: templatePath,
        configFile: resolve(templatePath, 'babel.config.js'),
      };
      return opt;
    });

    if (/ts/.test(rule)) {
      config.module.rule(rule).use('ts-loader').tap((options = {}) => {
        const opt = {
          ...options,
          context: templatePath,
          configFile: resolve(templatePath, 'tsconfig.json'),
        };
        return opt;
      });
    }
  });

  // specify post css config
  const cssOneOf = ['vue-modules', 'vue', 'normal-modules', 'normal'];
  config.module.rule('css').oneOf('vue-modules').use('postcss-loader').tap((options = {}) => {
    const opt = {
      ...options,
      context: templatePath,
      configFile: resolve(templatePath, 'tsconfig.json'),
    };
    return opt;
  });
};
