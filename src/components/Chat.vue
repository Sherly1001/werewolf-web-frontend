<template>
  <div class="chat">
    <DiscordMessages>
      <DiscordMessage>
        Hello, World!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </DiscordMessage>
    </DiscordMessages>
    <div contenteditable = "true">
      meomeo
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
};
</script>

<style scoped>
.chat {
  background: #36393f;
  color: #8e9297;
  flex-grow: 1;
}
</style>
