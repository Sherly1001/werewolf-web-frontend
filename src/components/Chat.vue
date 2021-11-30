<template>
  <div class="chat">
    <div class="top-navbar">
      <NavBar header="chat-room" />
    </div>
    <div class="message" id="messages">
      <DiscordMessages v-for="mess in messages" :key="mess">
        <DiscordMessage author="Dawn">
          {{ mess }}
        </DiscordMessage>
      </DiscordMessages>
    </div>
    <InputBar :getText="getMess" />
  </div>
</template>

<script>
import {
  DiscordMessage,
  DiscordMessages,
} from "@discord-message-components/vue";
import NavBar from "./NavBar.vue";
import InputBar from "./InputBar.vue";
export default {
  components: {
    DiscordMessage,
    DiscordMessages,
    NavBar,
    InputBar,
  },
  data() {
    return {
      messages: [],
      message: "",
    };
  },
  methods: {
    getMess(mess) {
      this.$options.sockets.onmessage = (res) => {
        let data = JSON.parse(res.data);
        if (data.SendRes.message_id) {
          this.messages.push(mess);
          console.log(this.messages);
        }
      };
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
.message {
  height: 88vh;
  overflow-y: scroll;
}
.discord-messages {
  position: relative;
  bottom: 0;
  border: none !important;
}
</style>
