<template>
  <div id="users">
    <ul>
      <li v-for="user in users">
        {{ user.username }}
      </li>
    </ul>
  </div>
</template>

<script>
import { UserService } from './../services/userService'

export default {
  name: 'users',
  data: () => {
    return {
      users: null
    }
  },
  created() {
    UserService.all().then(users => {
      this.users = users;
    });
  },
}
</script>

<style lang="scss">
ul {
  list-style-type: circle;
}
li {
  display: list-item;
}
</style>
