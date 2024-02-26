//persist: true,
//https://www.modb.pro/db/624215  持久化
import user from '@/api/user'
import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => {
    return {
      id: 0,
      ticket: '',
      nickName: '',
      mobile: '',
      email: '',
      money: 0,
      vipLevel: 0,
      promotionTotalCommission: 0
    }
  },
  actions: {
    async login() {
      user.login()
    }
  },
  persist: {
    storage: window.sessionStorage
  }
})
