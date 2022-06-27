module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    quotes: ["error", "double"],
    "max-len": ["warn", 100],
    "no-underscore-dangle": "off",
    "no-restricted-syntax": "off",
  },
};
