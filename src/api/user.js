import request from '@/utils/request'

export function login(data) {
  return request({
    // url: '/vue-admin-template/user/login',
    url: '/user/login',
    method: 'post',
    data
  })
}

export function resetPassword(data) {
  return request({
    // url: '/vue-admin-template/user/login',
    url: '/user/resetPassword',
    method: 'post',
    data
  })
}
