<template>
  <div class="d-flex justify-content-center pagebody">
    <div class="card" style="width: 70%">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2" style="padding: 2%">
          <div class="col">
            <div>
              <h3>{{ selectedRecipe.title }}</h3>
              <h6 style="margin-bottom: 3%">{{ selectedRecipe.category }}</h6>
              <div class="row">
                <div class="col-1 text-center">
                  <font-awesome-icon icon="fa-regular fa-hourglass" />
                </div>
                <div class="col">
                  {{ selectedRecipe.preparationTime }} Minuten
                </div>
              </div>
              <div class="row">
                <div class="col-1 text-center">
                  <font-awesome-icon icon="fa-solid fa-utensils" />
                </div>
                <div class="col">{{ selectedRecipe.nrServings }} Portionen</div>
              </div>
              <div
                class="row"
                style="margin-bottom: 3%"
                v-if="!!selectedRecipe.rubrics"
              >
                <div class="col-1 text-center">
                  <font-awesome-icon icon="fa-solid fa-shapes" />
                </div>
                <div class="col">{{ rubricList }}</div>
              </div>
              <p v-if="!!selectedRecipe.description">
                {{ selectedRecipe.description }}
              </p>
            </div>
          </div>
          <div class="col">
            <img
              src="https://www.simply-vegan.org/wp/wp-content/uploads/2022/04/burrito_bowl_03_web.jpg"
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </div>
      <hr class="new1">
      <div class="card-body">
        <h5>Zutaten</h5>
        <ul>
          <li
            v-for="ingredient in selectedRecipe.ingredients"
            :key="ingredient.name"
          >
            {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
          </li>
        </ul>
        <h5>Anleitung</h5>
        <ol>
          <li
            v-for="step in selectedRecipe.preparationSteps"
            :key="step.nubmer"
          >
            {{ step.description }}
          </li>
        </ol>
        <h5 v-if="!!selectedRecipe.notes">Notizen / Anmerkungen</h5>
        <p v-if="!!selectedRecipe.notes">{{ selectedRecipe.notes }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedRecipe: null,
    };
  },
  computed: {
    rubricList() {
      let rubricString = '';
      const rubrics = this.selectedRecipe.rubrics;
      for (var i = 0; i < rubrics.length; i++) {
        if (i == rubrics.length - 1) {
          rubricString += rubrics[i];
        } else {
          rubricString = rubricString + rubrics[i] + ', ';
        }
      }
      return rubricString;
    },
  },
  methods: {},
  created() {
    this.selectedRecipe = this.$store.getters['recipes/recipes'].find(
      (recipe) => recipe.id === this.id
    );
  },
};
</script>

<style scoped>
hr.new1 {
  border-top: 1.5px dashed #343a40;
  background-color: transparent;
}
</style>