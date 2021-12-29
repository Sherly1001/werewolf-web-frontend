<template>
  <div class="main-site">
    <SideBar :info="info" :per="info.per" />
    <div class="replace-area">
      <router-view
        :info="info"
        :messagesRecv="messages"
        :emitChannelId="getChannelId"
      />
      <InputBar :emitSend="onSendMsg" :info="info" :channel_id="channel_id" />
    </div>
    <Member :online="Object.values(online)" :offline="Object.values(offline)" />
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import Member from "../components/Member.vue";
import user from "../services/user.js";
import InputBar from "../components/InputBar.vue";
import recv from "../services/SendAndRecv.js";
export default {
  components: {
    SideBar,
    Member,
    InputBar,
  },
  data() {
    return {
      token: user.getCookie("token"),
      ws_url: process.env.VUE_APP_WS_HOST,
      info: {},
      users: [],
      messages: {},
      channel_id: "",
      message: "",
      online: {},
      offline: {},
      position: 0,
    };
  },
  created() {
    console.log("Main Created");
    user.getInfo().then((res) => (this.info = res.data));
    if (!this.$cookies.isKey("token")) {
      this.$router.push({ name: "LogIn" });
    }
    if (this.token) {
      console.log("Connect");
      this.$connect(`${this.ws_url}/ws?token=${this.token}`);
      console.log("Connected");
      this.$options.sockets.onopen = () => {
        console.log("On open");
        this.$socket.send(JSON.stringify("GetUsers"));
        this.$socket.send(
          JSON.stringify({
            GetMsg: { channel_id: this.channel_id, offset: 0, limit: 20 },
          })
        );
        this.$socket.send(JSON.stringify({ GetPers: {} }));
      };
    }
    this.$options.sockets.onmessage = (m) => {
      let messageData = {
        message: this.message,
        username: this.info.username,
        avatar_url: this.info.avatar_url,
        message_id: "",
      };
      let data = JSON.parse(m.data);
      if (data.GetUsersRes) {
        this.users = data.GetUsersRes;
        this.users
          .filter((user) => user.is_online)
          .forEach((u) => {
            this.online[u.id] = u;
          });
        this.users
          .filter((user) => !user.is_online)
          .forEach((u) => {
            this.offline[u.id] = u;
          });
      }
      if (data.UserOnline) {
        data.UserOnline.is_online = true;
        this.online[data.UserOnline.id] = data.UserOnline;
        delete this.offline[data.UserOnline.id];
      }
      if (data.UserOffline) {
        data.UserOffline.is_online = false;
        this.offline[data.UserOffline.id] = data.UserOffline;
        delete this.online[data.UserOffline.id];
      }
      if (data.GetMsgRes) {
        this.messages[data.GetMsgRes.channel_id] = [
          ...recv.getAllMessages(
            this.users,
            messageData,
            data.GetMsgRes.messages
          ),
          ...(this.messages[data.GetMsgRes.channel_id] || []),
        ];
      }
      if (data.GetPersRes) {
        this.info.per = data.GetPersRes;
        for (const key in this.info.per) {
          if (!this.messages[key])
            this.$socket.send(
              JSON.stringify({
                GetMsg: { channel_id: key, offset: 0, limit: 20 },
              })
            );
          for (let key in this.messages) {
            if (!data.GetPersRes[key]) {
              let tmp = { ...this.messages };
              delete tmp[key];
              this.messages = tmp;
            }
          }
        }
      }
      if (data.SendRes) {
        messageData.message_id = data.SendRes.message_id;
        this.messages[data.SendRes.channel_id] = [
          ...this.messages[data.SendRes.channel_id],
          ...[messageData],
        ];
      } else if (data.BroadCastMsg) {
        this.messages[data.BroadCastMsg.channel_id] = [
          ...this.messages[data.BroadCastMsg.channel_id],
          ...[recv.receiveMessage(this.users, messageData, data.BroadCastMsg)],
        ];
      }
    };
  },
  methods: {
    onSendMsg(m) {
      this.message = m;
    },
    getChannelId(channel_id) {
      this.channel_id = channel_id;
    },
  },
};
</script>

<style>
.main-site {
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex: 1 1 auto;
  align-items: stretch;
  height: 100%;
}
.replace-area {
  position: relative;
  background: #36393f;
  color: #8e9297;
  flex-grow: 1;
  height: 100vh;
}
</style>
