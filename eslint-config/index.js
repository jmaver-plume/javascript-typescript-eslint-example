const js = require("@eslint/js");
const ts = require("typescript-eslint");
const prettier = require("eslint-config-prettier");
const simpleImportSort = require("eslint-plugin-simple-import-sort");
const globals = require("globals");
const mochaPlugin = require("eslint-plugin-mocha");

const jsConfigs = [
  // Recommended typescript-eslint configs
  js.configs.recommended,

  // Mocha specific eslint rules
  mochaPlugin.configs.flat.recommended,
  {
    rules: {
      "mocha/no-exclusive-tests": "error",
    },
  },

  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "commonjs",
      globals: {
        ...globals.mocha,
        ...globals.chai,
      },
    },
  },

  // Turn off rules that conflict with prettier
  prettier,
];

const tsConfigs = [
  // Recommended typescript-eslint configs
  // For more information, see https://typescript-eslint.io/getting-started#additional-configs
  js.configs.recommended,
  ...ts.configs.strict,
  ...ts.configs.stylistic,

  // Plugin to automatically sort imports
  // For more information, see https://github.com/lydell/eslint-plugin-simple-import-sort?tab=readme-ov-file#usage
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },

  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "commonjs",
      globals: {
        ...globals.mocha,
        ...globals.chai,
      },
    },
  },

  // Mocha specific eslint rules
  mochaPlugin.configs.flat.recommended,
  {
    rules: {
      "mocha/no-exclusive-tests": "error",
    },
  },

  // Turn off rules that conflict with prettier
  prettier,
];

// @ts-check
import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

// Configs retrieved by running nest new app
const nestjsConfigs = tseslint.config(
  {
    ignores: ["eslint.config.mjs"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: "module",
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
    },
  },
);

// review configs by running: npx eslint --print-config src/main.ts
module.exports = {
  jsConfigs,
  tsConfigs,
  nestjsConfigs,
};
