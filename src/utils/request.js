import axios from 'axios'
// import { Message } from 'element-ui'
import { pinia } from '@/stores'
import { useUserStore } from '@/stores/modules/user'
import * as bootstrap from 'bootstrap'

// import router from './router'
// import { getToken } from '@/utils/auth'

// const userStore = null

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // 'http://192.168.3.4:8083/backend/', // process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    const userStore = useUserStore(pinia)
    // console.log('====> userStore', userStore)
    if (userStore.ticket) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['token'] = userStore.ticket
    }
    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */

  (response) => {
    const res = response.data

    console.log('--------->> res', res, '--------- rquest url', response.config.url)

    if (res.code !== 0) {
      if (
        res.code === 10500012 &&
        response.config.url !== '/user/walletDetails' &&
        response.config.url !== 'goods/list' &&
        response.config.url !== '/user/promotionCommission' &&
        response.config.url !== '/user/cashback'
      ) {
        const userStore = useUserStore(pinia)
        userStore.$reset()
        setTimeout(async function () {
          window.location.href = `/login`
        }, 300)
        return
      } else if (
        '/user/login' !== response.config.url &&
        response.config.url !== '/user/walletDetails' &&
        response.config.url !== 'goods/list' &&
        response.config.url !== '/user/promotionCommission' &&
        response.config.url !== '/user/cashback'
      ) {
        var myModal = new bootstrap.Modal(document.getElementById('alertsModal'))
        document.getElementById('errorTips').innerHTML = res.msg
        myModal.show()

        setTimeout(async function () {
          myModal.hide()
        }, 3000)
      }

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   // to re-login
      //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
      //     confirmButtonText: 'Re-Login',
      //     cancelButtonText: 'Cancel',
      //     type: 'warning'
      //   }).then(() => {
      //     store.dispatch('user/resetToken').then(() => {
      //       location.reload()
      //     })
      //   })
      // }
      return Promise.reject(new Error(res.msg || 'Error')) //(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
