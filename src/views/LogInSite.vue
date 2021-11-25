<template>
  <div class="login-site">
    <SignUpForm v-if="prop"/>
    <LoginForm v-if="!prop"/>
    {{ prop }}
  </div>
</template>

<script>
import SignUpForm from "../components/SignUpForm.vue";
import LoginForm from "../components/LogInForm.vue";
export default {
  props: {
    prop: Boolean
  },
  components: {
    LoginForm,
    SignUpForm,
  },
  mounted() {
    if (this.$cookies.isKey("token")) {
      this.$router.push({ name: "MainSite" });
    }
  },
};
</script>

<style>
.login-site {
  background-image: url("../../public/background-pattern.png");
  height: 100vh;
  width: 100%;
  background-color: #36393a;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
