import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/scss/app.scss";
import scss from "@/scss/alias.module.scss";
console.log(scss);
import HelloWorld from "./components/HelloWorld.vue";
const app = createApp(App);
app.use(router);
app.component("HelloWorld", HelloWorld);
app.mount("#app");
/**
 * 颜色混合
 * @param c1 #ffffff
 * @param c2 #ff5c00
 * @param ratio 0.0~1.0
 * @returns 新的颜色
 */
const colourBlend = (c1: string, c2: string, ratio: number) => {
  ratio = Math.max(Math.min(Number(ratio), 1), 0);
  let r1 = parseInt(c1.substring(1, 3), 16);
  let g1 = parseInt(c1.substring(3, 5), 16);
  let b1 = parseInt(c1.substring(5, 7), 16);
  let r2 = parseInt(c2.substring(1, 3), 16);
  let g2 = parseInt(c2.substring(3, 5), 16);
  let b2 = parseInt(c2.substring(5, 7), 16);
  let r: string | number = Math.round(r1 * (1 - ratio) + r2 * ratio);
  let g: string | number = Math.round(g1 * (1 - ratio) + g2 * ratio);
  let b: string | number = Math.round(b1 * (1 - ratio) + b2 * ratio);
  r = ("0" + (r || 0).toString(16)).slice(-2);
  g = ("0" + (g || 0).toString(16)).slice(-2);
  b = ("0" + (b || 0).toString(16)).slice(-2);
  return "#" + r + g + b;
};

/**
 * r 红
 * g 绿
 * b 蓝
 * y 灰度
 * w 是近黑还是白色
 */
function getColor(c2) {
  let r = parseInt(c2.substring(1, 3), 16);
  let g = parseInt(c2.substring(3, 5), 16);
  let b = parseInt(c2.substring(5, 7), 16);
  let y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  let w = y <= 128 ? "black " : "white";
  return {
    r,
    g,
    b,
    y,
    w,
  };
}

/**
 * 创建九阶主题
 * @param theme 颜色
 */
const createTheme = (theme: string) => {
  let $theme: string = theme || "#6f42c1";
  let list = [];
  for (let i = 0; i < 9; i++) {
    if (i < 4) {
      list.push(colourBlend($theme, "#ffffff", (4 - i) * 0.2));
    } else if (i == 4) {
      list.push($theme);
    } else {
      list.push(colourBlend($theme, "#000000", (i - 4) * 0.2));
    }
  }
  return list;
};
