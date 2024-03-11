<script>
import '@/assets/css/deposit.css'
import CloseBtn from '../components/CloseBtn.vue'
import { useCommonStore } from '@/stores/modules/common'
import { usePayStore } from '@/stores/modules/pay'
import { ref } from 'vue'
export default {
  data() {
    return {
      goods: [],
      selectGoods: {},
      showPrice: '',
      channelData: [],
      payData: {}
    }
  },
  created() {
    this.queryGoods()
  },
  methods: {
    toggleActive(selectGoods, e) {
      this.isDisabled = false
      this.isActive = true
      this.selectGoods = selectGoods
      this.showPrice = selectGoods.showPrice
      this.payData.goodsId = selectGoods.id
      this.payData.price = selectGoods.price

      if (e.target.className) {
        let nodes = Array.from(document.getElementsByClassName('mb-3 py-2'))

        nodes.forEach((ne) => {
          if (Number.parseInt(ne.id) === selectGoods.id) {
            ne.className = ne.className + ' active'
          } else {
            ne.className = ne.className.replace(/ active/g, '')
          }
        })
      }
    },
    payChannel() {
      return new Promise((resolve, reject) => {
        this.payStore
          .payChannel()
          .then((response) => {
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
      //       https://api.wins888.club/platform/pay/payChannel
      // {
      //     "data": [
      //         {
      //             "channel": "pix_pay2",
      //             "channelName": "Canal de recarga 2",
      //             "weight": 2,
      //             "openFlag": "open",
      //             "walletAddress": null
      //         },
      //         {
      //             "channel": "USDT_TRC20",
      //             "channelName": "USDT/TRC20",
      //             "weight": 2,
      //             "openFlag": "open",
      //             "walletAddress": "TT2TQLncv7J8v28H6w96xUJiBxUco8kDAq"
      //         }
      //     ],
      //     "code": 0,
      //     "msg": "success",
      //     "total": null
      // }
    },
    async toPay() {
      this.isDisabled = true
      this.isActive = false

      const channel = await this.payChannel()

      if (channel.data) {
        this.channelData = channel.data

        this.channelData.forEach((e) => {
          if (e.channel.startsWith('pix_')) {
            this.payData.payChannel = e.channel
            console.log('channel id: ', e.channel, 'openFlag: ', e.openFlag)
            return false
          }

          return true
        })

        if (this.payData.payChannel) {
          this.payData.show = 'qrCode'
          this.payStore
            .toPay(this.payData)
            .then((response) => {
              console.log('支付成功：', response.data)
              this.isDisabled = false
              this.isActive = true
            })
            .catch((err) => {
              console.log('支付错误：', err)
              this.isDisabled = false
              this.isActive = true
            })
        }
      }

      console.log('request channel : ', channel)
      //       https://api.wins888.club/platform/pay/toPay
      // {
      //     "channel": 20231113,
      //     "goodsId": 2,
      //     "price": 300000,
      //     "ccyNo": "BRL",
      //     "busiCode": "100601",
      //     "bankCode": "",
      //     "payChannel": "pix_pay2",
      //     "clickId": ""
      // }
    },
    queryGoods() {
      this.commonStore
        .goodsList(1)
        .then((res) => {
          if (res.data) {
            res.data.forEach((v) => {
              this.goods.push({
                id: v.id,
                name: v.name,
                price: v.price,
                showPrice: v.showPrice,
                originalPrice: v.originalPrice,
                limits: v.limits,
                discountRate: v.discountRate,
                showOriginalPrice: v.showOriginalPrice,
                version: v.version,
                coin: v.coin,
                giveCoin: v.giveCoin,
                sort: v.sort,
                type: v.type,
                status: v.status,
                icon: v.icon,
                resourceId: v.resourceId,
                desc: v.desc,
                hot: v.hot
              })
            })
          }
        })
        .catch((err) => {
          console.log('查询商品错误:', err.message)
        })
    }
  },
  components: {
    CloseBtn
  },
  setup() {
    const commonStore = useCommonStore()
    const payStore = usePayStore()
    const isActive = ref(false)
    const isDisabled = ref(true)
    return {
      commonStore,
      isActive,
      isDisabled,
      payStore
    }
  }
}
</script>
<template>
  <div class="headerBack d-flex justify-content-between align-items-center px-2">
    <h2 class="title">Depósito</h2>
    <CloseBtn></CloseBtn>
  </div>
  <div class="container-fluid mt-3 depositWindows">
    <div class="pixInfo mb-2">Formas de Pagamentos</div>
    <div class="channelContainer mb-2">
      <div class="payChannel d-flex">
        <div class="channelItem me-2 py-2 px-3 active">
          <div class="pixInfo d-flex align-items-center mb-2">
            <img src="../assets/images/icon/pix.png" alt="" class="pixImg" />
            <span>PIX Ⅵ</span>
          </div>
          <span>10 ~ 99,999 BRL</span>
        </div>
        <div class="channelItem me-2 py-2 px-3">
          <div class="pixInfo d-flex align-items-center mb-2">
            <img src="../assets/images/icon/pix.png" alt="" class="pixImg" />
            <span>V</span>
          </div>
          <span>10 ~ 99,999 BRL</span>
        </div>
        <div class="channelItem me-2 py-2 px-3">
          <div class="pixInfo d-flex align-items-center mb-2">
            <img src="../assets/images/icon/pix.png" alt="" class="pixImg" />
            <span>PIX Ⅲ</span>
          </div>
          <span>10 ~ 99,999 BRL</span>
        </div>
        <div class="channelItem me-2 py-2 px-3">
          <div class="pixInfo d-flex align-items-center mb-2">
            <img src="../assets/images/icon/pix.png" alt="" class="pixImg" />
            <span>PIX Ⅳ</span>
          </div>
          <span>10 ~ 99,999 BRL</span>
        </div>
      </div>
    </div>
    <div class="depositMain">
      <div class="amount position-relative mb-4">
        <input type="text" v-model="showPrice" class="form-control" placeholder="Min. 10" />
        <span class="tips-close position-absolute fw-bold">Quantia (BRL)</span>
      </div>
      <div class="deposit">
        <ul class="p-0 m-2">
          <template v-for="item in goods" :key="item.id">
            <li
              :id="item.id"
              class="mb-3 py-2"
              @click.self="toggleActive(item, $event)"
              v-if="item.hot == '0'"
            >
              <div class="amountContent d-flex align-items-center">
                <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
                <span>{{ item.showPrice }}</span>
              </div>
              <div class="amountTips">+100%Bonus</div>
            </li>
            <li
              :id="item.id"
              class="mb-3 py-2 hot"
              @click.self="toggleActive(item, $event)"
              v-if="item.hot == '1'"
            >
              <div class="amountContent d-flex align-items-center">
                <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
                <span>{{ item.showPrice }}</span>
              </div>
              <div class="amountTips">+100%Bonus</div>
            </li>
          </template>
        </ul>
      </div>
      <!-- 可加 active -->
      <button
        type="button"
        class="btn depositBtn w-100 mb-3"
        :disabled="isDisabled"
        style="pointer-events: auto"
        :class="{ active: isActive }"
        @click.self="toPay"
      >
        Depositar Agora
      </button>
    </div>
    <div class="tips">
      <ul class="ps-3">
        <li class="mb-2">
          1. Se você perder dinheiro real ao jogar o jogo, a 6Z oferece um
          <span>Cashback em dinheiro de 25% toda semana</span>
        </li>
        <li class="mb-2">
          2. O período sobre o qual é calculado o cashback semanal vai de segunda-feira às 00:00 a
          domingo às 23:59.
        </li>
        <li class="mb-2">
          3. Horário de solicitação do cashback: De segunda-feira da próxima semana 06:00 a
          sexta-feira 23:59, expirará se não for resgatado.
        </li>
        <li class="mb-2">
          4. Ao recarregar, certifique-se de vincular o CPF para garantir a segurança dos fundos
          pessoais e evitar riscos.
        </li>
      </ul>
    </div>
  </div>
</template>
