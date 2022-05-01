import { createApp } from 'vue';
import App from './App.vue';
import Router from './routes';
import './index.css';
import Store from './Store';
import Toaster from "@meforma/vue-toaster";

const app = createApp(App);

app.use(Toaster);
app.use(Router);
app.use(Store);
app.mount('#app');
