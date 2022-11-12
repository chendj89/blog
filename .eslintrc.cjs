/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
// 保存没有按照 eslint 的规则修复
// https://segmentfault.com/a/1190000039880312?utm_source=sf-similar-article
module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
};
