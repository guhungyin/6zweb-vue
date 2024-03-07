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
