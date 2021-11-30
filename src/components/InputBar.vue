<template>
  <div class="input">
    <div
      class="chat-input"
      id="chat-input"
      contenteditable="true"
      @keyup="sendMessage"
    ></div>
  </div>
</template>

<script>
//import sendAndRecv from "../services/SendAndRecv.js";
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
      const messages = document.getElementById("messages");
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
        messages.scrollTop = messages.scrollHeight;
        messages.scrollTop += 940;
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
.chat-input {
  /* position: relative;
  bottom: 0; */
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  max-height: 20rem;
  background: #40444b;
  width: 90%;
  outline: none;
  overflow: hidden;
  border: none;
  color: white;
}
</style>
