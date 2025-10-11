import './app/style.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './app/app.vue';
import router from '@/app/routers/router.ts';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const app = createApp(App);

app.component('VueDatePicker', VueDatePicker);
app.use(createPinia());
app.use(router);

app.mount('#app');
