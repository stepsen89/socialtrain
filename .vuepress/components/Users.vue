<template>
  <div>
    <h2>
      Players
    </h2>
    <div id="users">
      <p v-for="user in users">
      {{ user }}
      </p>
    </div>
  </div>
</template>

<script>
import { generateName } from './Utils'

export default {
  data: () => ({
    users: []
  }),
  methods: {
    generateUsers () {
      let count = 10
      while(count) {
        this.users.push(generateName())
        count--
      }
    }
  },
  mounted() {
    this.generateUsers()
  }
}

</script>

<style lang="stylus">
#users
  p
    padding 0 
    margin 0 
</style>
