module.exports = api => {
  api.cache(true)

  const presets = [
    '@babel/preset-env'
  ]

  const plugins = [
    ['@babel/plugin-transform-runtime', {
      corejs: 3,
      proposals: true
    }],
    '@babel/plugin-syntax-dynamic-import'
  ]

  return {
    presets,
    plugins
  }
}
