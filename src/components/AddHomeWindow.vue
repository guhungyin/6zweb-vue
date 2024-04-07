<script>
import { reactive, onMounted } from 'vue'
export default {
  setup() {
    const states = reactive({
      deferredPrompt: null
    })
    onMounted(() => {
      window.addEventListener('beforeinstallprompt', (e) => {
        console.log('pwa beforeinstallprompt : ', e)
        e.preventDefault()
        states.deferredPrompt = e
      })
      window.addEventListener('appinstalled', (e) => {
        console.log('pwa appinstalled : ', e)
        states.deferredPrompt = null
      })
      document.querySelector('#addApp').addEventListener('click', () => {
        if (states.deferredPrompt) {
          console.log('pwa install.......')
          states.deferredPrompt.prompt()
          states.deferredPrompt = null
        } else {
          console.log('pwa uninstall.......')
        }

        //       addBtn.style.display = 'none';
        // // 显示之前保存的提示
        // deferredPrompt.prompt();
        // // 等待用户的响应以决定是否安装应用程序
        // deferredPrompt.userChoice.then((choiceResult) => {
        //     if (choiceResult.outcome === 'accepted') {
        //       console.log('用户接受了安装提示');
        //     } else {
        //       console.log('用户拒绝了安装提示');
        //     }
        //     deferredPrompt = null;
        //   });
      })
    })
  }
}
</script>
<template>
  <div class="addHomeWindow alert position-fixed w-100 fade show" role="alert">
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
