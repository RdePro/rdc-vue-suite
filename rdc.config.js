module.exports = {
  framework: 'vue',
  docs: {
    url: 'https://rdepro.github.io/rdc-vue-starter/',
  },
  render: {},
  mappings: [
    {
      from: 'app',
      to: 'src',
    },
  ],
  docker: {
    tag: 'rdebase/rdc-vue-suite:0.0.1-beta.0',
    ports: [
      '8080:8080',
    ],
  },
  lint: {
    ext: ['.ts', '.tsx', '.vue']
  }
};
