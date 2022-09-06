<template>
  <div>
    <div v-if="error">{{ error.message }}</div>
    <form @submit.prevent="userLogin">
      Anmelden
      <div>
        <input type="email" v-model="email" placeholder="E-Mail-Adresse" />
      </div>
      <div>
        <input type="password" v-model="password" placeholder="Passwort" />
      </div>
      <button type="submit">Anmelden</button>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async userLogin() {
      try {
        const user = await signInWithEmailAndPassword(
          getAuth(),
          this.email,
          this.password
        );
        console.log(user);
        this.$store.dispatch('userLogIn');
        this.$router.push('recipes');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>
