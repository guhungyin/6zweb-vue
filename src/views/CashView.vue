<script>
import CloseBtn from '../components/CloseBtn.vue'
import QrCodeImg from '../components/QrCodeImg.vue'
import { usePayStore } from '@/stores/modules/pay'
import { useCommonStore } from '@/stores/modules/common'
import BigNumber from 'bignumber.js'

// import LoadingPage from '../components/LoadingPage.vue' //loadind元件
export default {
  data() {
    return {
      isLoading: false,
      showModal: false,
      payMoney: new BigNumber(this.payStore.payMoney).toFormat(0), //new BigNumber(this.$router.params.payMoney).toFormat(0),
      payCode: this.payStore.payCode
    }
  },
  components: {
    CloseBtn,
    QrCodeImg
    // LoadingPage
  },
  methods: {
    // 點擊並複製 button 裡的 data-clipboard-text ，這裡可以放qrcode的那串文字
    copyText() {
      const textToCopy = this.payCode //event.target.getAttribute('data-clipboard-text')
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          console.log('文字已複製到剪貼簿:', textToCopy)
          this.showModal = true
          setTimeout(() => {
            this.showModal = false
          }, 3000)
        })
        .catch((error) => {
          console.error('Failed to copy text:', error)
        })
    }
  },
  // 這裡我弄出樣式給你看的，可以依照需求去刪除
  mounted() {
    // this.isLoading=true;
    setTimeout(() => {
      // this.commonStore.viewInActive = false
      // this.commonStore.viewOutActive = false
    }, 500)
  },
  setup() {
    const payStore = usePayStore()
    const commonStore = useCommonStore()
    return {
      payStore,
      commonStore
    }
  }
}
</script>
<template>
  <div class="routerView">
    <div class="headerBack d-flex justify-content-between align-items-center px-2">
      <h2 class="title"></h2>
      <CloseBtn></CloseBtn>
    </div>
    <div class="container-fluid cashWindows">
      <img
        src="
      "
        alt=""
        class="my-4"
      />
      <p class="mx-4">
        Por favor abra o seu aplicativo de pagamento e escaneie o código QR abaixo para pagar ou
        copie o código Pix abaixo e cole em seu app de pagamento para finalizar a compra.
      </p>
      <h2 class="mb-4">Total R$ {{ payMoney }}</h2>
      <QrCodeImg class="mb-4" :width="166" :height="166" :margin="1" :text="payCode" />
      <button
        @click="copyText"
        type="button"
        class="btn copyQrCodeBtn px-4 py-2 fw-bold"
        data-clipboard-text="123456"
      >
        <span class="me-2">Copiar Código Pix </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          fill="currentColor"
          class="bi bi-copy"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
          />
        </svg>
      </button>
      <div class="alert m-0" role="alert" :class="{ active: showModal }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="#fff"
          class="bi bi-check-lg mb-3"
          viewBox="0 0 16 16"
        >
          <path
            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
          />
        </svg>
        Copy succeeded
      </div>
    </div>
  </div>
</template>
<style scoped>
.cashWindows {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f1f1f;
  height: calc(100vh - 4rem);
}
.cashWindows p {
  color: var(--fff);
  text-align: center;
  font-size: 0.9rem;
}
.cashWindows h2 {
  font-size: 1.8rem;
}

.cashWindows .copyQrCodeBtn {
  background-color: #56b83f;
  color: var(--fff);
  font-size: 1.2rem;
}
.cashWindows .copyQrCodeBtn:active {
  border-color: #56b83f;
}
.cashWindows .alert {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);
  border: 0;
  color: #fff;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 8rem;
  height: 8rem;
  font-size: 0.8rem;
  white-space: nowrap;
}
.cashWindows .alert.active {
  display: flex;
}
</style>
