<script>
  import CloseBtn from '../components/CloseBtn.vue'
  import QrCodeImg from '../components/QrCodeImg.vue'
  import LoadingPage from '../components/LoadingPage.vue' //loadind元件
  export default {
    data(){
      return {
        isLoading: false,
      }
    },
    components: {
      CloseBtn,
      QrCodeImg,
      LoadingPage
    },
    methods: {
      // 點擊並複製 button 裡的 data-clipboard-text ，這裡可以放qrcode的那串文字
      copyText(event) {
        const textToCopy = event.target.getAttribute('data-clipboard-text');
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            console.log('文字已複製到剪貼簿');
          })
          .catch((error) => {
            console.error('Failed to copy text:', error);
          });
      }
    },
    // 這裡我弄出樣式給你看的，可以依照需求去刪除
    mounted(){
        this.isLoading=true;
        setTimeout(()=>{
          this.isLoading=false
            },5000)
    }
  }
</script>
<template>
  <LoadingPage :active="isLoading" :is-full-page="false"></LoadingPage>
  <div class="headerBack d-flex justify-content-between align-items-center px-2">
    <h2 class="title"></h2>
    <CloseBtn></CloseBtn>
  </div>
  <div class="container-fluid cashWindows">
    <img src="../assets/images/icon/pix.png" alt="" class=" my-4" />
    <p class="mx-4">Por favor abra o seu aplicativo de pagamento e escaneie o código QR abaixo para pagar ou copie o código Pix abaixo e cole em seu app de pagamento para finalizar a compra.</p>
    <h2 class="mb-4">Total R$ 5,000</h2>
    <QrCodeImg class="mb-4" :width="166" :height="166" :margin="1" text="00020101021226830014br.gov.bcb.pix2561pix.delbank.com.br/v1/qrcode/vcharge47eec388df244936912f08f0f5204000053039865802BR5907DELBANK6007ARACAJU62070503***6304B42B" />
    <button @click="copyText" type="button" class="btn copyQrCodeBtn px-4 py-2 fw-bold" data-clipboard-text="123456">
      <span class="me-2">Copiar Código Pix </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
      </svg>
    </button>
  </div>
</template>
<style scoped>
  .cashWindows{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1f1f1f;
    height: calc(100vh - 4rem);
    position: absolute;
    z-index: 2;
  }
  .cashWindows p{
    color: var(--fff);
    text-align: center;
    font-size: .9rem;
  }
  .cashWindows h2{
    font-size: 1.8rem;
  }

  .cashWindows .copyQrCodeBtn{
    background-color: #56b83f;
    color: var(--fff);
    font-size: 1.2rem;
  }
  .cashWindows .copyQrCodeBtn:active{
    border-color: #56b83f;
  }
</style>../components/loading/Loading.vue