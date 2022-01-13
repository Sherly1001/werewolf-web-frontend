import { createRouter, createWebHashHistory } from "vue-router";
import MainSite from "../views/MainSite.vue";
import LogInSite from "../views/LogInSite.vue";
import Chat from "../components/Chat.vue";
const routes = [
  {
    path: "/",
    name: "MainSite",
    component: MainSite,
    children: [
      { path: "rooms/:name", name: "Chat", component: Chat },
      { path: "games/:id", name: "Game Room", component: Chat },
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
