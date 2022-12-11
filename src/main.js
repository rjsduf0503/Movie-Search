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

import RingLoader from 'vue-spinner/src/RingLoader';

import { createApp } from 'vue';
import App from '@/App';
import store from '@/store';
import router from '@/routes';
import Modal from '@/components/Modal';
import Loading from '@/components/Loading';

const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.component('RingLoader', RingLoader);
app.component('Modal', Modal);
app.component('Loading', Loading);
app.use(store);
app.use(router);
app.mount('#app');
