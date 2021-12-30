<template>
  <div class="chat">
    <div class="top-navbar">
      <NavBar header="chat-room" />
    </div>

    <div class="messages" id="messages" v-on:scroll.passive="loadMoreMess">
      <DiscordMessages v-for="mess in messages" :key="mess.message_id">
        <DiscordMessage :author="mess.username" :avatar="mess.avatar_url">
          {{ mess.message }}
        </DiscordMessage>
      </DiscordMessages>
    </div>
  </div>
</template>

<script>
import {
  DiscordMessage,
  DiscordMessages,
} from "@discord-message-components/vue";
import NavBar from "./NavBar.vue";
export default {
  props: {
    info: Object,
    messages: Array,
    emitChannelId: Function,
  },
  data() {
    const cids = { rules: "0", lobby: "1" };
    const channel_id =
      cids[this.$route.params.name] || this.$route.params.id || "0";
    return {
      hasMore: true,
      channel_id,
      cids,
    };
  },
  components: {
    DiscordMessage,
    DiscordMessages,
    NavBar,
  },
  methods: {
    loadMoreMess() {
      let offset = this.messages.length;
      let msg = document.getElementById("messages");
      if (msg.scrollTop <= 100) {
        if (this.hasMore) {
          this.$socket.send(
            JSON.stringify({
              GetMsg: {
                channel_id: this.channel_id,
                offset: offset,
                limit: 20,
              },
            })
          );
        }
      }
    },
  },
  mounted() {
    console.log("Chat Mounted");
    this.emitChannelId(this.channel_id);
    let msg = document.getElementById("messages");
    setTimeout(() => {
      msg.scrollTop = msg.scrollHeight;
    }, 0);
  },
  watch: {
    messages: {
      handler: function(newVal) {
        let msg = document.getElementById("messages");
        if (
          newVal &&
          msg.scrollHeight - msg.scrollTop <= msg.clientHeight + 100
        ) {
          setTimeout(() => {
            msg.scrollTop = msg.scrollHeight;
          }, 0);
        }
      },
      deep: true,
    },
    $route(to) {
      const cid = this.cids[to.params.name] || to.params.id || "0";
      this.channel_id = cid;
      this.emitChannelId(cid);
    },
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
.top-navbar {
  position: relative;
  top: 0;
}
.chat {
  position: relative;
  background: #36393f;
  color: #8e9297;
  flex-grow: 1;
  -webkit-height: 100vh;
  height: 100vh;
  overflow: hidden;
}
.messages {
  height: 88vh;
  overflow-y: scroll;
}
.discord-messages {
  position: relative;
  bottom: 0;
  border: none !important;
}
</style>
