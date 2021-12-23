<template>
  <div class="chat">
    <div class="top-navbar">
      <NavBar header="game-room" />
    </div>
    <div class="messages" id="messages" v-on:scroll.passive="loadMoreMess">
      <DiscordMessages
        v-for="mess in messagesRecv[channel_id]"
        :key="mess.message_id"
      >
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
  components: {
    DiscordMessage,
    DiscordMessages,
    NavBar,
  },
  props: {
    messagesRecv: Object,
  },
  data() {
    return {
      channel_id: this.$route.params.id,
    };
  },
  methods: {
    sendChannelId() {
      this.emitter.emit("sendChannel", this.channel_id);
    },
  },
  mounted() {
    this.sendChannelId();
  },
  watch: {
    $route(to) {
      if (to.params.id) {
        this.channel_id = to.params.id;
        this.sendChannelId();
      }
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
