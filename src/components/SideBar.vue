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
          <router-link :to="{ name: 'Chat', params: { name: 'rules' } }">
            <button class="category-list" @click="active">
              <div class="hashtag">
                <fa :icon="['fas', 'hashtag']"></fa>
              </div>
              <p>Rules</p>
            </button>
          </router-link>
        </div>
        <div class="channel">
          <div class="has-new" v-if="has_new_msg['1']" />
          <router-link :to="{ name: 'Chat', params: { name: 'lobby' } }">
            <button class="category-list" @click="active">
              <div class="hashtag">
                <fa :icon="['fas', 'hashtag']"></fa>
              </div>
              <p>Lobby</p>
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
        <div class="channel_list">
          <div
            v-for="channel_id in Object.keys(channels)
              .filter((cid) => !['0', '1'].includes(cid))
              .sort()"
            :key="channel_id"
            class="channel"
          >
            <div class="has-new" v-if="has_new_msg[channel_id]" />
            <router-link
              :to="{ name: 'Game Room', params: { id: channel_id } }"
            >
              <button class="category-list">
                <div class="hashtag">
                  <fa :icon="['fas', 'hashtag']"></fa>
                </div>
                <p>{{ channels[channel_id].channel_name }}</p>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="img-container">
        <img :src="info.avatar_url" alt="" />
        <div class="status-circle"></div>
      </div>
      <div class="user-info">
        <p class="username">{{ info.username }}</p>
        <p class="win-lose">#{{ info.win }}/#{{ info.lose }}</p>
      </div>
      <div class="setting">
        <fa :icon="['fas', 'cog']" class="cog-btn" @click="logout"></fa>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      has_new_msg: {},
    };
  },
  props: {
    info: Object,
    channels: Object,
  },
  methods: {
    logout() {
      this.$cookies.remove("token");
      this.$router.push({ name: "LogIn" });
      this.$disconnect();
    },
  },
  watch: {
    channels(newVal, oldVal) {
      let cur_cid =
        this.$route.params.id ||
        { lobby: "1", rules: "0" }[this.$route.params.name];
      for (let cid in newVal) {
        if (cid == "0") continue;
        let new_msg = newVal[cid].last_msg;
        let old_msg = (oldVal[cid] || {}).last_msg;
        if (new_msg != old_msg && cid != cur_cid) {
          this.has_new_msg[cid] = true;
        }
      }
    },
    $route({ params }) {
      if (params.id) {
        this.has_new_msg[params.id] = false;
      } else if (params.name) {
        let cids = { lobby: "1", rules: "0" };
        this.has_new_msg[cids[params.name]] = false;
      }
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
a.router-link-active button {
  color: white;
  background: #4f545c;
  pointer-events: none;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
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
  margin-top: 5px;
}
.category-list:hover {
  color: white;
  background: rgba(79, 84, 92, 0.16);
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
.logOut-btn span {
  color: red;
}
.logOut-btn {
  cursor: pointer;
}
.info {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background: #292b2f;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
}
.info p {
  margin: 0;
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
  background-color: #3ba55d;
  border: 3px solid #2f3136;
  bottom: -3px;
  right: -4px;
  position: absolute;
}

.cog-btn {
  cursor: pointer;
}

.cog-btn:hover {
  transform: rotate(360deg);
  transition: 1s;
}

.channel {
  position: relative;
}

.channel .has-new {
  position: absolute;
  top: 50%;
  left: -.5em;
  transform: translateY(-50%);
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  background: white;
  height: 8px;
  width: 5px;
}
</style>
