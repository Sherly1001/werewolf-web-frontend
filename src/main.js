import { createApp } from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { install as DiscordMessageComponents } from "@discord-message-components/vue";
import VueCookies from "vue3-cookies";
import VueNativeSock from "vue-native-websocket-vue3";
import "@discord-message-components/vue/dist/style.css";
import user from "./services/user.js";
import dotenv from "dotenv";
import mitt from 'mitt';

dotenv.config();
const emitter = mitt();
const token = user.getCookie("token");

library.add(fas);
const app = createApp(App)
  .use(router)
  .use(Vuex)
  .use(VueCookies)
  .use(DiscordMessageComponents)
  .use(
    VueNativeSock,
    `wss://werewolf-web-services.herokuapp.com/ws?token=${token}`,
    {
      reconnection: true,
      reconnectionAttempts: 100, 
      reconnectionDelay: 300,
      connectManually: true,
    }
  )
  .component("fa", FontAwesomeIcon);
  app.config.globalProperties.emitter = emitter;
  app.mount("#app");
