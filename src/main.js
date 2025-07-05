import "./assets/main.css";
import router from "./router";
import { createApp } from "vue";
import { createPinia } from "pinia";
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import App from "./App.vue";
import { setConfig, frappeRequest } from "frappe-ui";
import { session } from "./data/session";
import { initSocket } from "./SocketIo";
import { Socket } from "socket.io-client";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(Vue3Toastify);
app.use(pinia);
setConfig("resourceFetcher", frappeRequest);
  // For production mode, initialize socket synchronously
  const socket = initSocket();
  app.config.globalProperties.$socket = socket;
  app.mount("#app");

