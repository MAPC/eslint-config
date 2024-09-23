import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import preferArrow from "eslint-plugin-prefer-arrow";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "prefer-arrow": preferArrow,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prefer-arrow/prefer-arrow-functions": [
        "warn",
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
      "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
      "func-style": ["error", "expression", { allowArrowFunctions: true }],
      indent: ["error", 2],
      semi: ["error", "always"],
      "block-scoped-var": "error",
      camelcase: ["warn", { ignoreDestructuring: true }],
      "max-len": ["warn", 160, 2],
      curly: "error",
      "default-case": "error",
      "default-param-last": "error",
      eqeqeq: ["error", "smart"],
    },
  },
];
