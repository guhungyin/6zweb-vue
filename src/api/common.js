import request from '@/utils/request'

export function getWinnerShow() {
  return request({
    url: 'lobby',
    method: 'get'
  })
}

export function goodsList() {
  return request({
    url: 'goods/list',
    method: 'get'
  })
}

export function gameList() {
  return request({
    url: '/game/list/web',
    method: 'get'
  })
}

export function lobby() {
  return request({
    url: '/game/lobby',
    method: 'get'
  })
}

export function hotList() {
  return request({
    url: '/game/hotList',
    method: 'get'
  })
}

export function byType(gameType) {
  return request({
    url: '/game/byType/' + gameType,
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

export function authentication(data) {
  return request({
    // url: '/vue-admin-template/user/login',
    url: '/evolution/authentication',
    method: 'post',
    data
  })
}
