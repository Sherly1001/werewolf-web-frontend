<template>
  <div class="chat">
    <div class="top-navbar">
      <NavBar header="chat-room" />
    </div>
    <div class="message" id="messages">
      <DiscordMessages v-for="mess in messages" :key="mess.message_id">
        <DiscordMessage :author="mess.username" :avatar="mess.avatar_url">
          {{ mess.message }}
        </DiscordMessage>
      </DiscordMessages>
    </div>
    <InputBar :emitSend="onSendMsg" />
  </div>
</template>

<script>
import {
  DiscordMessage,
  DiscordMessages,
} from "@discord-message-components/vue";
import NavBar from "./NavBar.vue";
import InputBar from "./InputBar.vue";
import user from "../services/user.js";
import recv from "../services/SendAndRecv.js";
export default {
  props: {
    info: Object,
    messagesRecv: Array,
  },
  components: {
    DiscordMessage,
    DiscordMessages,
    NavBar,
    InputBar,
  },
  data() {
    return {
      messages: [],
      token: user.getCookie("token"),
      message: "",
      channel_id: "1",
      users: [],
    };
  },
  mounted() {
    this.$options.sockets.onopen = () => {
      this.$socket.send(JSON.stringify("GetUsers"));
      this.$socket.send(
        JSON.stringify({
          GetMsg: { channel_id: this.channel_id, offset: 0, limit: 50 },
        })
      );
    };
    this.$options.sockets.onmessage = (m) => {
      let messageData = {
        message: this.message,
        channel_id: this.channel_id,
        username: this.info.username,
        avatar_url: this.info.avatar_url,
        message_id: "",
      };
      let data = JSON.parse(m.data);
      console.log(data);
      if (data.GetUsersRes) {
        this.users = data.GetUsersRes;
      }
      if (data.GetMsgRes) {
        this.messages = recv.getAllMessages(
          this.users,
          messageData,
          data.GetMsgRes.messages,
        );
      }
      if (data.SendRes) {
        messageData.message_id = data.SendRes.message_id;
        this.messages.push(messageData);
      } else if (data.BroadCastMsg) {
        this.messages.push(
          recv.receiveMessage(this.users, messageData, data.BroadCastMsg)
        );
      }
    };
  },
  methods: {
    onSendMsg(m) {
      this.message = m;
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
