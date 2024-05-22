import request from '@/utils/request'

export function queryLotteryTimes() {
  return request({
    url: '/roulette/queryLotteryTimes',
    method: 'get'
  })
}
