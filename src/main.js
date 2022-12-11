import '@/styles/normalize.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faSearch,
	faAngleRight,
	faAngleLeft,
	faAnglesRight,
	faAnglesLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add([faSearch, faAngleRight, faAngleLeft, faAnglesRight, faAnglesLeft]);

import { createApp } from 'vue';
import App from '@/App';
import store from '@/store';
import router from '@/routes';
import Modal from '@/components/Modal';

const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.component('Modal', Modal);
app.use(store);
app.use(router);
app.mount('#app');
