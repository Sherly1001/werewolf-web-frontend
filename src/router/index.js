import { createRouter, createWebHashHistory } from "vue-router";
import MainSite from "../views/MainSite.vue";
import LogInSite from "../views/LogInSite.vue";
import Chat from "../components/Chat.vue";
import Rules from "../components/Rules.vue";
import GameRoom from "../components/GameRoom.vue";
const routes = [
  {
    path: "/",
    name: "MainSite",
    component: MainSite,
    children: [
      { path: "rooms/lobby", name: "Chat", component: Chat },
      { path: "rooms/rules", name: "Rules", component: Rules },
      { path: "games/:id", name: "Game Room", component: GameRoom },
    ],
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogInSite,
    props: { signup: false },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: LogInSite,
    props: { signup: true },
  },
  { path: "/:pathMatch(.*)*", redirect: "/rooms/rules" },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
