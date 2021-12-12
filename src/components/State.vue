<template>
  <div class="title">{{ title }} ー {{ users.length }}</div>
  <div class="user" v-for="user in users" :key="user.username">
    <div class="img-container">
      <img :src="user.avatar_url" alt="" />
      <div class="status-circle-online" v-if="user.is_online"></div>
      <div class="status-circle-offline" v-else></div>
    </div>
    <div class="user-info">
      <p class="username">{{ user.username }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    users: Array,
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
</style>
