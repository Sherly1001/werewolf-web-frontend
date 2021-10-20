<template>
  <div class="login-site">
      <LogInForm />
  </div>
</template>

<script>
import LogInForm from "../components/LogInForm.vue"
export default {
    components:{
        LogInForm,
    }
}
</script>

<style>
.login-site {
    background-image: url('../../public/background-pattern.png');
    height: 100vh;
    width: 100%;
    background-color: #36393a;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>