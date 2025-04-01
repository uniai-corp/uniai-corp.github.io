import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  {
    ignores: ["**/out", "**/dist", "**/node_modules", "**/scripts"],
  },
  ...compat.extends("eslint:recommended", "next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      prettier,
    },

    languageOptions: {
      globals: {},
      ecmaVersion: "latest",
      sourceType: "script",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      "import/prefer-default-export": "off",

      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: true,
        },
      ],

      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
        {
          usePrettierrc: true,
        },
      ],

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
      "prefer-const": "error",
      "array-callback-return": "off",

      "react/jsx-filename-extension": [
        2,
        {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],

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
      "jsx-a11y/href-no-hash": [0],
      "react/no-deprecated": "error",

      "react/no-unsafe": [
        "error",
        {
          checkAliases: true,
        },
      ],

      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  prettierConfig,
];

export default eslintConfig;
