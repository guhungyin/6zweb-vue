import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { register } from 'swiper/element/bundle';

import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';

import "./assets/css/main.css";

const app = createApp(App)
app.use(register)
app.use(createPinia())
app.use(router)
app.mount('#app')

