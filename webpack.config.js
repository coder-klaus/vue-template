const path = require('path')
const { merge } = require('webpack-merge')
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devConfig = require('./webpack.dev.config.js')
const prodConfig = require('./webpack.prod.config.js')

module.exports = ({ env }, { mode }) => {
  const isDev = env === 'dev'

  const commonConfig = {
    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js'
    },

    module: {
      rules: [
        {
          test: /\.css$/,

          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader'
          ]
        },

        {
          test: /\.scss$/,

          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        }
      ]
    },

    resolve: {
      extensions: ['.vue', '.js', '.json'],

      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
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
      })
    ]
  }

  return mode === 'development' ? merge(commonConfig, devConfig(env)) : merge(commonConfig, prodConfig)
}