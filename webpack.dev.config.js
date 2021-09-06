const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin')
const internalIp = require('internal-ip')

module.exports = env => {
  const { devServer } = require(`./env/${env}`)

  return {
    devServer: {
      host: '0.0.0.0',
      port: devServer.port,

      historyApiFallback: {
        index: '/',
        disableDotRule: true
      }
    },

    stats: 'errors-warnings',

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
