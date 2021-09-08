const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all'
    },

    runtimeChunk: 'single',

    minimizer: [
      new TerserWebpackPlugin({
        extractComments: false
      })
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:6].css'
    }),

    new CssMinimizerWebpackPlugin()
  ]
}
