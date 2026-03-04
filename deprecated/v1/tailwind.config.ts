import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}"],
  theme: {
    // Source:
    // - Park UI (https://github.com/cschroeter/park-ui)
    extend: {
      transitionTimingFunction: {
        "emphasized-in": "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
        "emphasized-out": "cubic-bezier(0.3, 0.0, 0.8, 0.15)",
      },
      keyframes: {
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: ({ theme }) => ({
        "drawer-in-right": `slide-in-right 400ms ${theme(
          "transitionTimingFunction.emphasized-in",
        )}`,
        "drawer-out-right": `slide-out-right 200ms ${theme(
          "transitionTimingFunction.emphasized-out",
        )}`,
      }),
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".grid-drawer": {
          "grid-template-columns": "1fr",
          "grid-template-rows": "auto 1fr",
          "grid-template-areas": '"header" "body"',
        },
        ".grid-drawer-header": {
          "grid-template-columns": "1fr auto",
          "grid-template-rows": "auto auto",
          "grid-template-areas": '"title close" "description description"',
        },
        // Source:
        // - https://developer.mozilla.org/en-US/docs/Web/CSS/word-break#break-word
        // - https://tailwindcss.com/docs/word-break
        ".break-anywhere": {
          "overflow-wrap": "anywhere",
          "word-break": "normal",
        },
      });
    }),
  ],
};

export default config;
