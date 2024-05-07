<script>
// import { reactive, onMounted } from 'vue'
import { ref, onMounted } from 'vue'
import * as bootstrap from 'bootstrap'
export default {
  mounted() {
    window.showPwa = this.showPwa
  },
  methods: {
    showPwa(isShow) {
      this.isShow = isShow
    }
  },
  setup() {
    // const states = reactive({
    //   deferredPrompt: null
    // })
    const isShow = ref(false)
    onMounted(() => {
      if (localStorage.getItem('pwaInstalled') === '1') {
        // console.log('pwa already installed.')
        var alertNode = document.querySelector('.alert')
        var alert = bootstrap.Alert.getOrCreateInstance(alertNode)
        if (alert) {
          alert.close()
        }
      } else {
        document.querySelector('#addApp').addEventListener('click', () => {
          if (window.deferredPrompt) {
            console.log('pwa install.......')
            //window.deferredPrompt.prompt()
            // states.deferredPrompt = null
            window.deferredPromptPrompt()
          } else {
            console.log('pwa uninstall.......')
          }
        })
      }
    })

    return {
      isShow
    }
  }
}
</script>
<template>
  <div class="addHomeWindow alert position-fixed w-100 fade show" role="alert" v-show="this.isShow">
    <div class="addHomeWindowTop d-flex align-items-center mb-2">
      <img src="../../public/pwa-192x192.png" class="img-fluid me-3" alt="" />
      <p class="m-0">
        Gostaríamos de adicionar o wins888 à sua tela inicial para as últimas apostas grátis e
        atualizações de bônus.
      </p>
    </div>
    <div class="addHomeWindowBottom d-flex justify-content-end align-items-center">
      <span type="button" data-bs-dismiss="alert">Cancelar</span>
      <button type="button" id="addApp" class="btn continueBtn ms-4" data-bs-dismiss="alert">
        Continuar
      </button>
    </div>
  </div>
</template>
<style scoped>
.addHomeWindow {
  width: 100%;
  max-width: 34rem;
  background-color: var(--black2);
  color: var(--gray1);
  z-index: 3;
  bottom: 0;
  margin: 0;
  border-radius: 0;
  border: none;
}
.addHomeWindow img {
  width: 4rem;
  height: 4rem;
}
.addHomeWindow .continueBtn {
  border: none;
  color: var(--fff);
  background: var(--greenGradient);
}
</style>
