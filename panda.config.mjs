import { defineConfig } from "@pandacss/dev";
import { pandaThemeConfig } from "@/styles/theme.panda";

export default defineConfig({
  prefix: "panda",

  layers: {
    base: "panda_base",
    utilities: "panda_utilities",
    recipes: "panda_recipes",
    reset: "panda_reset",
    tokens: "panda_tokens",
  },

  preflight: true,

  strictTokens: false,

  include: ["./src/**/*.{ts,tsx}"],

  exclude: [],

  theme: { extend: pandaThemeConfig },

  importMap: "@styled-system",

  outdir: "styled-system",
});
