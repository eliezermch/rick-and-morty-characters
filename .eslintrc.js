module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    indent: [2, 2],
    commonjs: "off",
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "no-async-promise-executor": "off",
    "react/jsx-uses-react": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "object-curly-spacing": [2, "always"],
    "no-undef": 2,
    "no-var": 2,
    "no-const-assign": 2,
    "no-unused-vars": 2,
    "prefer-const": 2,
    "no-case-declarations": "off",
    "quote-props": 0,
    "operator-linebreak": [
      2,
      "before",
      {
        overrides: {
          "?": "before",
          ":": "before",
          "=": "after",
          "&&": "after",
        },
      },
    ],
    "require-jsdoc": 0,
    "linebreak-style": 0,
    "comma-dangle": [
      "error",
      {
        objects: "only-multiline",
        arrays: "only-multiline",
      },
    ],
  },
};
