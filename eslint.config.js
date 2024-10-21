// @ts-check

import parser from "@typescript-eslint/parser";
import tailwindcss from "eslint-plugin-tailwindcss";

const GLOB_TSX = "**/*.tsx";

/** @type {import('eslint').Linter.Config[]} */
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
      "tailwindcss/no-custom-classname": "error",
      "tailwindcss/no-contradicting-classname": "error",
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
];
