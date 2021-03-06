module.exports = {
  "root": true,
  "plugins": [
    "riot"
  ],
  // "settings": {
  //   "html/indent": "+2"
  // },
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "node": true
  },
  "globals": {
    "riot": false
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "comma-dangle": ["error", "always-multiline"],
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "valid-jsdoc": [
      "warn",
      {
        "preferType": {
          "array": "Array",
          "Boolean": "boolean",
          "function": "Function",
          "Number": "number",
          "object": "Object",
          "String": "string"
        }
      }
    ],
    // Es6
    "arrow-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "no-duplicate-imports": [
      "error",
      {
        "includeExports": true
      }
    ],
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "prefer-const": "error",
    "prefer-rest-params": "warn",
    "prefer-template": "warn",
    "rest-spread-spacing": [
      "warn",
      "never"
    ],
    "template-curly-spacing": [
      "warn",
      "never"
    ],
    "sort-imports": "warn",
    "no-var": "error"
  }
}
