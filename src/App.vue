<script setup lang="ts">
import { RouterView } from "vue-router";
import iconGroup, { type Link } from "./components/tsx/iconGroup";
const link: Link = {
  name: "github",
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
  </header>
  <RouterView />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  padding: 30px;
  background-color: #f1f1f1;
}
.iconGroup {
  &-icon {
    @include btn();
  }
}
</style>
