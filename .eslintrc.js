module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: ["off", "single"],
    "class-methods-use-this": "off",
    "arrow-body-style": "off",
    "no-use-before-define": ["error", { variables: false }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    // "max-depth": ["error", 2],
    // "max-lines-per-function": ["error", 10],
    // "max-params": ["error", 3],
  },
  plugins: ["import", "react"],
};
