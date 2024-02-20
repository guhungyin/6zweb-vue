import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/assets/css/reset.css';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '@/assets/css/main.css';



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')

