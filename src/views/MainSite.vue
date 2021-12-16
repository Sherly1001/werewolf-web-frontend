<template>
  <div class="main-site">
    <SideBar :info="info" />
    <div class="replace-area">
      <router-view :info="info" :messagesRecv="messages" />
      <InputBar :emitSend="onSendMsg" :info="info" />
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
      info: {},
      users: [],
      messages: [],
      channel_id: "1",
      message: "",
      online: {},
      offline: {},
      position: 0,
    };
  },
  mounted() {
    user.getInfo().then((res) => (this.info = res.data));
    console.log("Main Mounted");
    if (!this.$cookies.isKey("token")) {
      this.$router.push({ name: "LogIn" });
    }
    if (this.token) {
      console.log("Connect");
      this.$connect(
        `wss://werewolf-web-services.herokuapp.com/ws?token=${this.token}`
      );
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
        channel_id: this.channel_id,
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
        this.messages.unshift(
          ...recv.getAllMessages(
            this.users,
            messageData,
            data.GetMsgRes.messages
          )
        );
      }
      if (data.GetPersRes) {
        this.info.per = data.GetPersRes;
        console.log(this.info);
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
