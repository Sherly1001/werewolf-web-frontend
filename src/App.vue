<template>
  <div class="container">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: false,
    };
  },
  setup() {},
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
body {
  font-family: "Roboto", sans-serif;
  margin: 0;
}
.container {
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
.required:after {
  content: " *";
  color: rgb(255, 255, 255);
  font-weight: bold;
}
</style>
