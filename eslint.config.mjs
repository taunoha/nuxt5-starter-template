// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import betterTailwindcss from "eslint-plugin-better-tailwindcss";
import { getDefaultAttributes } from "eslint-plugin-better-tailwindcss/defaults";
import prettier from "eslint-plugin-prettier/recommended";

export default withNuxt([
  {
    ignores: [".vscode/*"],
  },
  {
    files: ["**/*.ts", "**/*.vue", "*.mjs"],
    ...prettier,
  },
  {
    files: ["**/*.vue"],
    ...betterTailwindcss.configs["correctness-error"],
    settings: {
      "better-tailwindcss": {
        entryPoint: "app/assets/css/main.css",
        attributes: [
          ...getDefaultAttributes(),
          ["^v-bind:ui$", [{ match: "objectValues" }]],
        ],
      },
    },
  },
  {
    files: ["**/*.vue", "**/*.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    files: ["pages/**/*.vue", "layouts/**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
]);
