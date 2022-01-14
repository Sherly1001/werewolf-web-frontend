<template>
  <div class="main-site">
    <SideBar :info="info" :per="info.per" />
    <div class="replace-area">
      <router-view
        :per="info.per"
        :messages="messages[channel_id] || []"
        :hasMore="hasMore[channel_id] || {}"
        :onLoadMore="onLoadMore"
        :onScroll="onScroll"
        :emitChannelId="getChannelId"
        :users="users"
        :onSendMsg="onSendMsg"
      />
    </div>
    <Member :online="Object.values(online)" :offline="Object.values(offline)" />
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import Member from "../components/Member.vue";
import user from "../services/user.js";
import recv from "../services/SendAndRecv.js";
export default {
  components: {
    SideBar,
    Member,
  },
  data() {
    return {
      token: user.getCookie("token"),
      ws_url: process.env.VUE_APP_WS_HOST,
      info: {
        per: {},
        username: null,
        avatar_url: null,
        id: null,
        win: 0,
        lose: 0,
        is_online: true,
      },
      users: [],
      messages: {},
      hasMore: {},
      channel_id: "1",
      message: "",
      online: {},
      offline: {},
      position: 0,
    };
  },
  created() {
    console.log("Main Created");
    if (!this.$cookies.isKey("token")) {
      this.$router.push({ name: "LogIn" });
    }
    if (this.token) {
      console.log("Connect");
      this.$connect(`${this.ws_url}/ws?token=${this.token}`);
      console.log("Connected");
      this.$options.sockets.onopen = () => {
        console.log("On open");
        this.$socket.send(JSON.stringify({ GetUserInfo: {} }));
        this.$socket.send(JSON.stringify("GetUsers"));
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
      if (data.GetUserInfoRes) {
        this.info = { ...this.info, ...data.GetUserInfoRes };
      } else if (data.GetUsersRes) {
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
      } else if (data.UserOnline) {
        data.UserOnline.is_online = true;
        this.online[data.UserOnline.id] = data.UserOnline;
        delete this.offline[data.UserOnline.id];
        if (
          this.users.filter((u) => u.id === data.UserOnline.id).length === 0
        ) {
          this.users = [...this.users, data.UserOnline];
        }
      } else if (data.UserOffline) {
        data.UserOffline.is_online = false;
        this.offline[data.UserOffline.id] = data.UserOffline;
        delete this.online[data.UserOffline.id];
      } else if (data.GetMsgRes) {
        let hasMore = true;
        if (data.GetMsgRes.messages.length < 20) {
          console.log("no more:", data.GetMsgRes.channel_id);
          hasMore = false;
        }
        this.hasMore = Object.assign({}, this.hasMore, {
          [data.GetMsgRes.channel_id]: Object.assign(
            {},
            this.hasMore[data.GetMsgRes.channel_id],
            {
              hasMore,
              lastFetchMoreDone: true,
            }
          ),
        });
        let old_msgs = this.messages[data.GetMsgRes.channel_id] || [];
        let old_ids = old_msgs.map((m) => m.message_id);
        let new_msgs = recv
          .getAllMessages(this.users, messageData, data.GetMsgRes.messages)
          .filter((m) => !old_ids.includes(m.message_id));
        new_msgs = [...new_msgs, ...old_msgs];
        this.messages = {
          ...this.messages,
          [data.GetMsgRes.channel_id]: new_msgs,
        };
      } else if (data.GetPersRes) {
        this.info.per = data.GetPersRes;
        for (const key in this.info.per) {
          if (!this.messages[key])
            this.$socket.send(
              JSON.stringify({
                GetMsg: { channel_id: key, offset: 0, limit: 20 },
              })
            );
          this.hasMore = Object.assign({}, this.hasMore, {
            [key]: Object.assign({}, this.hasMore[key], {
              hasMore: true,
              lastFetchMoreDone: true,
            }),
          });
        }
        for (let key in this.messages) {
          if (!data.GetPersRes[key]) {
            let tmp = { ...this.messages };
            let hasMore = { ...this.hasMore };
            delete tmp[key];
            delete hasMore[key];
            this.messages = tmp;
            this.hasMore = hasMore;
          }
        }
      } else if (data.SendRes) {
        messageData.message_id = data.SendRes.message_id;
        this.messages = {
          ...this.messages,
          [data.SendRes.channel_id]: [
            ...this.messages[data.SendRes.channel_id],
            messageData,
          ],
        };
      } else if (data.BroadCastMsg) {
        let old_msgs = this.messages[data.BroadCastMsg.channel_id] || [];
        old_msgs = old_msgs.filter(
          (m) => m.message_id != data.BroadCastMsg.message_id
        );
        let new_msgs = [
          ...old_msgs,
          recv.receiveMessage(this.users, messageData, data.BroadCastMsg),
        ];
        this.messages = {
          ...this.messages,
          [data.BroadCastMsg.channel_id]: new_msgs,
        };
      } else if (data.Error) {
        if (this.info.username == null) {
          this.$cookies.remove("token");
          this.$router.push({ name: "LogIn" });
          this.$disconnect();
        }
      }
    };
  },
  methods: {
    onSendMsg(m) {
      this.message = m.split(/(<[@#]\d+>)/g);
    },
    getChannelId(channel_id) {
      this.channel_id = channel_id;
    },
    onLoadMore(channel_id, offset) {
      this.hasMore = Object.assign({}, this.hasMore, {
        [channel_id]: Object.assign({}, this.hasMore[channel_id], {
          lastFetchMoreDone: true,
        }),
      });
      this.$socket.send(
        JSON.stringify({
          GetMsg: {
            channel_id: this.channel_id,
            offset: offset,
            limit: 20,
          },
        })
      );
    },
    onScroll(channel_id, scrollTop, scrollHeight) {
      this.hasMore = Object.assign({}, this.hasMore, {
        [channel_id]: Object.assign({}, this.hasMore[channel_id], {
          scrollTop,
          scrollHeight,
        }),
      });
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
