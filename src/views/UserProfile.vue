<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" title="Vue Learning"/> -->
  <div class="user-profile">
        <div class="user-profile__user-panel">
            <h2 class="user-profile_username">@{{state.user.username}}</h2>
            <h5 class="user-profile__admin-badge" v-if="state.user.isAdmin">admin</h5>
            <h5 class="user-profile__admin-badge" v-else>noAdmin</h5>
            <div class="user-profile__follower-count">
                <strong>Followers: </strong> <span>{{state.followers}}</span>
            </div>
            <CreateTwootPanel @add-twoot="newTwoot" />
        </div>
        <div class="user-profile__twoots-wrapper">
            <TwootItem 
                v-for="twoot in state.user.twoots" 
                :key="twoot.id" 
                :username="state.user.username" 
                :twoot="twoot" 
                @favourite="toggleFavourite"
            />
        </div>
  </div>
</template>

<script>

import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';

import TwootItem from '../components/TwootItem';
import CreateTwootPanel from '../components/CreateTwootPanel';
import {users} from '../assets/users';

export default {
  name: 'UserProfile',
  components: { TwootItem, CreateTwootPanel },
  setup () {
    const route = useRoute();
    const userId = computed(() => route.params.userId);
    const fullname = computed(() => `${state.user.firstname} ${state.user.lastname}`);

    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || users[0]
    });

    function followUser() {
      state.followers++;
    }

    function toggleFavourite(id) {
        console.log("toggleFavourite #", id);
    }

    function newTwoot(content) {
      state.user.twoots.unshift({
        id: state.user.twoots.length + 1,
        content
      });
    }

    return {
      state,
      fullname,
      followUser,
      toggleFavourite,
      newTwoot,
      userId
    }
  },
  watch: {
    followers(comming, old) {
      if(old < comming) {
        // console.log(`${this.fullname} has gained a follower`);
      }
    }
  },
  mounted() {
    console.log("On load");
    // this.followUser();
  }
}
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px 5%;
  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
  
    h1, h5 {
      margin: 0;
    }

    .user-profile__admin-badge {
      background: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }
    
    /* .user-profile__create-twoot {
      border-top: 1px solid  #DFE3E8;
      padding-top: 20px;
      display: flex;
      flex-direction: column;

      &.--exceeded {
        color: rgb(226, 65, 65);
        textarea {
          border-color:  rgb(226, 65, 65);
        }
        button { 
          background-color:  rgb(226, 65, 65);
          border: none;
          color: white
        }
      }
    } */
  }
  
  .user-profile__twoots-wrapper {
    display: grid;
    grid-gap: 10px;
  }
}

</style>
