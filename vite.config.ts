import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Markdown from "vite-plugin-vue-markdown";
import viteCode from "./rollup/index";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    viteCode(),
    Markdown({
      markdownItSetup(md) {
        md.use(require("markdown-it-anchor"));
        md.use(require("markdown-it-prism"));
      },
      wrapperClasses: "md",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/scss/var.module.scss" as *;
        @use "@/scss/mixin.scss" as *;
        `,
      },
    },
  },
});
