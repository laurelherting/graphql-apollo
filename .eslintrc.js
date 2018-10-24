module.exports = {
  "extends": [
    "airbnb",
    "prettier",
  ],
  "parserOptions": {
    "ecmaVersion": 6
  },
  "plugins": [
    "prettier"
  ],
  "extends": [
    "airbnb-base",
    "prettier"
  ],
  "rules": {
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": "off",
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
      "singleQuote": true,
        "parser": "flow",
        "trailingComma": "es5",
      }
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
  },
  "globals": {
    "fetch": true
  }
};
