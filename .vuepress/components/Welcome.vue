<template>
  <div id="welcome">
    <img id="logo" src="../public/background.svg">
    <h1>Game Train</h1>
    <hr class="rule">
    <p>
    Play with other passengers on this train.<br/>
    No registration required.
    </p>
    <hr class="rule">
    <p>
      Fast click <br />
      <span class="description">Click as fast as you can and compete other people</span>
    </p>
    <hr>
    <p>
      Game 2 <br />
      <span class="description">Description</span>
    </p>
    <hr>
    <p>
      Trick or Eat Brains <br />
      <span class="description">Run around the city turning as many victims as possible into zombies</span>
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
body
  background #0E293C
  font-family Verdana-Bold
  color white
h1
  margin-top -1em
button
  font-size 1.2em
  padding 1em
  background #00C7DF
  border-radius 1em
  color white
  margin 0 auto
  width 8em
  border 1px solid white
#welcome
  margin 0 auto
  text-align center
.rule
  height 0.1em
  background white
.description
  font-size 0.7em
</style>
