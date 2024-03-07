<script>
import '@/assets/css/deposit.css'
import CloseBtn from '../components/CloseBtn.vue'
import { useCommonStore } from '@/stores/modules/common'
import { ref } from 'vue'
export default {
  data() {
    return {
      goods: [],
      selectGoods: {},
      showPrice: ''
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

      if (e.target.className) {
        let nodes = Array.from(document.getElementsByClassName('mb-3 py-2'))

        nodes.forEach((ne) => {
          console.log('ne.id ', typeof ne.id, 'id type of ', typeof id)
          if (Number.parseInt(ne.id) === selectGoods.id) {
            ne.className = ne.className + ' active'
          } else {
            ne.className = ne.className.replace(/ active/g, '')
          }
        })
      }
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
    const isActive = ref(false)
    const isDisabled = ref(true)
    return {
      commonStore,
      isActive,
      isDisabled
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
    <div class="channelContainer mb-5">
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
        <input type="text" class="form-control" placeholder="Min. 10" />
        <span class="tips-close position-absolute fw-bold">Quantia (BRL) {{ showPrice }}</span>
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
          <!-- <li class="mb-3 py-2">
            <div class="amountContent d-flex align-items-center">
              <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
              <span>50</span>
            </div>
            <div class="amountTips">+100%Bonus</div>
          </li>
          <li class="mb-3 py-2 hot">
            <div class="amountContent d-flex align-items-center">
              <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
              <span>100</span>
            </div>
            <div class="amountTips">+100%Bonus</div>
          </li>
          <li class="mb-3 py-2">
            <div class="amountContent d-flex align-items-center">
              <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
              <span>200</span>
            </div>
            <div class="amountTips">+100%Bonus</div>
          </li>
          <li class="mb-3 py-2 hot">
            <div class="amountContent d-flex align-items-center">
              <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
              <span>500</span>
            </div>
            <div class="amountTips">+100%Bonus</div>
          </li>
          <li class="mb-3 py-2 hot">
            <div class="amountContent d-flex align-items-center">
              <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
              <span>1000</span>
            </div>
            <div class="amountTips">+100%Bonus</div>
          </li>
          <li class="mb-3 py-2 hot">
            <div class="amountContent d-flex align-items-center">
              <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
              <span>2000</span>
            </div>
            <div class="amountTips">+100%Bonus</div>
          </li>
          <li class="mb-3 py-2">
            <div class="amountContent d-flex align-items-center">
              <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
              <span>5000</span>
            </div>
            <div class="amountTips">+100%Bonus</div>
          </li>
          <li class="mb-3 py-2">
            <div class="amountContent d-flex align-items-center">
              <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
              <span>10000</span>
            </div>
            <div class="amountTips">+100%Bonus</div>
          </li> -->
        </ul>
      </div>
      <!-- 可加 active -->
      <button
        type="button"
        class="btn depositBtn w-100 mb-3"
        :disabled="isDisabled"
        style="pointer-events: auto"
        :class="{ active: isActive }"
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
