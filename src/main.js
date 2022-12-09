import { createApp } from 'vue';
import App from '@/App';
import Btn from '@/components/Btn';
import store from '@/store';
import router from '@/routes';

const app = createApp(App);
app.component('Btn', Btn);
app.use(store);
app.use(router);
app.mount('#app');
