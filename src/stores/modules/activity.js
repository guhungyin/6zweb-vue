import * as activity from '@/api/activity'
import { defineStore } from 'pinia'

export const useActivityStore = defineStore('activity', {
  state: () => {
    return {
      showText: '1',
      logged: false
    }
  },
  actions: {
    async queryLotteryTimes() {
      return new Promise((resolve, reject) => {
        activity
          .queryLotteryTimes()
          .then((response) => {
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
