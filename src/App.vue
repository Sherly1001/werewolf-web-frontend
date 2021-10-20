<template>
  <div class="container">
    <MainSite v-if="login"/>
    <LogInSite />
  </div>
</template>
<script>
import MainSite from "./views/MainSite.vue";
import LogInSite from "./views/LogInSite.vue"
export default {
  components:{
    MainSite, LogInSite
  },
  data(){
    return{
      login: false
    }
  },
  setup() {
    
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
body{
  font-family:'Roboto', sans-serif;
  margin: 0;
}
.container {
  width: 100%;
}
#app{
  height: 100%;
  width: 100%;
}
</style>
