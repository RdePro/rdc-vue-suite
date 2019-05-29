module.exports = {
  root: true,
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': [
      'error',
      {
        ignore: ['@/'],
      },
    ],
    'import/extensions': [0],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
