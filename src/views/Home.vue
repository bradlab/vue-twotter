<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Home</h1>
    <div class="users-list">
      <router-link v-for="user in users" :key="user.id" :to=" {name: 'UserProfile', params: {userId: user.id}} " >
        <p>
          {{ user.username }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>

import { users } from '../assets/users';

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  setup () {
    return { users };
  },
  mounted () {
    console.log("Logarithme ::: ", users);
  }
}
</script>

<style lang="scss" scoped>
  .home {
    padding: 50px 5%;

    .users-list {
      display: flex;
      flex-direction: column;
      // color: red;
    }
  }
</style>
