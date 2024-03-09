import * as pay from '@/api/pay'
import { defineStore } from 'pinia'

export const usePayStore = defineStore('pay', {
  actions: {
    async payChannel() {
      return new Promise((resolve, reject) => {
        pay
          .payChannel()
          .then((response) => {
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    async toPay(data) {
      return new Promise((resolve, reject) => {
        pay
          .toPay(data)
          .then((response) => {
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
})
