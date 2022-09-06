import { createStore } from 'vuex';
import recipesModule from './modules/recipes/index.js';
import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

const store = createStore({
    modules: {
        recipes: recipesModule
    },
    state() {
        return {
            isLoggedIn: true,
            categories: [
                'Frühstück',
                'Hauptgericht',
                'Dessert',
                'Snack',
                'Vorspeise',
                'Salat',
                'Smoothie',
                'Brot',
                'Brötchen',
                'Süßes Gebäck',
                'Herzhaftes Gebäck',
                'Soße',
                'Aufstrich',
                'Dip',
                'Marmelade',
                'Cocktail',
                'Likör',
                'Bowle',
                'Sonstiges'
            ],
            units: [
                {
                    long: 'Liter',
                    short: 'l'
                },
                {
                    long: 'Milliliter',
                    short: 'ml'
                },
                {
                    long: 'Gramm',
                    short: 'g'
                },
                {
                    long: 'Kilogramm',
                    short: 'kg'
                },
                {
                    long: 'Teelöffel',
                    short: 'TL'
                },
                {
                    long: 'Esslöffel',
                    short: 'EL'
                },
                {
                    long: 'Prise',
                    short: 'Pr'
                },
                {
                    long: 'Dose',
                    short: 'Do'
                },
                {
                    long: 'Stück',
                    short: 'Stk'
                },
                {
                    long: 'Päckchen',
                    short: 'Pck'
                },
            ],
            rubrics: [
                'Vegan',
                'Vegetarisch',
                'Low carb',
                'Paleo',
                'Glutenfrei',
                'Laktosefrei',
                'Eiweißreich',
                'Ballaststoffreich',
                'Fettarm',
                'Wenig Zucker',
                'Ohne raffinierten Zucker',
                'Fleisch',
                'Fisch',
            ]
        };
    },
    getters,
    actions,
    mutations,
});

export default store;