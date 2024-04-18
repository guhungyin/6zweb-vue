<script>
import GameLogo from '@/components/home/GameLogo.vue'
import BottomMenu from '@/components/BottomMenu.vue'
import { useCommonStore } from '@/stores/modules/common'
import { useUserStore } from '@/stores/modules/user'
export default {
  data() {
    return {
      gameList: [],
      logged: false,
      showButton: false,
      viewScroll: '',
      totalSize: 0,
      pageNumber: 0,
      pageSize: 24,
      currentSize: 0
    }
  },
  created() {
    if (this.userStore.ticket) {
      this.logged = true
    }
  },
  mounted() {
    this.viewScroll = document.getElementById('main')
    this.viewScroll.addEventListener('scroll', this.handleScroll)

    if (this.commonStore.selectProvedor) {
      if (this.commonStore.selectProvedor.cp == 'PG') {
        this.totalSize = this.commonStore.pgList.length
      } else if (this.commonStore.selectProvedor.cp == 'TADA') {
        this.totalSize = this.commonStore.tadaList.length
      } else if (this.commonStore.selectProvedor.cp == 'Evolution') {
        this.totalSize = this.commonStore.evoList.length
      }

      this.nextPage()
    }
  },
  methods: {
    setParams(gamPeInfo) {
      this.commonStore.setPlayGame(gamPeInfo)
    },
    nextPage() {
      this.pageNumber++
      if (this.commonStore.selectProvedor) {
        let temList = []
        if (this.commonStore.selectProvedor.cp == 'PG') {
          let endLength =
            this.pageSize * this.pageNumber > this.commonStore.pgList.length
              ? this.commonStore.pgList.length
              : this.pageSize * this.pageNumber

          temList = this.commonStore.pgList.slice((this.pageNumber - 1) * this.pageSize, endLength)
        } else if (this.commonStore.selectProvedor.cp == 'TADA') {
          let endLength =
            this.pageSize * this.pageNumber > this.commonStore.tadaList.length
              ? this.commonStore.tadaList.length
              : this.pageSize * this.pageNumber

          temList = this.commonStore.tadaList.slice(
            (this.pageNumber - 1) * this.pageSize,
            endLength
          )
        } else if (this.commonStore.selectProvedor.cp == 'Evolution') {
          let endLength =
            this.pageSize * this.pageNumber > this.commonStore.evoList.length
              ? this.commonStore.evoList.length
              : this.pageSize * this.pageNumber

          temList = this.commonStore.evoList.slice((this.pageNumber - 1) * this.pageSize, endLength)
        }
        temList.forEach((v) => this.gameList.push(v))
        this.currentSize = this.gameList.length
      }
    },
    handleScroll() {
      const scrollWindow = document.getElementById('main')
      if (scrollWindow.scrollTop > 100) {
        // 假设滚动超过100像素显示按钮
        this.showButton = true
      } else {
        this.showButton = false
      }
    },
    goToTop() {
      const viewScroll = document.getElementById('main')
      viewScroll.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
      })
      this.showButton = false // 返回顶部后隐藏按钮
    }
  },
  components: {
    GameLogo,
    BottomMenu
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
  <div class="routerView gameSpecifyListWindow">
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
              {{ userStore.money }}
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
    <div id="main" class="main">
      <div class="container">
        <div class="title mb-2">{{ this.commonStore.selectProvedor.tag }}</div>
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Provedor de jogo</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ this.commonStore.selectProvedor.tag }}
            </li>
          </ol>
        </nav>
        <div class="row row-cols-3 g-3">
          <router-link
            to="/play"
            class="col gameItem"
            v-for="item in this.gameList"
            :key="item"
            @click="setParams(item)"
          >
            <img class="bgImg w-100" :src="item.iconName" />
          </router-link>
        </div>
      </div>
      <div class="topBtn" @click="goToTop" v-if="showButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#FFF"
          class="bi bi-chevron-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
          />
        </svg>
      </div>
      <div class="sum mx-auto mt-3">
        Mostrando {{ this.currentSize }} de {{ this.totalSize }} jogos
      </div>
      <button class="btn moreBtn mx-auto mt-3 px-3 py-2" @click="nextPage">Carregar Mais</button>
    </div>
    <!-- 下方選單 -->
    <BottomMenu></BottomMenu>
  </div>
</template>
<style scoped>
.gameSpecifyListWindow {
  background-color: #1a1a1a;
}
.breadcrumb-item {
  font-size: 0.8rem;
}
.breadcrumb-item a {
  color: #98a7b5;
}
.breadcrumb-item + .breadcrumb-item::before {
  color: #98a7b5;
}
.breadcrumb-item.active {
  color: var(--fff);
}
.main {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100vh - 8rem);
  padding-bottom: 2rem;
  background-color: #24262b;
}
.main::-webkit-scrollbar {
  display: none;
}
.sum {
  font-size: 0.7rem;
  text-align: center;
  color: #c4c4c4;
}
.moreBtn {
  border: none;
  width: 12rem;
  font-size: 0.8rem;
  text-align: center;
  color: var(--fff);
  background-color: #1a1a1a;
  border-radius: 0.3rem;
}
.moreBtn:active {
  color: var(--fff);
  background-color: #1a1a1a;
}
.topBtn {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  bottom: 5rem;
  left: 1rem;
}
</style>
