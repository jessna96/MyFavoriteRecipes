import { createRouter, createWebHistory } from "vue-router";

import RecipesList from './pages/recipes/RecipesList.vue';
import RecipeDetails from './pages/recipes/RecipeDetails.vue';
import NewRecipe from './pages/recipes/NewRecipe.vue';
import NotFound from './pages/NotFound.vue';
import UserRegistration from './pages/user/UserRegistration.vue';
import UserLogin from './pages/user/UserLogin.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/recipes' },
        { path: '/recipes', component: RecipesList },
        { path: '/recipes/:id', component: RecipeDetails, props: true },
        { path: '/newrecipes', component: NewRecipe },
        // { path: '/editrecipes', component: null }, //maybe as a child in /recipes/:id
        { path: '/register', component: UserRegistration },
        { path: '/login', component: UserLogin },
        { path: '/:notFound(.*)', component: NotFound },
    ]
});

export default router;
