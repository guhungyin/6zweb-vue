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
      mobile: '*********',
      email: '',
      money: '',
      vipLevel: 0,
      promotionTotalCommission: 0,
      source: '',
      availableWithdrawalMoney: 0
    }
  },
  actions: {
    login(userInfo) {
      const { account, password, source } = userInfo
      return new Promise((resolve, reject) => {
        user
          .login({ account: account, password: password.trim(), source: source.trim() })
          .then((response) => {
            console.log('winnerShow : ', response)
            this.id = response.data.id
            this.ticket = response.data.ticket
            this.nickName = response.data.nickName

            if (
              response.data.mobile &&
              response.data.mobile !== '' &&
              response.data.mobile !== 'null'
            ) {
              this.mobile = response.data.mobile
            }
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
    },
    toLogin() {},
    async resetPassword(oldPwd, newPwd) {
      return new Promise((resolve, reject) => {
        user
          .resetPassword({ password: oldPwd, newPassword: newPwd })
          .then((res) => {
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    async bindingPhone(data) {
      return new Promise((resolve, reject) => {
        user
          .bindingPhone(data)
          .then((res) => {
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    async retrievePassword(data) {
      return new Promise((resolve, reject) => {
        user
          .retrievePassword(data)
          .then((res) => {
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    async sendSMS(urlParams) {
      return new Promise((resolve, reject) => {
        user
          .sendSms(urlParams)
          .then((res) => {
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    async register(userInfo) {
      return new Promise((resolve, reject) => {
        user
          .register(userInfo)
          .then((res) => {
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    async walletDetails() {
      return new Promise((resolve, reject) => {
        user
          .walletDetails()
          .then((res) => {
            if (res.code === 0) {
              this.availableWithdrawalMoney = 2562000 //res.data.availableWithdrawalMoney
            }

            resolve(res)
          })
          .catch((err) => {
            console.log('查询钱包可提现金额错误:', err)
            reject(err)
          })
      })
    },

    formatMoney(inputMoney) {
      if (inputMoney <= 0) {
        return '0.00'
      }
      let bgMoney = new BigNumber(inputMoney)
      return new BigNumber(bgMoney.div(10000).toFixed(2, 1)).toFormat(2)
    },
    multiplied(inputMoney, digit) {
      let x = new BigNumber(inputMoney)
      return x.times(digit)
    }
  },
  persist: {
    storage: window.sessionStorage
  }
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
// }
