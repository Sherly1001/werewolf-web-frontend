<template>
  <div class="main-site">
    <SideBar />
    <Chat />
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import Chat from "../components/Chat.vue";
export default {
  components: {
    SideBar,
    Chat,
  },
  mounted() {
    if (!this.$cookies.isKey("token")) {
      this.$router.push({ name: "LogIn" });
    }
  },
};
</script>

<style>
.main-site {
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex: 1 1 auto;
  align-items: stretch;
  height: 100%;
}
</style>
