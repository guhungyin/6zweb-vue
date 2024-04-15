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

export function retrievePassword(data) {
  return request({
    // url: '/vue-admin-template/user/login',
    url: '/user/retrievePassword',
    method: 'post',
    data
  })
}

export function bindingPhone(data) {
  return request({
    // url: '/vue-admin-template/user/login',
    url: '/user/setPhone',
    method: 'post',
    data
  })
}

export function sendSms(urlParams) {
  return request({
    url: 'user/sendSms/' + urlParams,
    method: 'get'
  })
}

export function register(data) {
  return request({
    // url: '/vue-admin-template/user/login',
    url: '/user/register',
    method: 'post',
    data
  })
}

export function walletDetails() {
  return request({
    url: '/user/walletDetails',
    method: 'get'
  })
}
