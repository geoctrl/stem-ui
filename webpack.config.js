const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const IcosetWebpackPlugin = require('@icoset/icoset-webpack-plugin');

module.exports = ({ production }) => {
  return {
    entry: path.resolve(__dirname, '.book/index.tsx'),
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
      alias: {
        '@components': path.resolve(__dirname, 'src/components/'),
        '@docs': path.resolve(__dirname, '.book/doc-helpers/'),
        '@hooks': path.resolve(__dirname, 'src/hooks/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          exclude: /node_modules/,
          use: [
            'ts-loader',
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
        directory: path.resolve(__dirname, '.book/icons'),
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
