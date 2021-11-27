<template>
  <div class="member">
    <Navbar header="Members"/>
    <div class="users">
      <div class="user"  v-for="user in users" :key="user.username">
        <div class="img-container">
          <img :src="user.avatar_url" alt="" />
          <div class="status-circle"></div>
        </div>
        <div class="user-info">
        <p class="username">{{ user.username }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import user from "../services/user.js";
import Navbar from "./NavBar.vue"
export default {
  components:{
    Navbar,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    user.getAllUser().then((res) => {
      this.users = res.data;
      console.log(this.users);
    });
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
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.member {
  width: 15.5rem;
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
.user {
  display: flex;
  margin-top: 0.9rem;
  margin-left: 1rem;
}
.img-container {
  width: 32px;
  height: 32px;
  position: relative;
}
.status-circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: grey;
  border: 2px solid white;
  bottom: 0;
  right: 0;
  position: absolute;
}
.user-info {
  margin-left: 10px;
}
.user-info p {
  margin-top: 0;
}
</style>
