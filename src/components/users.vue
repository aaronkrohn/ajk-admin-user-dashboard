<template>
  <div id="users">
    Users!
  </div>
</template>

<script>
import { UserService } from './../services/userService'

export default {
  name: 'users',
  methods: {

  },
  components: {

  },
  created() {
    debugger;
    UserService.all().then(console.log);
  }
}
</script>

<style lang="scss">

</style>
