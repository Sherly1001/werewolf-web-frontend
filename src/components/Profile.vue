<template>
  <div class="profile" >
        <!-- <div class="img-container">
      <img :src="userInfo.avatar_url" alt="" />
      <div class="status-circle-online" v-if="userInfo.is_online"></div>
      <div class="status-circle-offline" v-else></div>
    </div> -->
    {{ userInfo.username }}
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
.profile {
  width: 15rem;
  height: 20rem;
  background-color: #2f3136;
  position: fixed;
  right: 16rem;
  z-index: 999;
  cursor: auto;
}
.status-circle-offline {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: grey;
  border: 3px solid #2f3136;
  bottom: -3px;
  right: -4px;
  position: absolute;
}
.status-circle-online {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #3ba55d;
  border: 3px solid #2f3136;
  bottom: -3px;
  right: -4px;
  position: absolute;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
