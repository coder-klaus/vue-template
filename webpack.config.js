const path = require('path')
const { merge } = require('webpack-merge')
const { VueLoaderPlugin } = require('vue-loader')
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devConfig = require('./webpack.dev.config.js')
const prodConfig = require('./webpack.prod.config.js')

const { version } = require('./package.json')

module.exports = ({ env = 'dev' }, { mode = 'development' }) => {
  const isDev = mode === 'development'

  process.env.NODE_ENV = mode

  const { runtimeENV } = require(`./env/${env}`)

  const commonConfig = {
    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      chunkFilename: 'js/[id].chunk.js',
      publicPath: '/'
    },

    module: {
      rules: [
        {
          test: /\.css$/,

          oneOf: [
            {
              resourceQuery: /module/,

              use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    modules: {
                      localIdentName: '[local]_[hash:base64:6]'
                    }
                  }
                },
                'postcss-loader'
              ]
            },

            {
              use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader'
              ]
            }
          ]
        },

        {
          test: /\.scss$/,

          oneOf: [
            {
              resourceQuery: /module/,

              use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    modules: {
                      localIdentName: '[local]_[hash:base64:6]'
                    }
                  }
                },
                'postcss-loader',
                'sass-loader'
              ]
            },

            {
              use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader'
              ]
            }
          ]
        },

        {
          test: /\.js$/,
          exclude: [
            /node_modules/
          ],
          use: 'babel-loader'
        },

        {
          test: /\.ts$/,
          use: 'ts-loader'
        },

        {
          test: /\.vue$/,
          use: 'vue-loader'
        },

        {
          test: /\.(png|jpe?g|gif|svg)$/,
          type: 'asset',

          generator: {
            filename: 'imgs/[name].[hash:6][ext]'
          },

          parser: {
            dataUrlCondition: {
              maxSize: 4096
            }
          }
        },

        {
          test: /\.(eot|ttf|woff2?)$/,
          type: 'asset/resource',

          generator: {
            filename: 'fonts/[name].[hash:6][ext]'
          }
        }
      ]
    },

    resolve: {
      extensions: ['.vue', '.js', '.ts', '.json'],

      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',

        meta: {
          'x-version': version
        }
      }),

      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public',

            globOptions: {
              ignore: [
                '**/index.html',
                '**/.DS_Store'
              ]
            }
          }
        ]
      }),

      new VueLoaderPlugin(),

      new ESLintPlugin({
        extensions: ['js', 'vue']
      }),

      new StylelintPlugin({
        files: ['src/**/*.{vue,html,css,scss}']
      }),

      new DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        ENV: JSON.stringify(runtimeENV),
        VERSION: JSON.stringify(version)
      })
    ]
  }

  return mode === 'development' ? merge(commonConfig, devConfig(env)) : merge(commonConfig, prodConfig)
}
