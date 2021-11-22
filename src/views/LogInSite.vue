<template>
  <div class="login-site">
     <router-view/>
  </div>
 
</template>

<script>
export default {
  mounted(){
    if(this.$cookies.isKey("token")){
      this.$router.push({ name: "MainSite" });
    }
  }
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
