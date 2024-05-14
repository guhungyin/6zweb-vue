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

export function claimRebate(params) {
  return request({
    url: '/user/claimRebate',
    method: 'post',
    params
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

export function userInfo() {
  return request({
    url: '/user/userInfo',
    method: 'get'
  })
}

export function cashback() {
  return request({
    url: '/user/cashback',
    method: 'get'
  })
}

export function promotionCommission() {
  return request({
    url: '/user/promotionCommission',
    method: 'get'
  })
}

export function withdrawalCommission() {
  return request({
    url: '/user/withdrawalCommission',
    method: 'get'
  })
}

export function register(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    // url: '/vue-admin-template/user/login',
    url: '/user/logout',
    method: 'post'
  })
}

export function walletDetails() {
  return request({
    url: '/user/walletDetails',
    method: 'get'
  })
}
