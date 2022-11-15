<script setup lang="ts">
import { RouterView } from "vue-router";
import iconGroup, { type Link } from "./components/tsx/iconGroup";
import Md from "./md/index.md";
const link: Link = {
  name: "github",
  desc: "",
  icon: "https://api.iconify.design/mdi:github.svg",
  url: "https://github.com/yyx990803",
  children: [
    {
      name: "vue3",
      icon: "https://api.iconify.design/logos:vue.svg",
      url: "https://cn.vuejs.org/",
    },
  ],
};
</script>

<template>
  <header>
    <iconGroup :link="link">
      <span>999</span>
    </iconGroup>
    <Md></Md>
  </header>
  <RouterView />
</template>
