module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/airbnb"
  ],
  rules: {
    "arrow-body-style": ["error", "always"],
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "never"
    }],
    "global-require": 0,
    "import/no-unresolved": 0,
    "no-param-reassign": 0,
    "no-shadow": 0,
    "no-use-before-define": 0,
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off", // allow debugger during development
    "no-multiple-empty-lines": ["error", {"max": 2, "maxEOF": 1}],
    "space-before-function-paren": ["error", "never"],
    "max-len": ["error", 800, 2],
    "no-useless-escape": 0,
    "keyword-spacing": ["error", {"overrides": {
      "if": {"after": false},
      "for": {"after": false},
      "while": {"after": false},
      "switch": {"after": false},
      "catch": {"after": false}
    }}],
    "padded-blocks": ["error", {"switches": "never"}],
    "comma-spacing": ["warn", {"before": false, "after": true}],
    "no-unused-vars": ["error", {"args": "none"}],
    "object-curly-spacing": ["error", "never", {"objectsInObjects": false}],
    "import/extensions": ["error", "never"],
    "import/no-extraneous-dependencies": 0,
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
    "consistent-return": 0,
    "linebreak-style": 0
  }
}
