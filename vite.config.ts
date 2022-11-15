import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Markdown from "vite-plugin-vue-markdown";
import viteCode from "./rollup/index";
import { getHighlighter } from "shiki";
let highlighter: any = null;

// https://vitejs.dev/config/
export default defineConfig(async () => {
  let highlighter = await getHighlighter({
    theme: "vitesse-light",
  });
  return {
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      vueJsx(),
      viteCode(),
      Markdown({
        markdownItOptions: {
          html: true,
          highlight: (code, lang) => {
            return highlighter.codeToHtml(code.trim(), { lang });
          },
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
  };
});
