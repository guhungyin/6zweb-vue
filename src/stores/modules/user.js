//persist: true,
//https://www.modb.pro/db/624215  持久化
import * as user from '@/api/user'
import BigNumber from 'bignumber.js'
import { defineStore } from 'pinia'
// import moment from 'moment-timezone'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      id: 1,
      ticket: '',
      nickName: '',
      mobile: '*********',
      email: '',
      money: '0.00',
      vipLevel: 0,
      promotionTotalCommission: 0,
      source: '',
      availableWithdrawalMoney: 0,
      completedBetAmount: 0,
      targetBetAmount: 0,
      cashbackMax: '25%',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      deviceId: '',
      promotionCommission: {
        totalBetCount: '0.00',
        balanceCommission: 0.0,
        todayCommissionCount: '0.00',
        todayPayCount: 0,
        todayRegCount: 0,
        totalRegCount: 0,
        totalPayCount: 0,
        withdrawalCommission: '0.00',
        totalCommissionCount: '0.00',
        todayBetCount: '0.00'
      },
      cashbackInfo: {
        vipLevel: 1,
        betAmount: 0,
        claimOk: false,
        nextVipLevel: 2,
        claim: '2024-05-13 06:00:00~2024-05-17 23:59:59',
        progress: 0,
        minRate: '13%',
        maxRate: '25%',
        cycle: '2024-05-06 00:00:00~2024-05-12 23:59:59',
        nextBetAmount: 5000,
        vipCondition: [
          { vipLevel: 1, rebate: '13%', requireBetAmount: '0+ BRL' },
          { vipLevel: 2, rebate: '14%', requireBetAmount: '5000+ BRL' },
          { vipLevel: 3, rebate: '15%', requireBetAmount: '20000+ BRL' },

          { vipLevel: 4, rebate: '16%', requireBetAmount: '80000+ BRL' },
          { vipLevel: 5, rebate: '17%', requireBetAmount: '400000+ BRL' },
          { vipLevel: 6, rebate: '18%', requireBetAmount: '1200000+ BRL' },
          { vipLevel: 7, rebate: '19%', requireBetAmount: '5000000+ BRL' },
          { vipLevel: 8, rebate: '20%', requireBetAmount: '15000000+ BRL' },
          { vipLevel: 9, rebate: '21%', requireBetAmount: '30000000+ BRL' },
          { vipLevel: 10, rebate: '25%', requireBetAmount: '60000000+ BRL' }
        ]
      }
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
            this.vipLevel = response.data.vipLevel

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
    userInfo() {
      return new Promise((resolve, reject) => {
        user
          .userInfo()
          .then((response) => {
            this.id = response.data.id
            this.nickName = response.data.nickName

            if (
              response.data.mobile &&
              response.data.mobile !== '' &&
              response.data.mobile !== 'null'
            ) {
              this.mobile = response.data.mobile
            }
            this.email = response.data.email
            this.vipLevel = response.data.vipLevel
            let bgMoney = new BigNumber(response.data.money)
            this.money = new BigNumber(bgMoney.div(10000).toFixed(2, 1)).toFormat(2)
            this.cashbackMax = response.data.cashbackMax
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    cashback() {
      return new Promise((resolve, reject) => {
        user
          .cashback()
          .then((res) => {
            if (res.code === 0) {
              let temp = res.data.vipCondition.sort((a, b) => {
                return a.vipLevel - b.vipLevel
              })

              res.data.vipCondition = temp
              this.cashbackInfo = res.data
            }
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    logout() {
      return new Promise((resolve, reject) => {
        user
          .logout()
          .then((res) => {
            if (res.code === 0) {
              window.sessionStorage.removeItem('user')
              window.sessionStorage.removeItem('common')
            }
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    clearUserInfo() {
      this.id = 1
      this.ticket = ''
      this.nickName = ''
      this.mobile = '*********'
      this.email = ''
      this.money = '0.00'
      this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      this.deviceId = ''
      this.vipLevel = 0
      this.promotionTotalCommission = 0
      this.source = ''
      this.availableWithdrawalMoney = 0
      this.completedBetAmount = 0
      this.targetBetAmount = 0
      this.cashbackMax = '25%'
      this.promotionCommission = {
        totalBetCount: '0.00',
        balanceCommission: 0.0,
        todayCommissionCount: '0.00',
        todayPayCount: 0,
        todayRegCount: 0,
        totalRegCount: 0,
        totalPayCount: 0,
        withdrawalCommission: '0.00',
        totalCommissionCount: '0.00',
        todayBetCount: '0.00'
      }
      this.cashbackInfo = {
        vipLevel: 1,
        betAmount: 0,
        claimOk: false,
        nextVipLevel: 2,
        claim: '2024-05-13 06:00:00~2024-05-17 23:59:59',
        progress: 0,
        minRate: '13%',
        maxRate: '25%',
        cycle: '2024-05-06 00:00:00~2024-05-12 23:59:59',
        nextBetAmount: 5000,
        vipCondition: [
          { vipLevel: 1, rebate: '13%', requireBetAmount: '0+ BRL' },
          { vipLevel: 2, rebate: '14%', requireBetAmount: '5000+ BRL' },
          { vipLevel: 3, rebate: '15%', requireBetAmount: '20000+ BRL' },

          { vipLevel: 4, rebate: '16%', requireBetAmount: '80000+ BRL' },
          { vipLevel: 5, rebate: '17%', requireBetAmount: '400000+ BRL' },
          { vipLevel: 6, rebate: '18%', requireBetAmount: '1200000+ BRL' },
          { vipLevel: 7, rebate: '19%', requireBetAmount: '5000000+ BRL' },
          { vipLevel: 8, rebate: '20%', requireBetAmount: '15000000+ BRL' },
          { vipLevel: 9, rebate: '21%', requireBetAmount: '30000000+ BRL' },
          { vipLevel: 10, rebate: '25%', requireBetAmount: '60000000+ BRL' }
        ]
      }
    },
    claimRebate(params) {
      return new Promise((resolve, reject) => {
        user
          .claimRebate(params)
          .then((res) => {
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
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
              this.availableWithdrawalMoney = res.data.availableWithdrawalMoney
              this.targetBetAmount = res.data.targetBetAmount
              this.completedBetAmount = res.data.completedBetAmount
            }

            resolve(res)
          })
          .catch((err) => {
            console.log('查询钱包可提现金额错误:', err)
            reject(err)
          })
      })
    },

    async queryQromotionCommission() {
      return new Promise((resolve, reject) => {
        user
          .promotionCommission()
          .then((res) => {
            if (res.code === 0) {
              this.promotionCommission = res.data
            }
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    async withdrawalCommission() {
      return new Promise((resolve, reject) => {
        user
          .withdrawalCommission()
          .then((res) => {
            if (res.code === 0) {
              this.promotionCommission = res.data
            }
            resolve(res)
          })
          .catch((error) => {
            reject(error)
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
