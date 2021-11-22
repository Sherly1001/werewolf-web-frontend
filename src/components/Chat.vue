<template>
  <div class="chat">
    <div class="top-navbar">
      <NavBar />
    </div>
    <div class="message" id="messages">
      <DiscordMessages v-for="mess in messages" :key="mess">
        <DiscordMessage author="Dawn">
          {{ mess }}
        </DiscordMessage>
      </DiscordMessages>
    </div>
    <div class="input">
      <div
        class="chat-input"
        id="chat-input"
        contenteditable="true"
        @keyup="addMessage"
      ></div>
    </div>
  </div>
  <div class="member">
    <Member />
  </div>
</template>

<script>
import {
  DiscordMessage,
  DiscordMessages,
} from "@discord-message-components/vue";
import Member from "./Member.vue";
import NavBar from "./NavBar.vue";
export default {
  components: {
    DiscordMessage,
    DiscordMessages,
    Member,
    NavBar,
  },
  data() {
    return {
      messages: [],
      message: "",
    };
  },
  methods: {
    addMessage(e) {
      const messages = document.getElementById("messages");
      // messages.scrollTop = messages.scrollHeight;
      if (e.key == "Enter" && !e.shiftKey) {
        let chatInput = document.getElementById("chat-input");
        let text = chatInput.innerText.replace(/\n/g, "");
        if (text) {
          this.messages.push(text);
        }
        chatInput.innerHTML = "";
        messages.scrollTop = messages.scrollHeight;
        console.log(messages.scrollTop);
        messages.scrollTop += 940;
        console.log(messages.scrollTop);
      }
    },
  },
};
</script>

<style>
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
.input {
  width: 100%;
  position: relative;
  bottom: 0;
  margin-bottom: 0;
  padding: 0rem 2rem 0.5rem 2rem;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 4.5rem;
}
.chat-input {
  position: relative;
  bottom: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  max-height: 20rem;
  background: #40444b;
  width: 100%;
  outline: none;
  overflow: hidden;
  border: none;
  color: white;
}
</style>
