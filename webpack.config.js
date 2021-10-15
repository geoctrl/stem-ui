const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const IcosetWebpackPlugin = require('@icoset/icoset-webpack-plugin');

module.exports = ({ production }) => {
  return {
    entry: path.resolve(__dirname, '.book/index.js'),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build/'),
      publicPath: '/',
    },
    mode: production
      ? 'production'
      : 'development',
    devtool: production
      ? 'source-map'
      : 'eval-source-map',
    resolve: {
      extensions: [".js"],
      alias: {
        '@doc-helpers': path.resolve(__dirname, '.book/doc-helpers/'),
        'stem-ui/components': path.resolve(__dirname, 'components.js'),
        'stem-ui/hooks': path.resolve(__dirname, 'hooks.js'),
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          resourceQuery: { not: [/raw/] },
          use: [
            'babel-loader',
          ],
        },
        {
          test: /\.mdx$/,
          exclude: /node_modules/,
          use: [
            'ts-loader',
            '@mdx-js/loader',
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['src/styles']
              },
            },
          }],
        },
        {
          test: /\.(svg|jpg)$/,
          type: 'asset/inline',
        },
        {
          resourceQuery: /raw/,
          type: 'asset/source',
        }
      ],
    },

    plugins: [
      new IcosetWebpackPlugin({
        directory: path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-pro/svgs'),
        icons: require('./.book/icons/icons'),
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '.book/index.ejs'),
        env: {
          PRODUCTION: production,
        },
      }),
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(production),
      }),
    ],

    devServer: {
      historyApiFallback: true,
      static: {
        directory: path.resolve(__dirname, '.book'),
      },
    },
  }
};
