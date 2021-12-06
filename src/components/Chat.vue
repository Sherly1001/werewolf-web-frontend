<template>
  <div class="chat">
    <div class="top-navbar">
      <NavBar header="chat-room" />
    </div>
    <div class="messages" id="messages">
      <DiscordMessages v-for="mess in messagesRecv" :key="mess.message_id">
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
    messagesRecv: Array,
  },
  components: {
    DiscordMessage,
    DiscordMessages,
    NavBar,
  },
  data() {
    return {
      channel_id: "1",
    };
  },
  watch: {
    messagesRecv: {
      handler: function(newVal) {
        let messages = document.getElementById("messages");
        if (newVal) {
          setTimeout(() => {
            messages.scrollTop = messages.scrollHeight;
          }, 0);
        }
      },
      deep: true,
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
  height: 100vh;
  overflow: hidden;
}
.messages {
  height: 88vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.discord-messages {
  position: relative;
  bottom: 0;
  border: none !important;
}
</style>
