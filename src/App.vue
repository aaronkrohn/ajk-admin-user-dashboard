<template>
  <div id="app">

    <input type="text" v-model="user.name" />
    <input type="email" v-model="user.email" />
    <input type="password" v-model="user.password" />

    <button v-on:click="handleSubmit">Submit</button>

    <users/>

  </div>
</template>

<script>
import users from "./components/users";

export default {
  name: 'app',
  data: () => {
    return {
      user: {
        name: 'user one',
        email: 'user-one@test.com',
        password: 'password',
      },
    }
  },
  methods: {
    handleSubmit: (e) => {
      console.log('clicked', e);
    }
  },
  components: {
    users
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
