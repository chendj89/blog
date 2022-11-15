import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/scss/app.scss";
import scss from "@/scss/alias.module.scss";
import HelloWorld from "./components/HelloWorld.vue";
const app = createApp(App);
app.use(router);
app.component("HelloWorld", HelloWorld);
app.mount("#app");
