const path = require('path');

module.exports = {
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', {
      'shippedProposals': true
    }]
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    ['module:kremling-babel-plugin', {
      namespace: 'sui',
      sassOptions: {
        includePaths: [path.resolve(__dirname, 'src/styles')],
        additionalData: `@import "variables/color";@import "global/breakpoints";`
      }
    }],
    ['prismjs', {
      languages: ['javascript', 'jsx'],
      css: false,
    }],
  ]
}
