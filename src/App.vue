<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" title="Vue Learning"/> -->
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="navigation__logo">Twotter</div>
      </router-link>
      <div class="navigation__user" v-if="user">{{user.username}}</div>
    </nav>
    <!-- <UserProfile/> -->
    <router-view/>
  </div>
</template>

<script>

import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'App',
  // components: {UserProfile},
  setup () {
    const store = useStore();
    const user = computed(() => store.state.User.user);
    console.log("User", user);

    return {
      user,
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #F3F5FA;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: deeppink;
    color: white;

    .navigation_logo {
      font-weight: bold;
      font-size: 24px;
      text-transform: uppercase;
    }
  }
}
</style>
