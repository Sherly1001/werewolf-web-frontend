<template>
  <div class="input">
    <div class="chat-area">
      <div
        :class="
          allow_check == true
            ? 'chat-input'
            : 'chat-input disable-cursor block-blinking'
        "
        id="chat-input"
        contenteditable="true"
        @keydown="sendMessage"
        :placeholder="'Message @' + channel_name"
      >
        <span class="banned" v-if="!allow_check"
          >You don't have permission to chat in this channel</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    emitSend: Function,
    info: Object,
    channel_id: String,
  },
  data() {
    return {
      message: "",
      readable: null,
      allow_check: null,
      channel_name: "",
    };
  },
  methods: {
    sendMessage(e) {
      if (!this.allow_check) {
        e.preventDefault();
      } else {
        if (e.key == "Enter" && !e.shiftKey) {
          e.preventDefault();
          let chatInput = document.getElementById("chat-input");
          let text = chatInput.innerText.replace(/\n/g, "");
          if (text) {
            this.$socket.send(
              JSON.stringify({
                SendReq: { channel_id: this.channel_id, message: text },
              })
            );
          }
          this.emitSend(text);
          chatInput.innerHTML = "";
        }
      }
    },
  },
  watch: {
    info: {
      handler: function(newVal) {
        this.readable = newVal;
        if (this.readable.per) {
          this.allow_check = this.readable.per[this.channel_id].sendable;
          this.channel_name = this.readable.per[this.channel_id].channel_name;
        }
      },
      deep: true,
    },
    channel_id: {
      handler: function(newVal) {
        if (this.readable) {
          this.allow_check = this.readable.per[newVal].sendable;
          this.channel_name = this.readable.per[newVal].channel_name;
        }
      },
      deep: true,
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

.disable-cursor {
  cursor: not-allowed;
}

.block-blinking {
  caret-color: transparent;
}

.chat-input {
  width: 97%;
  outline: none;
  overflow: hidden;
  border: none;
  color: white;
}
.banned {
  color: #72767d;
  font-style: italic;
}

[contentEditable="true"]:empty:before {
  content: attr(placeholder);
  color: #72767d;
  font-style: italic;
}
</style>
