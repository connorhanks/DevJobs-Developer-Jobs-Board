import { createApp } from "vue";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import AccountIcon from "vue-material-design-icons/Account.vue";
// Add more icons as needed

export function registerIcons(app) {
  app.component("menu-icon", MenuIcon);
  app.component("account-icon", AccountIcon);
  // Register more icons here
}
