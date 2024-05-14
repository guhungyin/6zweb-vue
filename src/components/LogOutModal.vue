<template>
  <!-- 是否登出 -->
  <LoadingPage :active="isLoading" :is-full-page="false"></LoadingPage>
  <div
    class="modal fade LogOutModal"
    id="LogOutModal"
    tabindex="-1"
    aria-labelledby="LogOutModalLabel"
    aria-hidden="true"
    data-bs-backdrop="false"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body p-4">
          Do you want log out ?
          <div class="d-flex justify-content-evenly mt-5">
            <button
              type="button"
              class="btn cancel"
              @click="closeProfileWindow"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button type="button" class="btn continue" @click="logout" data-bs-dismiss="modal">
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Offcanvas } from 'bootstrap'
import { useUserStore } from '@/stores/modules/user'
import LoadingPage from '@/components/LoadingPage.vue'
export default {
  data() {
    return {
      profileWindow: null,
      isLoading: false
    }
  },
  components: {
    LoadingPage
  },
  mounted() {
    // 個人選單
    const profileWindow = document.getElementById('profileWindow')
    this.profileWindow = new Offcanvas(profileWindow)
  },
  methods: {
    // 關閉個人選單方法
    closeProfileWindow() {
      this.profileWindow.hide()
    },
    logout() {
      this.isLoading = true
      this.userStore
        .logout()
        .then((res) => {
          this.isLoading = false
          if (res.code === 0) {
            this.userStore.clearUserInfo()
            this.closeProfileWindow()
          }
        })
        .catch((err) => {
          this.isLoading = false
          console.log('logout err', err.message)
        })
    }
  },
  setup() {
    const userStore = useUserStore()

    return {
      userStore
    }
  }
}
</script>
<style scoped>
.LogOutModal .modal-content {
  background-color: #1c1c1c;
  color: var(--fff);
  width: 80%;
  margin: auto;
  text-align: center;
  font-size: 1.2rem;
}
.LogOutModal .modal-content .cancel {
  border: none;
  padding: 0.5rem 1.5rem;
  color: var(--fff);
  background: linear-gradient(180deg, #303030, #494949);
  font-size: 1.2rem;
}
.LogOutModal .modal-content .continue {
  border: none;
  padding: 0.5rem 1.5rem;
  color: var(--fff);
  background: linear-gradient(180deg, #5519cd, #9449ff);
  font-size: 1.2rem;
}
</style>
