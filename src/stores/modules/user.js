//persist: true,
//https://www.modb.pro/db/624215  持久化
import * as user from '@/api/user'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
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
    login(userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        user
          .login({ username: username.trim(), password: password })
          .then((response) => {
            console.log('winnerShow : ', response)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  },
  persist: {
    storage: window.sessionStorage
  }
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
// }
