module.exports = {
    "plugins": [
        "prettier"
    ],
    "extends": [
        "airbnb-base",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": ["error", { "singleQuote": true, "trailingComma": "es5" }],
    }
};
