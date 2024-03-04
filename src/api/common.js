import request from '@/utils/request'

export function getWinnerShow() {
  return request({
    url: 'lobby',
    method: 'get'
  })
}
