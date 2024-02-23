import request from '@utils/request'

export function getWinnerShow() {
    return request({
        // url: '/vue-admin-template/user/login',
        url: '/user/login',
        method: 'get'
      })
}