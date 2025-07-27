module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // 你可以根据项目需求自定义规则
    'no-console': 'warn',
    'no-debugger': 'warn'
  }
}
