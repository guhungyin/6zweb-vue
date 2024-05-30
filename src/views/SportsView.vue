<script>
import GameLogo from '@/components/home/GameLogo.vue'
import BottomMenu from '@/components/BottomMenu.vue'
import { useCommonStore } from '@/stores/modules/common'
import { useUserStore } from '@/stores/modules/user'

export default {
  data() {
    return {
      gameUrl: '',
      logged: false
    }
  },
  created() {
    if (this.userStore.ticket) {
      this.logged = true
    }

    if (this.commonStore.selectProvedor && this.commonStore.selectProvedor.cp === 'Pinnacle') {
      this.commonStore.gameLogin('/pinnacle/gameLogin', {}).then((res) => {
        this.gameUrl = res.data
      })
    }
  },
  components: {
    GameLogo,
    BottomMenu
  },
  methods: {
    wallterDetails() {
      this.userStore.walletDetails()
      this.userStore.userInfo()
    }
  },
  setup() {
    const commonStore = useCommonStore()
    const userStore = useUserStore()
    return {
      commonStore,
      userStore
    }
  }
}
</script>

<template>
  <div class="routerView sportsWindow">
    <header class="position-fixed">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand logo">
            <GameLogo></GameLogo>
          </router-link>
          <div class="right" v-show="!logged">
            <router-link to="/register" class="registerBtn me-3">Cadastre-se</router-link>
            <router-link to="/login" class="btn loginBtn fw-bold">Login</router-link>
          </div>
          <div class="right" v-show="logged">
            <div class="userMoney me-2">
              <img class="me-1" src="@/assets/images/icon/rmoneyIcon.svg" alt="" />
              {{ this.userStore.money }}
            </div>
            <router-link to="/deposit" class="depositBtn me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#FFF"
                class="bi bi-wallet-fill me-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z"
                ></path>
                <path
                  d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z"
                ></path>
              </svg>
              Depósito
            </router-link>
            <button
              class="btn userBtn d-flex flex-column justify-content-center align-items-center p-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#profileWindow"
              aria-controls="profileWindow"
              @click="wallterDetails"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#FFF"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
    <div class="main">
      <iframe :src="gameUrl" frameborder="0" scrolling="yes"></iframe>
    </div>
    <!-- 下方選單 -->
    <BottomMenu></BottomMenu>
  </div>
</template>
<style scoped>
.sportsWindow {
  background-color: #1a1a1a;
  overflow: none;
}
.main {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100vh - 8rem);
  background-color: #24262b;
}
.main::-webkit-scrollbar {
  display: none;
}
iframe {
  width: 100%;
  height: 100%;
}
</style>
