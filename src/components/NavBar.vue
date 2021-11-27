<template>
  <div class="navbar">
    <div class="hashtag">
      <fa :icon="['fas', 'hashtag']"></fa>
    </div>
    <p>{{ header }}</p>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
  },
};
</script>

<style>
.navbar {
  position: relative;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #2b2e33;
  padding-left: 1rem;
}
.hashtag {
  margin-right: 6px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
.navbar p {
  color: white;
}
</style>
