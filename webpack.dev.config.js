const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin')
const internalIp = require('internal-ip')

module.exports = env => {
  const { devServer } = require(`./env/${env}`)

  return {
    devServer: {
      quiet: true,
      hot: true,
      stats: 'errors-warnings',
      host: '0.0.0.0',
      port: devServer.port,

      // tmp
      historyApiFallback: {
        index: '/',
        disableDotRule: true
      }
    },

    devtool: 'cheap-module-source-map',

    plugins: [
      new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: [
            `You application is running here http://localhost:${devServer.port}`,
            `You application is running here http://${internalIp.v4.sync()}:${devServer.port}`
          ]
        }
      })
    ]
  }
}
