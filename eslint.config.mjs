import globals from "globals";
import pluginJs from "@eslint/js";
import typeScriptEsLint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import configPrettier from "eslint-config-prettier/flat";
import pluginPrettier from "eslint-plugin-prettier/recommended";

const reactVersion = "detect";
const filePattern = ["**/*.{js,mjs,cjs,ts,jsx,tsx}"];

const ignorePatterns = [
  "**/node_modules/**",
  "**/dist/**",
  "**/build/**",
  "**/coverage/**",
];

export default [
  { files: filePattern },
  { ignores: ignorePatterns },
  { settings: { react: { version: reactVersion } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...typeScriptEsLint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // Dodajemo custom pravila
    rules: {
      "no-unused-vars": "warn", // Globalno za JavaScript
      "@typescript-eslint/no-unused-vars": "warn", // Za TypeScript
      "react/react-in-jsx-scope": "off", // Neophodno za React 17+
      "react/jsx-uses-react": "off", // Neophodno za React 17+
      "prettier/prettier": "warn", // Prettier greske kao upozorenja
    },
  },
  pluginPrettier,
  configPrettier,
];
