import "./assets/main.css";
import "@mdi/font/css/materialdesignicons.css";
import "vue-toastification/dist/index.css";

import router from "./router";
import Toast from "vue-toastification";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(Toast);

app.mount("#app");
