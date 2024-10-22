// @ts-check

import pluginQuery from "@tanstack/eslint-plugin-query";
import parser from "@typescript-eslint/parser";
import tailwindcss from "eslint-plugin-tailwindcss";

const GLOB_TSX = "**/*.tsx";

/** @satisfies {import('eslint').Linter.Config[]} */
export default [
  {
    files: [GLOB_TSX],
    plugins: { tailwindcss },
    languageOptions: { parser },
    rules: {
      "tailwindcss/classnames-order": "error",
      "tailwindcss/enforces-negative-arbitrary-values": "error",
      "tailwindcss/enforces-shorthand": "error",
      "tailwindcss/no-arbitrary-value": "off",
      "tailwindcss/no-contradicting-classname": "error",
      "tailwindcss/no-custom-classname": "error",
      "tailwindcss/no-unnecessary-arbitrary-value": "error",
    },
    settings: {
      tailwindcss: {
        callees: ["clsx"],
        classRegex: "^className$",
        config: "tailwind.config.ts",
        removeDuplicates: true,
      },
    },
  },
  {
    files: [GLOB_TSX],
    plugins: {
      "@tanstack/query": pluginQuery,
    },
    rules: {
      "@tanstack/query/exhaustive-deps": "error",
      "@tanstack/query/infinite-query-property-order": "error",
      "@tanstack/query/no-rest-destructuring": "error",
      "@tanstack/query/no-unstable-deps": "error",
      "@tanstack/query/stable-query-client": "error",
    },
  },
];
