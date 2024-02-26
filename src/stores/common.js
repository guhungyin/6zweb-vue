import common from '@/api/common'
import { defineStore } from 'pinia'

// https://blog.csdn.net/m0_56308072/article/details/134444531 pinia 使用
//https://www.modb.pro/db/624215 最新pinia 使用

export const commonStore = defineStore('common', {
  actions: {
    getWinnerShow() {
      return new Promise((resolve, reject) => {
        common.getWinnerShow()
      })
    }
  }
})
