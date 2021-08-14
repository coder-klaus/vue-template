module.exports = env => {
  const { devServer } = require(`./env/${env}`)

  return {
    devServer: {
      hot: true,
      host: '0.0.0.0',
      quiet: true,
      port: devServer.port
    },

    devtool: 'cheap-module-source-map'
  }
}