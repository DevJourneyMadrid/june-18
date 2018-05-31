module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
    "max-len": ["error", 150],
    "computed-property-spacing": ["error", "always"],
    "no-unused-vars": ["error", { "args": "none" }],
    "no-param-reassign": ["error", { "props": false }],
    "space-in-parens": ["error", "always"],
    "array-bracket-spacing": ["error", "always"],
    "no-plusplus": 0,
    "indent": "off"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}