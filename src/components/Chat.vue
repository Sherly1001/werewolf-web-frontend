<template>
  <div class="chat">
    <div class="top-navbar">
      <NavBar header="chat-room" />
    </div>

    <div class="messages" id="messages" v-on:scroll.passive="loadMoreMess">
      <DiscordMessages v-for="mess in messages" :key="mess.message_id">
        <DiscordMessage :author="mess.username" :avatar="mess.avatar_url">
          <template v-for="(word, index) in mess.message" :key="index">
            <DiscordMention :highlight="true" v-if="word.match(r_user) != null">{{
              (() => {
                let id = word.match(r_user)[1];
                let user = users.filter((u) => u.id == id)[0];
                return user ? user.username : "deleted user";
              })()
            }}</DiscordMention>
            <DiscordMention
              v-else-if="word.match(r_channel) != null"
              type="channel"
              :highlight="true"
              @click="to_channel(word.match(r_channel))"
              >{{
                (() => {
                  let id = word.match(r_channel)[1];
                  let channel = per[id];
                  return channel ? channel.channel_name : "personal channel";
                })()
              }}</DiscordMention
            >
            <span v-else>{{ word }}</span>
          </template>
        </DiscordMessage>
      </DiscordMessages>
    </div>
  </div>

  <InputBar :emitSend="onSendMsg" :per="per" :channel_id="channel_id" />
</template>

<script>
import {
  DiscordMessage,
  DiscordMessages,
  DiscordMention,
} from "@discord-message-components/vue";
import NavBar from "./NavBar.vue";
import InputBar from "./InputBar.vue";
export default {
  components: {
    DiscordMessage,
    DiscordMessages,
    DiscordMention,
    NavBar,
    InputBar,
  },
  props: {
    per: Object,
    messages: Array,
    hasMore: Object,
    onLoadMore: Function,
    onScroll: Function,
    emitChannelId: Function,
    users: Object,
    onSendMsg: Function,
  },
  data() {
    const cids = { rules: "0", lobby: "1", 0: "rules", 1: "lobby" };
    return {
      cids,
      firstLoad: [],
      r_user: /<@(\d+)>/,
      r_channel: /<#(\d+)>/,
    };
  },
  methods: {
    loadMoreMess() {
      let offset = this.messages.length;
      let msg = document.getElementById("messages");
      if (
        this.hasMore.hasMore &&
        this.hasMore.lastFetchMoreDone &&
        msg.scrollTop <= 100
      ) {
        console.log("get more", this.channel_id);
        this.onLoadMore(this.channel_id, offset);
      }
      setTimeout(() => {
        this.onScroll(this.channel_id, msg.scrollTop, msg.scrollHeight);
      }, 0);
    },
    to_channel(match) {
      let personal_channel = Object.keys(this.per).filter(
        (cid) => this.per[cid].channel_name === "personal channel"
      )[0];

      let id = match[1] || "1";
      let channel_id = this.per[id] ? id : personal_channel || "1";

      let to =
        channel_id !== "1" && channel_id != "0"
          ? { name: "Game Room", params: { id: channel_id } }
          : { name: "Chat", params: { name: this.cids[channel_id] } };
      this.$router.push(to);
    },
  },
  mounted() {
    console.log("Chat Mounted");
    this.emitChannelId(this.channel_id);
  },
  watch: {
    per: {
      handler: function (newVal) {
        if (!newVal[this.channel_id]) {
          this.$router.push({ name: "Chat", params: { name: "lobby" } });
        }
      },
      deep: true,
    },
    messages: {
      handler: function (newVal) {
        let msg = document.getElementById("messages");
        setTimeout(() => {
          let outClient =
            this.hasMore.scrollTop !== undefined
              ? this.hasMore.scrollHeight -
                this.hasMore.scrollTop -
                msg.clientHeight
              : msg.scrollHeight - msg.scrollTop - msg.clientHeight;
          console.log("out client:", outClient, msg.clientHeight);
          if (newVal.length != 0 && !this.firstLoad[this.channel_id]) {
            msg.scrollTop = msg.scrollHeight;
            this.firstLoad[this.channel_id] = true;
          } else if (outClient <= 200) {
            console.log("go down:", outClient);
            msg.scrollTop = msg.scrollHeight;
          } else {
            msg.scrollTop = this.hasMore.scrollTop;
          }
          this.onScroll(this.channel_id, msg.scrollTop, msg.scrollHeight);
        }, 0);
      },
      deep: true,
    },
    $route(to) {
      const cid = this.cids[to.params.name] || to.params.id || "0";
      this.emitChannelId(cid);
    },
  },
  computed: {
    channel_id: function () {
      return this.cids[this.$route.params.name] || this.$route.params.id || "0";
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
  white-space: pre-wrap;
}
.highlight {
  position: relative;
  background-color: rgba(250, 166, 26, 0.1);
}
.highlight::before {
  background-color: #faa61a;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 2px;
}
.discord-mention {
  cursor: pointer;
}
</style>
