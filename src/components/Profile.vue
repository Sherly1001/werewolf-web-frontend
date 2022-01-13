<template>
  <div class="profile">
    <div class="banner"></div>
    <div class="img-container">
      <img :src="userInfo.avatar_url" alt="" />
      <div class="status-circle-online" v-if="userInfo.is_online"></div>
      <div class="status-circle-offline" v-else></div>
    </div>
    <div class="name-and-id">
      <div class="name">
        <p>{{ userInfo.username }}</p>
      </div>
      <div class="id">
        <p>&lt;@{{ userInfo.id }}&gt;</p>
      </div>
    </div>
    <div class="win-lose">
      <div class="win">
        <p><span style="color:white;">Win: </span>{{ userInfo.win }} </p>
      </div>
      <div class="lose">
        <p><span style="color: white;">Lose: </span>{{ userInfo.lose }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: Object,
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.profile {
  width: 18rem;
  height: 25rem;
  background-color: #2f3136;
  position: fixed;
  right: 16rem;
  z-index: 999;
  cursor: auto;
  border-radius: 8px;
  border: none;
  display: flex;
  flex-direction: column;
}
.status-circle-offline {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: grey;
  border: 3px solid #2f3136;
  bottom: -3px;
  right: -4px;
  position: absolute;
}
.status-circle-online {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3ba55d;
  border: 3px solid #2f3136;
  bottom: -3px;
  right: -3px;
  position: absolute;
}
.img-container {
  width: 64px;
  height: 64px;
  position: absolute;
  top: 2rem;
  left: 16px;
  border: 6px solid #2f3136;
  border-radius: 50%;
  background-color: #2f3136;
}
.banner {
  width: 100%;
  height: 4rem;
  background-color: aqua;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.name-and-id {
  margin-top: 64px;
  text-align: left;
  margin-left: 10px;
  margin-right: 10px;
  border-bottom: 1px solid #ffffff0f;
}
.name {
  color: white;
  font-weight: 800;
  font-size: 24px;
}
.id p {
  margin-top: 5px;
}
</style>
