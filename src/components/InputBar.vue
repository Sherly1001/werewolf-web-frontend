<template>
  <div class="input">
    <div class="chat-area">
      <div class="chat-input" id="chat-input" contenteditable="true" @keyup="sendMessage">
        <!-- <form v-on:submit.prevent="sendMessage"></form> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    emitSend: Function,
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendMessage(e) {
      if (e.key == "Enter" && !e.shiftKey) {
      let chatInput = document.getElementById("chat-input");
      let text = chatInput.innerText.replace(/\n/g, "");
      if (text) {
        this.$socket.send(
          JSON.stringify({ SendReq: { channel_id: "1", message: text } })
        );
      }
      this.emitSend(text);
      chatInput.innerHTML = "";
      }
    },
  },
};
</script>

<style scoped>
.input {
  position: absolute;
  bottom: 0;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.5rem;
}
.chat-area {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  max-height: 20rem;
  border-radius: 5px;
  background: #40444b;
}
.chat-input {
  /* position: relative;
  bottom: 0; */
  width: 97%;
  outline: none;
  overflow: hidden;
  border: none;
  color: white;
}
</style>
