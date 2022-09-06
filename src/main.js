import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
// import axios from 'axios';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqlSP9-eeLBBwnLvYJOx_DarAniPbsLRE",
  authDomain: "myfavoriterecipes-f1fe6.firebaseapp.com",
  databaseURL: "https://myfavoriterecipes-f1fe6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myfavoriterecipes-f1fe6",
  storageBucket: "myfavoriterecipes-f1fe6.appspot.com",
  messagingSenderId: "569261900831",
  appId: "1:569261900831:web:5c906bbb4cb62e365bc12a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHourglass } from '@fortawesome/free-regular-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faShapes } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faRightToBracket);
library.add(faRightFromBracket);
library.add(faUser);
library.add(faHourglass);
library.add(faUtensils);
library.add(faShapes);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.use(store);

app.mount('#app');
