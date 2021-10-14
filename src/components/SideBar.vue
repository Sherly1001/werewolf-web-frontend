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
          <button class="category-list">
            <div class="hashtag">
              <fa :icon="['fas', 'hashtag']"></fa>
            </div>
            <p>Lobby</p>
          </button>
        </div>
        <div>
          <button class="category-list active">
            <div class="hashtag">
              <fa :icon="['fas', 'hashtag']"></fa>
            </div>
            <p>Rule</p>
          </button>
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
  position: relative;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 15rem;
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
  border-bottom: 1px solid black;
}
.title button {
  background: #2f3136;
  border: none;
  color: white;
  cursor: pointer;
}
.category {
  padding: 24px 10px 0 16px;
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
  color: #718096;
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
  background: #393d42;
}
.hashtag {
  margin-right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.active {
  color: white;
  background: #393d42;
}
</style>
