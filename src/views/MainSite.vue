<template>
  <div class="main-site">
    <SideBar />
    <Chat v-if="chat" :info="info" />
    <Rules v-else />
    <Member />
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import Chat from "../components/Chat.vue";
import Member from "../components/Member.vue";
import Rules from "../components/Rules.vue";
import user from "../services/user.js";
export default {
  components: {
    SideBar,
    Chat,
    Member,
    Rules,
  },
  data() {
    return {
      token: user.getCookie("token"),
      chat: true,
      info: {},
    };
  },
  mounted() {
    if (!this.$cookies.isKey("token")) {
      this.$router.push({ name: "LogIn" });
    }
    if (this.token) {
      this.$connect(
        `wss://werewolf-web-services.herokuapp.com/ws?token=${this.token}`
      );
    }
    user.getInfo().then((res) => (this.info = res.data));
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
