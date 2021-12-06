<template>
  <div class="sidebar">
    <div class="title">
      <p>List of channels</p>
      <button class="backBtn">
        <fa :icon="['fas', 'times']"></fa>
      </button>
    </div>
    <div class="channels">
      <div class="category">
        <div>
          <button class="expand">
            <div class="drop-down">
              <fa :icon="['fas', 'chevron-down']"></fa>
            </div>
            <p class="category-name">Chat Room</p>
          </button>
        </div>
        <div>
          <router-link :to="{ name: 'Chat' }">
            <button class="category-list" @click="active">
              <div class="hashtag">
                <fa :icon="['fas', 'hashtag']"></fa>
              </div>
              <p>Lobby</p>
            </button>
          </router-link>
        </div>
        <div>
          <router-link :to="{ name: 'Rules' }">
            <button class="category-list">
              <div class="hashtag">
                <fa :icon="['fas', 'hashtag']"></fa>
              </div>
              <p>Rules</p>
            </button>
          </router-link>
        </div>
      </div>
      <div class="category">
        <div>
          <button class="expand">
            <div class="drop-down">
              <fa :icon="['fas', 'chevron-down']"></fa>
            </div>
            <p class="category-name">Game Room</p>
          </button>
        </div>
        <div>
          <button class="category-list">
            <div class="hashtag">
              <fa :icon="['fas', 'hashtag']"></fa>
            </div>
            <p>Room</p>
          </button>
        </div>
        <div>
          <button class="category-list">
            <div class="hashtag">
              <fa :icon="['fas', 'hashtag']"></fa>
            </div>
            <p>Role</p>
          </button>
        </div>
      </div>
    </div>
    <button @click="logout">Log Out</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$cookies.remove("token");
      this.$router.push({ name: "LogIn" });
      this.$disconnect();
    },
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
a.router-link-active button {
  color: white;
  background: #4f545c;
}

.sidebar {
  position: relative;
  left: 0;
  display: flex;
  flex-direction: column;
  min-width: 15rem;
  background: #2f3136;
  color: #8e9297;
  text-align: center;
}
.title {
  padding: 0 11px 0 16px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  justify-content: space-between;
  border-bottom: 1px solid #232527;
}
.title button {
  background: #2f3136;
  border: none;
  color: white;
  cursor: pointer;
}
.category {
  padding: 15px 10px 0 16px;
  display: flex;
  flex-direction: column;
}
.expand,
.category-list {
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
  color: #8e9297;
  width: 100%;
  text-transform: lowercase;
}
.category-name {
  text-transform: uppercase;
  font-size: 0.8rem;
}
.drop-down {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  font-size: 0.5rem;
}
.drop-down:hover {
  transform: rotate(-90deg);
  transition: 0.5s;
}
.category-list {
  font-size: 16px;
  height: 2rem;
  border-radius: 4px;
}
.category-list:hover {
  color: white;
  background: #4f545c;
}
.hashtag {
  margin-right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.active {
  color: white;
  background: #4f545c;
}
</style>
