<template>
  <div class="container">
    <MainSite />
  </div>
</template>
<script>
import MainSite from "./views/MainSite.vue";
export default {
  components:{
    MainSite,
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
