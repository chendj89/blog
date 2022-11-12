import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import scss from "@/scss/alias.module.scss";
console.log(scss);
const app = createApp(App);
app.use(router);
app.mount("#app");
