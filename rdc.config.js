module.exports = {
  framework: 'vue',
  docs: {
    title: 'VUE Suite',
    url: 'https://rdepro.github.io/rdc-vue-suite/',
  },
  render: {
    includes: ['.json'],
    mock: {
      lib: 'test',
    },
  },
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
