<template>
  <router-link :to="recipeDetailsLink">
    <div class="col">
      <div class="card h-100">
        <img
          src="https://www.simply-vegan.org/wp/wp-content/uploads/2022/04/burrito_bowl_03_web.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <!-- <p class="card-text">
            {{ description }}
          </p> -->
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: [
    'id',
    'title',
    'category',
    'nrServings',
    'ingredients',
    'preparationSteps',
    'notes',
    'description',
  ],
  computed: {
    recipeDetailsLink() {
      return this.$route.path + '/' + this.id; // /recipes/c1
    },
  },
};
</script>

<style scoped>
</style>