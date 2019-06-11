const path = require('path');

const outputDir = path.resolve(__dirname, './dist');
module.exports = {
  outputDir,
  runtimeCompiler: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/mixins/index.scss'),
      ],
    },
  },
  chainWebpack: (config) => {
    const { alias } = config.resolve;
    alias.set('@', path.resolve(__dirname, './src/'));
    // updateContext(config);
  },
};
