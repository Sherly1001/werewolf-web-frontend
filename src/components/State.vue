<template>
  <div class="title">{{ title }} ー {{ users.length }}</div>
  <div
    class="user"
    v-for="user in users"
    :key="user.username"
    @click="showInfo(user.id)"
  >
    <div class="img-container">
      <img :src="user.avatar_url" alt="" />
      <div class="status-circle-online" v-if="user.is_online"></div>
      <div class="status-circle-offline" v-else></div>
    </div>
    <div class="user-info">
      <p class="username">{{ user.username }}</p>
    </div>
    <Profile
      :userInfo="user"
      :id="user.id"
      class="profile"
      style="display: none"
    />
  </div>
  <Profile :userInfo="users[0] || {}" />
</template>

<script>
import Profile from "./Profile.vue";
export default {
  components: {
    Profile,
  },
  props: {
    title: String,
    users: Array,
  },
  data() {
    return {
      tmp: {},
    };
  },
  methods: {
    showInfo(id) {
      let profileArr = document.getElementsByClassName("profile");
      for (let i = 0; i < profileArr.length; ++i) {
        if (profileArr[i].style.display == "block") {
          profileArr[i].style.display = "none";
        }
      }
      let user_id = document.getElementById(id);
      if (user_id.style.display == "none") {
        user_id.style.display = "block";
      } else {
        user_id.style.display = "none";
        console.log("hidden");
      }
      console.log(user_id.style.display);
    },
    findPos(obj) {
      let curleft = 0,
        curtop = 0;

      if (obj.offsetParent)
        do {
          curleft += obj.offsetLeft;
          curtop += obj.offsetTop;
        } while ((obj = obj.offsetParent));

      return [curleft, curtop];
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.user {
  display: flex;
  margin-top: 0.9rem;
  margin-left: 1rem;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  padding-top: 5px;
}
.user:hover {
  background: rgba(79, 84, 92, 0.16);
}
.img-container {
  width: 32px;
  height: 32px;
  position: relative;
}
.status-circle-offline {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: grey;
  border: 3px solid #2f3136;
  bottom: -3px;
  right: -4px;
  position: absolute;
}
.status-circle-online {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #3ba55d;
  border: 3px solid #2f3136;
  bottom: -3px;
  right: -4px;
  position: absolute;
}
.user-info {
  margin-left: 10px;
}
.user-info p {
  margin-top: 0;
}
.title {
  padding: 8px 8px 0px 16px;
  display: flex;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 800;
  align-items: center;
  text-align: center;
}
.profile-contain {
  position: relative;
}
</style>
