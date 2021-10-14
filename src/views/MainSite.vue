<template>
  <div class="main-site">
      <SideBar/>
      <Chat/>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import Chat from "../components/Chat.vue";
export default {
    components:{
        SideBar, Chat
},
}
</script>

<style>
.main-site {
    display: flex;
    justify-content: flex-start;
    flex: 1 1 auto;
    align-items: stretch;
    height: 100%;
}
</style>