<script setup lang="ts">
import {provide} from "vue";
import { RouterView } from "vue-router";
import scss from "@/scss/alias.module.scss";
import iconGroup, { type Link } from "./components/tsx/iconGroup";
import Md from "./md/npm.md";
provide('scss',scss);
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
    <Md></Md>
    <iconGroup :link="link">
      <span>999</span>
    </iconGroup>
  </header>
  <RouterView />
</template>
