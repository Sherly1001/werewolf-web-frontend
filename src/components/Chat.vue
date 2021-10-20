<template>
  <div class="chat">
    <DiscordMessages v-for="mess in messages" :key="mess">
      <DiscordMessage>
        {{mess}}
      </DiscordMessage>
    </DiscordMessages>
    
    <div class="input">
      <div class="add">
        <fa :icon="['fas', 'plus-circle']"></fa>
      </div>
      <input type="text" class="chat-input" id="chat-input" v-model="message" @keyup="addMessage">
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
export default {
  components: {
    DiscordMessage,
    DiscordMessages,
    Member,
  },
  data(){
    return {
      messages: [],
      message: '',
    }
  },
  methods:{
    addMessage(e){
      if(e.key == 'Enter'){
        if(this.message){
        this.messages.push(this.message);
        this.message = '';
      }
      }
    }
  }
};
</script>

<style scoped>
.chat {
  background: #36393f;
  color: #8e9297;
  flex-grow: 1;
  max-height: 100vh;
  overflow: hidden;
}
.input {
  position: relative;
  bottom: 0;
  padding: 0rem 2rem 0.5rem 2rem;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
}
.chat-input {
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
