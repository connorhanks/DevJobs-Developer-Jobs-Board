import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { registerIcons } from "./plugins/icons";
import "vue-material-design-icons/styles.css";

const app = createApp(App);

app.use(createPinia());
registerIcons(app);

app.mount("#app");
