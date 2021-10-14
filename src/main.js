import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { install as DiscordMessageComponents } from "@discord-message-components/vue";
import "@discord-message-components/vue/dist/style.css";
library.add(fas);
createApp(App)
  .use(router).use(DiscordMessageComponents).component("fa", FontAwesomeIcon)
  .mount("#app");
