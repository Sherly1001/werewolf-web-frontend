<template>
  <div class="member">
    <Navbar header="Members" />
    <div class="users">
      <State :title="online_state" :users="online" />
      <br>
      <State :title="offline_state" :users="offline" />
    </div>
  </div>
</template>

<script>
import Navbar from "./NavBar.vue";
import State from "./State.vue";
export default {
  props: {
    online: Array,
    offline: Array,
  },
  data() {
    return {
      online_state: "online",
      offline_state: "offline",
    }
  },
  components: {
    Navbar,
    State,
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 12px;
  background-color: transparent;
}

::-webkit-scrollbar-button {
  display: none;
  width: 0;
  height: 0;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #202225;
  border: 2px solid #282a2d;
  border-radius: 10px;
}
.member {
  min-width: 15.5rem;
  position: relative;
  background: #2f3136;
  color: #8e9297;
  text-align: center;
  height: 100vh;
  overflow-y: scroll;
}
.users {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
}
@media only screen and (max-width: 1000px) {
  .member {
    display: none;
  }
}
</style>
