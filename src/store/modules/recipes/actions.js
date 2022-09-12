export default {
    async addRecipe(context, data) {

        const recipeData = {
            // id: new Date().toISOString(),
            title: data.title,
            nrServings: data.nrServings,
            category: data.category,
            ingredients: data.ingredients,
            preparationSteps: data.preparationSteps,
            notes: data.notes,
            rubrics: data.rubrics,
            description: data.description,
            preparationTime: data.preparationTime,
            dateOfCreation: new Date(),
        };

        const response = await fetch('https://myfavoriterecipes-f1fe6-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', {
            method: 'POST', //'PUT' would overwrite the data 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipeData)
        });

        //const responseData = await response.json();

        if (!response.ok) {
            // error ...
        }



        context.commit('addRecipe', recipeData);
    },
    async loadRecipes(context) {
        const response = await fetch(
          `https://myfavoriterecipes-f1fe6-default-rtdb.europe-west1.firebasedatabase.app/recipes.json`
        );
        const responseData = await response.json();
    
        if (!response.ok) {
            //do something
        }
    
        const recipes = [];
    
        for (const key in responseData) {
          const recipe = {
            id: key,
            title: responseData[key].title,
            nrServings: responseData[key].nrServings,
            category: responseData[key].category,
            ingredients: responseData[key].ingredients,
            preparationSteps: responseData[key].preparationSteps,
            notes: responseData[key].notes,
            rubrics: responseData[key].rubrics,
            description: responseData[key].description,
            preparationTime: responseData[key].preparationTime,
            dateOfCreation: responseData[key].dateOfCreation,
          };
          recipes.push(recipe);
        }
        // console.log(recipes);
        context.commit('setRecipes', recipes);
      }
};
