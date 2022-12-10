import '@/styles/normalize.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faSearch);

import { createApp } from 'vue';
import App from '@/App';
import store from '@/store';
import router from '@/routes';

const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.use(store);
app.use(router);
app.mount('#app');
