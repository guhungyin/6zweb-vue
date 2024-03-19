import * as common from '@/api/common'
import { defineStore } from 'pinia'

// https://blog.csdn.net/m0_56308072/article/details/134444531 pinia 使用
//https://www.modb.pro/db/624215 最新pinia 使用

export const useCommonStore = defineStore('common', {
  state: () => {
    return {
      playGame: {}
    }
  },
  getters: {},
  actions: {
    setPlayGame(setPlayGame) {
      this.playGame = setPlayGame
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

    async goodsList(type) {
      return new Promise((resolve, reject) => {
        common
          .goodsList(type)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            console.log('查询商品错误，common', error)
            reject(error)
          })
      })
    }
  }
})
