//persist: true,
//https://www.modb.pro/db/624215  持久化
import * as user from '@/api/user'
import BigNumber from 'bignumber.js'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      id: 0,
      ticket: '',
      nickName: '',
      mobile: '',
      email: '',
      money: '',
      vipLevel: 0,
      promotionTotalCommission: 0
    }
  },
  actions: {
    login(userInfo) {
      const { mobile, password, source } = userInfo
      return new Promise((resolve, reject) => {
        user
          .login({ mobile: mobile, password: password.trim(), source: source.trim() })
          .then((response) => {
            console.log('winnerShow : ', response)
            this.id = response.data.id
            this.ticket = response.data.ticket
            this.nickName = response.data.nickName
            this.mobile = response.data.mobile
            this.email = response.data.email

            let bgMoney = new BigNumber(response.data.money)
            this.money = new BigNumber(bgMoney.div(10000).toFixed(2, 1)).toFormat(2)
            console.log('登录成功: 余额：', this.money)
            resolve(response)
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
