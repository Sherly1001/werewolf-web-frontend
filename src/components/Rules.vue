<template>
  <div class="rules">
    <Navbar header="rules" />
    <div class="rule">
      <div class="logo">
        <fa :icon="['fas', 'hashtag']" size="3x"></fa>
      </div>
      <h1>Welcome to our website</h1>
      <p>
        This is just a test Rules. The real Rule will be update right after i
        understand the game
      </p>
    </div>
  </div>
</template>

<script>
import Navbar from "./NavBar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      channel_id: "0",
    };
  },
  mounted() {
    this.sendChannelId();
  },
  methods: {
    sendChannelId() {
      this.emitter.emit("sendChannel", this.channel_id);
    },
  },
};
</script>

<style scoped>
.rules {
  position: relative;
  background: #36393f;
  color: #8e9297;
  flex-grow: 1;
  height: 100vh;
}
.rule {
  margin: 0 3rem 0 3rem;
  position: relative;
  bottom: 0rem;
}
.logo {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  margin-top: 16px;
  border-radius: 50%;
  background-color: #4f545c;
}
</style>
