import { createRouter, createWebHistory } from 'vue-router'
import SignUpForm from "../components/SignUpForm.vue"
import LoginForm from "../components/LogInForm.vue"
import MainSite from "../views/MainSite.vue";
const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginForm,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUpForm,
  },
  {
    path: "/home",
    name: "Home",
    component: MainSite,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
