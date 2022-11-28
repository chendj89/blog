<script setup lang="ts">
import {provide,ref} from "vue";
import { RouterView } from "vue-router";
import scss from "@/scss/alias.module.scss";
import iconGroup, { type Link } from "./components/tsx/iconGroup";
import Md from "./md/npm.md";
let scssRef=ref(scss)
provide('scss',scssRef);
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
let index=0;
const changeTheme=()=>{
  let theme=["#ff5c00","red","blue","green"];
  index++;
  index= index%theme.length
  scssRef.value.theme=theme[index];
};
</script>

<template>
  <RouterView />
</template>
