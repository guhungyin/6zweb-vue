import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { piniaPluginPersistedstate } from 'pinia-plugin-persistedstate'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '@/assets/css/main.css';

const store = createPinia()
store.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(store)
app.use(VueAxios, axios)
app.use(router)
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app')

