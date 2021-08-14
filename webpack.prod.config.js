const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
      filename: 'css/[name].[hash:6].css'
    })
  ]
}