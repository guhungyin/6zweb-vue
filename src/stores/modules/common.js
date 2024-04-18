import * as common from '@/api/common'
import { defineStore } from 'pinia'

// https://blog.csdn.net/m0_56308072/article/details/134444531 pinia 使用
//https://www.modb.pro/db/624215 最新pinia 使用

export const useCommonStore = defineStore('common', {
  state: () => {
    return {
      playGame: {},
      selectGameType: 'Hot',
      selectProvedor: {},
      pgList: [],
      tadaList: [],
      evoList: [],
      referralList: []
    }
  },
  getters: {},
  actions: {
    setPlayGame(setPlayGame) {
      this.playGame = setPlayGame
    },
    setSelectGameType(gameType) {
      this.selectGameType = gameType
    },
    async getWinnerShow() {
      return new Promise((resolve, reject) => {
        common
          .getWinnerShow()
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    async getGameList() {
      return new Promise((resolve, reject) => {
        common
          .gameList()
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    async hotList() {
      return new Promise((resolve, reject) => {
        common
          .hotList()
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    async lobby() {
      return new Promise((resolve, reject) => {
        common
          .lobby()
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    async websiteConfig() {
      return new Promise((resolve, reject) => {
        common
          .websiteConfig()
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    async byType(gameType) {
      return new Promise((resolve, reject) => {
        common
          .byType(gameType)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    async goodsList() {
      return new Promise((resolve, reject) => {
        common
          .goodsList()
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            console.log('查询商品错误，common', error)
            reject(error)
          })
      })
    },

    // 游戏模块

    async gameLogin(url, data) {
      return new Promise((resolve, reject) => {
        common
          .gameLogin(url, data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            console.log('游戏登录错误，common', error)
            reject(error)
          })
      })
    },

    async authentication(data) {
      return new Promise((resolve, reject) => {
        common
          .authentication(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            console.log('EVO 游戏登录错误，common', error)
            reject(error)
          })
      })
    }
  },
  persist: {
    storage: window.sessionStorage
  }
})
