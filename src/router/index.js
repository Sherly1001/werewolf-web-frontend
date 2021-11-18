import { createRouter, createWebHistory } from "vue-router";
import MainSite from "../views/MainSite.vue";
import LogInSite from "../views/LogInSite.vue";
import SignUpForm from "../components/SignUpForm.vue";
const routes = [
  { path: "/", component: MainSite },
  { path: "/sign-up", name: "SignUp", component: SignUpForm },
  { path: "/login", component: LogInSite },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
