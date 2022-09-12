import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            recipes: [
                // {
                //     id: 'r1',
                //     title: 'Gemüseeintopf',
                //     nrServings: 2,
                //     category: 'Hauptspeise',
                //     description: 'Die veganen Nuggets gehen super schnell und sind perfekt für eine proteinreiche Beilage oder Mahlzeit!',
                //     dateOfCreation: Date(),
                //     rubrics: ['Vegan', 'Low carb'],
                //     preparationTime: 30, //in minutes
                //     ingredients: [
                //         {
                //             name: 'Tomate',
                //             amount: '2',
                //             unit: 'Stk'
                //         },
                //         {
                //             name: 'Reis',
                //             amount: '30',
                //             unit: 'Gramm'
                //         }
                //     ],
                //     preparationSteps: [
                //         {
                //             number: 1,
                //             description: 'drgdgrd',
                //         },
                //         {
                //             number: 2,
                //             description: 'drgddskldfj jfs jefoöas jfgrd',
                //         },
                //     ],
                //     notes: 'Notizen zum Rezept',
                // },
                // {
                //     id: 'r2',
                //     title: 'Paella',
                //     nrServings: 3,
                //     category: 'Hauptspeise',
                //     ingredients: [
                //         {
                //             name: 'Nudeln',
                //             amount: '200g',
                //             unit: 'Gramm'
                //         },
                //         {
                //             name: 'Zucchini',
                //             amount: '30',
                //             unit: 'Gramm'
                //         }
                //     ],
                //     preparationSteps: [
                //         {
                //             number: 1,
                //             description: 'drgdgrd',
                //         },
                //         {
                //             number: 2,
                //             description: 'drgddskldfj jfs jefoöas jfgrd',
                //         },
                //     ],
                //     notes: 'Notizen zum Paella Rezept',
                // }
            ],
        };
    },
    mutations,
    actions,
    getters,
};