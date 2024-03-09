import request from '@/utils/request'

export function toPay(data) {
  return request({
    url: 'pay/toPay',
    method: 'post',
    data
  })
}

export function payChannel() {
  return request({
    url: 'pay/payChannel',
    method: 'get'
  })
}
