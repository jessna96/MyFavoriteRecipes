<template>
  <div class="d-flex justify-content-center pagebody">
    <div class="card" style="width: 70%">
      <h5 class="card-header">Neues Rezept anlegen</h5>
      <div class="card-body">
        <div>
          <form @submit.prevent="saveRecipe">
            <div class="container">
              <div class="row gy-4">
                <div>
                  <input
                    type="text"
                    name="title"
                    class="form-control"
                    id="name"
                    placeholder="Rezeptname"
                    v-model.trim="recipeName"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="nrServings"
                    class="form-control"
                    id="nrServings"
                    placeholder="Portionen"
                    v-model="nrServings"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="preparationTime"
                    class="form-control"
                    id="preparationTime"
                    placeholder="Zubereitungszeit in Minuten"
                    v-model="preparationTime"
                  />
                </div>
                <div>
                  <select
                    class="form-select"
                    id="category"
                    name="category"
                    v-model="category"
                  >
                    <option selected disabled :value="null">
                      Kategorie wählen...
                    </option>
                    <option
                      v-for="category in categoriesList"
                      :key="category"
                      :name="category"
                    >
                      {{ category }}
                    </option>
                  </select>
                </div>
                <div>
                  <select
                    class="form-select"
                    id="rubric"
                    name="rubric"
                    v-model="rubrics"
                    multiple
                    aria-label="multiple"
                  >
                    <option selected disabled :value="null">
                      Rubriken wählen...
                    </option>
                    <option
                      v-for="rubric in rubricList"
                      :key="rubric"
                      :name="rubric"
                    >
                      {{ rubric }}
                    </option>
                  </select>
                </div>
                <div>
                  <h5 class="text-left" style="padding-bottom: 1%">
                    <u>Zutaten</u>
                  </h5>
                  <div
                    class="row justify-content-evenly"
                    v-for="(ingredient, index) in ingredients"
                    :key="ingredient"
                    style="margin-bottom: 5px"
                  >
                    <div class="col-5">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Zutat"
                        name="ingredient"
                        id="ingredient"
                        v-model="ingredient.name"
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Menge"
                        name="amount"
                        v-model="ingredient.amount"
                      />
                    </div>
                    <div class="col">
                      <select
                        class="form-select"
                        id="unit"
                        name="unit"
                        v-model="ingredient.unit"
                      >
                        <option selected disabled :value="null">
                          Einheit wählen...
                        </option>
                        <option
                          v-for="unit in unitList"
                          :key="unit.short"
                          :name="unit.short"
                        >
                          {{ unit.long }}
                        </option>
                      </select>
                    </div>
                    <div class="col">
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="deleteIngredientFromList(index)"
                      >
                        Löschen
                      </button>
                    </div>
                  </div>
                  <div class="d-flex justify-content-left">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="addIngredient"
                      style="margin: 0"
                    >
                      Zutat hinzufügen
                    </button>
                  </div>
                </div>
                <div>
                  <h5 class="text-left" style="padding-bottom: 1%">
                    <u>Zubereitungsschritte</u>
                  </h5>
                  <div
                    class="row"
                    v-for="(step, index) in preparationSteps"
                    :key="step.number"
                    style="margin-bottom: 5px"
                  >
                    <div class="col-10">
                      <input
                        type="text"
                        class="form-control"
                        :placeholder="'Schritt ' + step.number"
                        name="step"
                        v-model="step.description"
                      />
                    </div>
                    <div class="col">
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="deleteStepFromList(index)"
                      >
                        Löschen
                      </button>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="addPreparationStep"
                      style="margin: 0"
                    >
                      Schritt hinzufügen
                    </button>
                  </div>
                </div>
                <div>
                  <textarea
                    name="notes"
                    class="form-control"
                    id="notes"
                    rows="3"
                    placeholder="Notizen / Anmerkungen"
                    v-model="notes"
                  ></textarea>
                </div>
                <div>
                  <textarea
                    name="description"
                    class="form-control"
                    id="description"
                    rows="3"
                    placeholder="Beschreibung"
                    v-model="description"
                  ></textarea>
                </div>
                <!-- <div class="mb-3">
                <b-form-file
                  v-model="file"
                  :state="Boolean(file)"
                  placeholder="Choose a file or drop it here..."
                  drop-placeholder="Drop file here..."
                ></b-form-file>
              </div> -->
                <!-- <input type="file" @change="onFileSelected"/>
              <button @click="onUpload">Upload image</button> -->
                <div>
                  <button
                    type="submit"
                    class="btn btn-success"
                    style="margin: 0"
                  >
                    Speichern
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipeName: '',
      nrServings: '',
      category: null,
      rubrics: [],
      preparationTime: null,
      description: '',
      ingredients: [
        {
          name: '',
          amount: '',
          unit: null,
        },
      ],
      preparationSteps: [
        {
          number: 1,
          description: '',
        },
      ],
      nrSteps: 1,
      notes: '',
      // file: null,
    };
  },
  computed: {
    categoriesList() {
      return this.$store.getters.categories;
    },
    rubricList() {
      return this.$store.getters.rubrics;
    },
    unitList() {
      return this.$store.getters.units;
    },
  },
  methods: {
    // onFileSelected(event) {
    //   console.log(event);
    // },
    // onUpload() {

    // },
    saveRecipe() {
      const formRecipeData = {
        title: this.recipeName,
        nrServings: this.nrServings,
        category: this.category,
        ingredients: this.ingredients,
        preparationSteps: this.preparationSteps,
        notes: this.notes,
        rubrics: this.rubrics,
        description: this.description,
        preparationTime: this.preparationTime,
      };

      this.$store.dispatch('recipes/addRecipe', formRecipeData);
      this.$router.push('recipes');

    },
    addIngredient() {
      this.ingredients.push({ name: '', amount: '', unit: null });
    },
    deleteIngredientFromList(index) {
      this.ingredients.splice(index, 1);
    },
    addPreparationStep() {
      this.nrSteps += 1;
      this.preparationSteps.push({ number: this.nrSteps, description: '' });
    },
    deleteStepFromList(index) {
      this.nrSteps -= 1;
      this.preparationSteps.splice(index, 1);
      for (let i = 0; i < this.preparationSteps.length; i++) {
        this.preparationSteps[i].number = i + 1;
      }
    },
  },
};
</script>

<style scoped>
</style>