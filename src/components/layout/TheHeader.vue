<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"
          >My Favorite Recipes</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/recipes"
                >Meine Rezepte</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/newrecipes"
                >Neues Rezept</router-link
              >
            </li>
          </ul>
          <ul v-if="!isLoggedIn" class="nav navbar-nav navbar-right">
            <li>
              <router-link class="nav-link" to="/login">
                <font-awesome-icon icon="fa-solid fa-user" />
                Anmelden</router-link
              >
            </li>
            <li>
              <router-link class="nav-link" to="/register"
                ><font-awesome-icon icon="fa-solid fa-right-to-bracket" />
                Registrieren</router-link
              >
            </li>
          </ul>
          <ul v-else class="nav navbar-nav navbar-right">
            <li>
              <div class="nav-link" @click="signOut">
                <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
                Abmelden
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  emits: ['sign-out'],
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    signOut() {
      this.$emit('sign-out');
    },
  },
};
</script>

<style scoped>
/* header {
  width: 100%;
  height: 5rem;
  background-color: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
} */
</style>