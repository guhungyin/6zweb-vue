import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        index: 0
      }
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: () => import('@/views/DepositView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/gameBets',
      name: 'gameBets',
      component: () => import('@/views/GameBetsView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/cashback',
      name: 'cashback',
      component: () => import('@/views/CashbackView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/downloadApp',
      name: 'downloadApp',
      component: () => import('@/views/DownloadAppView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('@/views/HelpView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('@/views/MessageView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/promotions',
      name: 'promotions',
      component: () => import('@/views/PromotionsView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/resetPhone',
      name: 'resetPhone',
      component: () => import('@/views/ResetPhoneView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: () => import('@/views/ChangePasswordView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: () => import('@/views/WithdrawView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/bets',
      name: 'bets',
      component: () => import('@/views/BetsView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/preventLaunderMoney',
      name: 'preventLaunderMoney',
      component: () => import('@/views/aboutPage/PreventLaunderMoneyView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('@/views/aboutPage/TermsView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('@/views/aboutPage/PrivacyView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/exclusionPolicy',
      name: 'exclusionPolicy',
      component: () => import('@/views/aboutPage/ExclusionPolicyView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/gamingPolicy',
      name: 'gamingPolicy',
      component: () => import('@/views/aboutPage/GamingPolicyView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/responsible',
      name: 'responsible',
      component: () => import('@/views/aboutPage/ResponsibleView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/termsSports',
      name: 'termsSports',
      component: () => import('@/views/TermsSportsView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: () => import('@/views/TransactionsView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/certification',
      name: 'certification',
      component: () => import('@/views/CertificationPhone.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/play',
      name: 'play',
      component: () => import('@/views/PlayGameView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/partnerGame',
      name: 'partnerGame',
      component: () => import('@/views/PartnerGameView.vue'),
      meta:{
        index: 2
      }
    },
    {
      path: '/cashwheel',
      name: 'cashwheel',
      component: () => import('@/views/CashWheelView.vue'),
      meta:{
        index: 1
      }
    },
    {
      path: '/cash',
      name: 'cash',
      component: () => import('@/views/CashView.vue'),
      meta:{
        index: 2
      }
    },
    {
      path: '/affiliate',
      name: 'affiliate',
      component: () => import('@/views/affiliateView.vue'),
      meta:{
        index: 1
      },
    }
  ]
})

router.afterEach((to, from, failure) => {
  window.scrollTo(0, 0)
})

export default router
