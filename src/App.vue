<template>
  <the-header @sign-out="signOut"></the-header>
  <router-view></router-view>
  <!-- <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view> -->
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
export default {
  components: {
    TheHeader,
  },
  methods: {
    async signOut() {
      try {
        await signOut(getAuth());
        this.$store.dispatch('userSignOut');
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    console.log('mounted');
    let auth;
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        this.$store.dispatch('userLogIn');
      } else {
        this.$store.dispatch('userSignOut');
      }
    });
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.pagetitle {
  margin: 2%;
}

.pagebody {
  margin: 2%;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>