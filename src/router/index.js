import { createRouter, createWebHashHistory } from "vue-router";
import MainSite from "../views/MainSite.vue";
import LogInSite from "../views/LogInSite.vue";
const routes = [
  {
    path: "/",
    name: "MainSite",
    component: MainSite,
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
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
