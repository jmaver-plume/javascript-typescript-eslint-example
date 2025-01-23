const js = require("@eslint/js");
const ts = require("typescript-eslint");
const prettier = require("eslint-config-prettier");
const simpleImportSort = require("eslint-plugin-simple-import-sort");

const jsConfigs = [
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "commonjs",
    },
  },
];

const tsConfigs = [
  js.configs.recommended,
  ...ts.configs.strict,
  ...ts.configs.stylistic,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  prettier,
];

module.exports = {
  jsConfigs,
  tsConfigs,
};
