const path = require('path');
const fs = require('fs/promises');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const IcosetWebpackPlugin = require('@icoset/icoset-webpack-plugin');

module.exports = ({ production }) => {
  return new Promise((resolve) => {
    fs.readFile('./src/styles/entry.scss', { encoding: 'utf8' }).then(
      (globalScss) =>
        resolve({
          entry: path.resolve(__dirname, 'src/index.tsx'),
          output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public'),
            publicPath: '/',
          },
          mode: production ? 'production' : 'development',
          devtool: production ? 'source-map' : 'inline-source-map',
          resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
              'stem-ui/components': path.resolve(
                __dirname,
                'library/components/index.ts'
              ),
              'stem-ui/extras': path.resolve(
                __dirname,
                'library/extras/index.ts'
              ),
              // 'stem-ui/hooks': path.resolve(__dirname, 'hooks.js'),
            },
          },
          module: {
            rules: [
              {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
              {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              },
              {
                test: /\.styles\.scss$/,
                exclude: /node_modules/,
                use: [
                  'kremling-loader',
                  {
                    loader: 'sass-loader',
                    options: {
                      additionalData: globalScss,
                      sassOptions: {
                        includePaths: ['library/styles', 'src/styles'],
                      },
                    },
                  },
                ],
              },
              {
                test: /main\.scss$/,
                exclude: /node_modules/,
                use: [
                  'style-loader',
                  'css-loader',
                  {
                    loader: 'sass-loader',
                    options: {
                      sassOptions: {
                        includePaths: ['library/styles', 'src/styles'],
                      },
                    },
                  },
                ],
              },
              {
                test: /\.(svg|jpg)$/,
                type: 'asset/inline',
              },
              {
                resourceQuery: /raw/,
                type: 'asset/source',
              },
            ],
          },

          plugins: [
            new IcosetWebpackPlugin({
              directory: path.resolve(
                __dirname,
                'node_modules/@fortawesome/fontawesome-pro/svgs'
              ),
              icons: require('./src/icons'),
            }),
            new HtmlWebpackPlugin({
              template: path.resolve(__dirname, 'src/index.ejs'),
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
              directory: path.resolve(__dirname, 'public'),
            },
          },
        })
    );
  });
};
