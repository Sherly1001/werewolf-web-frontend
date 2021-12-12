<template>
  <div class="main-site">
    <SideBar :info="info" />
    <div class="replace-area">
      <router-view :info="info" :messagesRecv="messages" />
      <InputBar :emitSend="onSendMsg" />
    </div>
    <Member :online="online" :offline="offline" />
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
      online: [],
      offline: [],
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
        this.online = this.users.filter((user) => user.is_online);
        this.offline = this.users.filter((user) => !user.is_online);
      }
      if (data.UserOnline) {
        data.UserOnline.is_online = true;
        this.position = user.containsObject(data.UserOnline, this.online);
        if (this.position == -1) {
          this.online.push(data.UserOnline);
          let find = user.containsObject(data.UserOnline, this.offline);
          this.offline.splice(find, 1);
        }
      }
      if (data.UserOffline) {
        data.UserOffline.is_online = false;
        this.position = user.containsObject(data.UserOffline, this.offline);
        if (this.position == -1) {
          this.offline.push(data.UserOffline);
          let find = user.containsObject(data.UserOffline, this.online);
          this.online.splice(find, 1);
        }
      }
      if (data.GetMsgRes) {
        this.messages = recv.getAllMessages(
          this.users,
          messageData,
          data.GetMsgRes.messages
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
