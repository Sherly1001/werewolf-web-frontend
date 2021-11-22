import { createRouter, createWebHashHistory } from "vue-router";
import MainSite from "../views/MainSite.vue";
import LogInSite from "../views/LogInSite.vue";
import SignUpForm from "../components/SignUpForm.vue";
import LoginForm from "../components/LogInForm.vue";
const routes = [
  { path: "/main", name: "MainSite", component: MainSite },
  {
    path: "/",
    component: LogInSite,
    children: [
      { path: "signup", name: "SignUp", component: SignUpForm },
      { path: "login", name: "LogIn", component: LoginForm },
    ],
  },
  { path: "/main:pathMatch(.*)*", redirect: "/main" },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
