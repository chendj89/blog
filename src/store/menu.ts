import { Link } from "../components/tsx/iconGroup";

const menu: Link[] = [];

/**
 * 自己
 */
const main: Link = {
  name: "chendj89",
  desc: "个人博客",
  icon: "https://avatars.githubusercontent.com/u/105529957?v=4",
  url: "https://github.com/chendj89",
  children: [
    {
      name: "github",
      icon: "https://api.iconify.design/mdi:github.svg",
      url: "https://github.com/chendj89",
    },
    {
      name: "飞行的鱼",
      icon: "https://chendj89.github.io/chendj89/assets/xiaochou.jpg",
      url: "https://chendj89.github.io/chendj89/",
    },
    {
      name: "bolg",
      icon: "https://api.iconify.design/logos:stackblitz-icon.svg",
      url: "https://stackblitz.com/edit/github-dtd4qk",
    },
  ],
};

/**
 * Evan You
 */
const evan: Link = {
  name: "Evan You",
  icon: "https://avatars.githubusercontent.com/u/499550?v=4",
  desc: "一位独立软件开发者，也是开源 JavaScript 框架 Vue.js 的创造者",
  url: "https://evanyou.me/",
  children: [
    {
      name: "github",
      icon: "https://api.iconify.design/mdi:github.svg",
      url: "https://github.com/yyx990803",
    },
    {
      name: "vue3",
      icon: "https://api.iconify.design/logos:vue.svg",
      url: "https://cn.vuejs.org/",
    },
    {
      name: "vite",
      icon: "https://api.iconify.design/logos:vitejs.svg",
      url: "https://cn.vitejs.dev/",
    },
    {
      name: "vue-router",
      icon: "https://api.iconify.design/noto:package.svg",
      url: "https://router.vuejs.org/",
    },
  ],
};
