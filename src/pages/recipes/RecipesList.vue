<template>
  <div class="pagebody">
    <!-- <div class="row"> -->
    <!-- <div class="col-md-8 mx-auto"> -->
    <h2 class="text-center pagetitle">Meine Rezepte</h2>
    <div v-if="hasRecipes" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 g-4">
      <recipe-item
        v-for="recipe in recipes"
        :key="recipe.id"
        :id="recipe.id"
        :category="recipe.category"
        :ingredients="recipe.ingredients"
        :preparationSteps="recipe.preparationSteps"
        :notes="recipe.notes"
        :nrServings="recipe.nrServings"
        :title="recipe.title"
        :description="recipe.description"
      ></recipe-item>
    </div>
    <h1 v-else>Du hast noch keine Rezepte erstellt :(</h1>
    <!-- </div> -->
  </div>
</template>

<script>
import RecipeItem from '../../components/recipes/RecipeItem.vue';
export default {
  components: { RecipeItem },
  computed: {
    recipes() {
      return this.$store.getters['recipes/recipes'];
    },
    hasRecipes() {
      return this.$store.getters['recipes/hasRecipes'];
    },
  },
  created() {
    this.loadRecipes();
  },
  methods: {
    async loadRecipes() {
        await this.$store.dispatch('recipes/loadRecipes');
    },
  }
};
</script>

<style scoped>
/* .pagetitle {
    margin: 2%;
}

.pagebody {
    margin: 2%;
} */
</style>