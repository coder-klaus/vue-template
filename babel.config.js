module.exports = api => {
  api.cache(true)

  const presets = [
    '@babel/preset-env'
  ]

  const plugins = [
    ['@babel/plugin-transform-runtime', {
      corejs: 3,
      proposals: true
    }]
  ]

  return {
    presets,
    plugins
  }
}
