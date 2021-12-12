<template>
  <discord-picker
    input
    :value="value"
    @update:value="value = $event"
    @emoji="setEmoji"
  />
</template>

<script>
import DiscordPicker from 'vue3-discordpicker'
export default {
  components: { DiscordPicker },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    setEmoji (emoji) {
      console.log(emoji)
    },
    setGif (gif) {
      console.log(gif)
    }
  }
}
</script>

<style scoped>
  .discord-picker {
    width: 100%;
  }
</style>