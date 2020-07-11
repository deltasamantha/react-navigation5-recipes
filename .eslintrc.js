module.exports = {
  parser: "@typescript-eslint/parser",
  root: true,
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended', 'eslint:recommended'],
  quotes: "double",
  plugins: ["@typescript-eslint", 'react-hooks'],
  rules: {
    "@typescript-eslint/rule-name": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
