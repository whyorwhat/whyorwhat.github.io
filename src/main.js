import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "./assets/buttons.scss";

import 'bootstrap/dist/css/bootstrap.min.css';      // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

import FontAwesomeIcon from '@/utilities/fontawesome-icons.js';

const app = createApp(App);
app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');