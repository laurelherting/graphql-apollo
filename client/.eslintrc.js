module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "env": {
    "browser": true
  },
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
    "react/no-string-refs": "off",
    "react/no-unused-prop-types": "off",
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
    "react/jsx-wrap-multilines": 0,
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ]
  },
  "globals": {
    "fetch": true
  }
};
