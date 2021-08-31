module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'space-before-function-paren': 0
    // 'no-console': process.env.NODE_ENV === 'development' ? 0 : 2,
    // 'no-debugger': process.env.NODE_ENV === 'development' ? 0 : 2
  }
}
