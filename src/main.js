import "./assets/main.css";
import "@mdi/font/css/materialdesignicons.css";
import "vue-toastification/dist/index.css";

import router from "./router";
import Toast from "vue-toastification";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// Toast Configuration
const toastOptions = {
  position: "bottom-right",
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
};

app.use(Toast, toastOptions);
app.use(router);

app.mount("#app");
