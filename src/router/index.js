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
      path: '/deposit',
      name: 'deposit',
      component: () => import('../views/DepositView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/gameBets',
      name: 'gameBets',
      component: () => import('../views/GameBetsView.vue')
    },
    {
      path: '/cashback',
      name: 'cashback',
      component: () => import('../views/CashbackView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/downloadApp',
      name: 'downloadApp',
      component: () => import('../views/DownloadAppView.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/HelpView.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../views/MessageView.vue')
    },
    {
      path: '/promotions',
      name: 'promotions',
      component: () => import('../views/PromotionsView.vue')
    },
    {
      path: '/resetPhone',
      name: 'resetPhone',
      component: () => import('../views/ResetPhoneView.vue')
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: () => import('../views/ChangePasswordView.vue')
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: () => import('../views/WithdrawView.vue')
    },
    {
      path: '/bets',
      name: 'bets',
      component: () => import('../views/BetsView.vue')
    },
    {
      path: '/preventLaunderMoney',
      name: 'preventLaunderMoney',
      component: () => import('../views/PreventLaunderMoneyView.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/TermsView.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/PrivacyView.vue')
    },
    {
      path: '/exclusionPolicy',
      name: 'exclusionPolicy',
      component: () => import('../views/ExclusionPolicyView.vue')
    },
    {
      path: '/gamingPolicy',
      name: 'gamingPolicy',
      component: () => import('../views/GamingPolicyView.vue')
    },
    {
      path: '/responsible',
      name: 'responsible',
      component: () => import('../views/ResponsibleView.vue')
    },
    {
      path: '/termsSports',
      name: 'termsSports',
      component: () => import('../views/TermsSportsView.vue')
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: () => import('../views/TransactionsView.vue')
    },
    {
      path: '/certification',
      name: 'certification',
      component: () => import('../views/CertificationPhone.vue')
    },
    {
      path: '/play',
      name: 'play',
      component: () => import('../views/PlayGameView.vue')
    },
    {
      path: '/cashwheel',
      name: 'cashwheel',
      component: () => import('../views/CashWheelView.vue')
    },
  ]
})

router.afterEach((to, from, failure) => {
  window.scrollTo(0, 0)
})

export default router
