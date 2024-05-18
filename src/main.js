import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
// import { useRegisterSW } from 'virtual:pwa-register/vue'
import VueLuckyCanvas from '@lucky-canvas/vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { pinia } from './stores'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
// import QRCodePlugin from 'qrcode'
// useRegisterSW()
// pwa
//https://www.enjoytoday.cn/2024/02/13/%E4%B8%80%E5%91%A8%E4%B8%80%E8%8D%90-vite-plugin-pwa-%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85vite%E5%BA%94%E7%94%A8/

const app = createApp(App)
// const pinia = createPinia()
pinia.use(createPersistedState())
app.use(pinia)
app.use(VueAxios, axios)
app.use(router)
app.use(VueLuckyCanvas)
// app.use(QRCodePlugin)
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app')

//https://blog.csdn.net/qq_36901092/article/details/127788443
//快速创建一个vite + router + store + axios + element-plus的vue3项目

//https://blog.csdn.net/weixin_44624120/article/details/128819797
//pinia store 分模块
//https://blog.csdn.net/Steven_Son/article/details/135553816
