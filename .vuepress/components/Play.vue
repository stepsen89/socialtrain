<template>
  <div>
    <h2>
      Your name is: {{ user }}
      <span id="score" ref="score">{{ score }}</span>
    </h2>
    <div ref="wrapper" id="wrapper">
      <div ref="progress" id="progress"></div>
    </div>
    <div class="button-wrapper">
      <button @click="increase">CLICK!</button>
    </div>
    <Users />
  </div>
</template>

<script>
import Users from './Users'

export default {
  components: { Users },
  data: () => ({
    user: 'John Doe',
    progressWidth: 100,
    score: 0,
    timeOver: false
  }),
  computed: {
    wrapperWidth() {
      return this.$refs.wrapper.clientWidth
    }
  },
  methods: {
    increase() {
      if (!this.timeOver) this.score++
    },
    decrease() {
      let progress = document.getElementById('progress')
      progress.style.width = this.wrapperWidth + 'px'
      let step = this.wrapperWidth / 100

      let interval = setInterval(() => {
        let currWidth = progress.style.width.split('px')[0]
        progress.style.width = (currWidth - step) + 'px'
        if (currWidth <= 0) {
          clearInterval(interval)
          this.timeOver = true
        }
      }, 100)
    }
  },
  mounted() {
    this.decrease()
  }
}
</script>

<style scoped lang="stylus">
button
  padding 1em
  background #696969
  color white
  margin 0 auto
#wrapper
  width 100%
  height 4em
  border 1px solid red
  #progress
    width 0
    height 100%
    background green
.button-wrapper
  width 100%
  text-align center
  padding 1em 0
  button
    font-size 1.2em
#score
  float right
  &:before
    content 'Score:'
    margin-right 10px
</style>
