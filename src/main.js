import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';
import './assets/css/main.css'

router.afterEach((to, from, failure) => {
  window.scrollTo(0,0);
});

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')

