import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Deposit',
      name: 'Deposit',
      component: () => import('../views/DepositView.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/GameBets',
      name: 'GameBets',
      component: () => import('../views/GameBetsView.vue')
    },
    {
      path: '/Cashback',
      name: 'Cashback',
      component: () => import('../views/CashbackView.vue')
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    },
  ]
})

export default router
