import js from "@eslint/js";
import tseslint, { parser as tsParser, configs as tsConfigs } from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc";

import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

// import importEslint from "eslint-plugin-import";

// import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
// import queryEslint from "@tanstack/eslint-plugin-query";

const compat = new FlatCompat({
  // baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = tseslint.config(
  js.configs.recommended,
  tsConfigs.recommended,
  // ...queryEslint.configs["flat/recommended"],
  ...compat.config({ extends: ["next", "next/core-web-vitals", "next/typescript"] }),
  // {
  //   rules: {
  //     ...importEslint.flatConfigs.recommended.rules,
  //   },
  // },
  {
    ignores: ["**/out", "**/dist", "**/node_modules", "**/scripts"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    // plugins: {
    //   import: importEslint,
    // },
    rules: {
      "no-unused-vars": "off",
      "no-nested-ternary": 0,
      "no-param-reassign": [
        "error",
        {
          props: false,
        },
      ],
      "no-unused-expressions": "off",
      "no-prototype-builtins": "off",
      // "import/no-dynamic-require": "warn",
      // "import/no-nodejs-modules": "warn",
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: true,
        },
      ],
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      // react,
      "react-hooks": reactHooks,
    },
    rules: {
      // ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // "react/jsx-filename-extension": [
      //   2,
      //   {
      //     extensions: [".js", ".jsx", ".ts", ".tsx"],
      //   },
      // ],
      "react/jsx-one-expression-per-line": 0,
      "react/prefer-stateless-function": 0,
      "react/display-name": "off",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: ["function-declaration", "arrow-function"],
        },
      ],
      "react/jsx-props-no-spreading": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off", // React 17 이상부터는 필요 없음
      "jsx-a11y/href-no-hash": [0],
      "react/no-deprecated": "error",
      "react/no-unknown-property": "off",
      "react/no-unsafe": [
        "error",
        {
          checkAliases: true,
        },
      ],
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        // project: path.resolve(__dirname, "./tsconfig.json"),
      },
    },
    rules: {
      // ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-require-imports": "off",
      // "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  {
    plugins: {
      prettier,
    },
    languageOptions: {
      globals: {},
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
        {
          usePrettierrc: true,
        },
      ],
      "prefer-const": "error",
      "array-callback-return": "off",
    },
  },
  prettierConfig,
);

export default eslintConfig;
