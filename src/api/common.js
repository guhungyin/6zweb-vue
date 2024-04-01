import request from '@/utils/request'

export function getWinnerShow() {
  return request({
    url: 'lobby',
    method: 'get'
  })
}

export function goodsList(type) {
  return request({
    url: 'goods/list/' + type,
    method: 'get'
  })
}

export function gameList() {
  return request({
    url: '/game/list/web',
    method: 'get'
  })
}

export function hostList() {
  return request({
    url: '/game/hostList',
    method: 'get'
  })
}

// 游戏模块
export function gameLogin(loginUrl) {
  return request({
    // url: '/vue-admin-template/user/login',
    url: loginUrl,
    method: 'get'
  })
}
