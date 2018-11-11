<template>
  <div>
    <Welcome v-if="!play" @clicked="receiveIntent" />
    <Play v-if="play" />
  </div>
</template>

<script>
import Welcome from './Welcome'
import Play from './Play'

export default {
  name: 'Game',
  components: { Welcome, Play },
  data: () => ({
    play: false
  }),
  methods: {
    receiveIntent(intent) {
      // this.play = intent === 'play' ? true : false

      if (intent === 'play') {
        this.play = true
        return
      }
    }
  },
  sockets: {
    END_GAME() {
      console.log('Game finished in FRONT')
    }
  }
}
</script>

<style>
</style>
