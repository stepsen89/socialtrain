<template>
  <div id="welcome">
    <h1>Welcome to SocialTrain!</h1>
    <p>
    Play or chat with other passengers on this train.<br/>
    No registration required.
    </p>
    <button @click="chat">Chat</button>
    <button @click="play">Play</button>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  methods: {
    play(e) {
      this.$emit('clicked', 'play')
    },
    chat() {
      this.$emit('clicked', 'chat')
    },
  }
}
</script>

<style lang="stylus">
button
  font-size 1.2em
  padding 1em
  background #696969
  color white
  margin 0 auto
#welcome
  margin 0 auto
  text-align center
</style>
