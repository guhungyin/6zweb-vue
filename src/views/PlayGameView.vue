<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import GameLogo from '@/components/home/GameLogo.vue'
import BottomMenu from '@/components/BottomMenu.vue'
import CloseBtn from '@/components/CloseBtn.vue'
import { useCommonStore } from '@/stores/modules/common'
import { useUserStore } from '@/stores/modules/user'
import LoadingPage from '@/components/LoadingPage.vue'
import 'swiper/css'
import 'swiper/css/pagination'
export default {
  data() {
    return {
      RespectedData: this.commonStore.hotArrayList.flat(),
      isLoading: false,
      logged: false
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    GameLogo,
    BottomMenu,
    CloseBtn,
    LoadingPage
  },
  mounted() {
    console.log('------> query params : ', this.commonStore.playGame)

    if (this.userStore.ticket) {
      this.logged = true
      this.userStore.userInfo()
    }
  },
  methods: {
    setParams(gameInfo) {
      this.commonStore.setPlayGame(gameInfo)
    },
    handlePlayGame() {
      if (this.commonStore.playGame.cp === 'pg_electronic') {
        this.$router.push({
          name: 'partnerGame'
        })
      } else {
        if (this.commonStore.playGame.cp === 'tada') {
          this.isLoading = true
          this.commonStore
            .gameLogin(
              '/' +
                this.commonStore.playGame.cp +
                '/gemeLoginAddress?gameId=' +
                this.commonStore.playGame.gameId +
                '&lang=' +
                this.commonStore.playGame.gameLang,
              {}
            )
            .then((response) => {
              console.log('登录响应: ', response)
              this.commonStore.playGame.gameUrl = response.data.Data
              this.isLoading = false
              this.$router.push({
                name: 'partnerGame'
              })
            })
            .catch((error) => {
              this.isLoading = false
              console.log('===> gameLoing error', error.message)
            })
        } else if (this.commonStore.playGame.cp === 'pgplus') {
          this.isLoading = true
          this.commonStore
            .gameLogin(
              '/pg/plus/gameLogin?gameId=' + this.commonStore.playGame.gameId + '&orientation=V',
              {}
            )
            .then((response) => {
              console.log('游戏登录响应 url: ', response.data)
              this.commonStore.playGame.gameUrl = response.data
              this.isLoading = false
              this.$router.push({
                name: 'partnerGame'
              })
            })
            .catch((error) => {
              this.isLoading = false
              console.log('===> gameLoing error', error.message)
            })
        } else if (this.commonStore.playGame.cp === 'evo') {
          this.isLoading = true
          this.commonStore
            .authentication({ directLaunchTableId: this.commonStore.playGame.gameId })
            .then((response) => {
              console.log('EVO游戏登录响应 url: ', response.data.entryEmbedded)
              this.commonStore.playGame.gameUrl = response.data.entryEmbedded
              this.isLoading = false
              this.$router.push({
                name: 'partnerGame'
              })
            })
            .catch((error) => {
              this.isLoading = false
              console.log('===> gameLoing error', error.message)
            })
        }
      }
    }
  },
  setup() {
    const commonStore = useCommonStore()
    const userStore = useUserStore()
    return {
      commonStore,
      userStore,
      modules: [Navigation, Pagination]
    }
  }
}
</script>
<template>
  <div class="routerView">
    <LoadingPage :active="isLoading" :is-full-page="true"></LoadingPage>
    <header class="position-fixed">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand logo" href="#">
            <GameLogo></GameLogo>
          </a>
          <!-- 登出顯示登入按鈕 -->
          <!-- <router-link to="/login" class="btn loginBtn fw-bold">Login</router-link> -->
          <!-- 登入顯示金額 + 儲值 + 個人選單按鈕 -->
          <div class="right" v-show="!logged">
            <router-link to="/register" class="registerBtn me-3">Cadastre-se</router-link>
            <router-link to="/login" class="btn loginBtn fw-bold">Login</router-link>
          </div>
          <div class="right" v-show="logged">
            <div class="userMoney me-2">
              <img class="me-1" src="@/assets/images/icon/rmoneyIcon.svg" alt="" />
              {{ this.userStore.money }}
            </div>
            <router-link class="depositBtn me-2" to="/deposit">
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
    <section class="container-fluid playWindow">
      <nav class="mb-3" style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">{{ this.commonStore.playGame.cpSoft }}</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ this.commonStore.playGame.gameName }}
          </li>
        </ol>
      </nav>
      <div class="playContent p-2 mb-3">
        <div class="gameBase mb-3">
          <div class="gameItem">
            <img :src="this.commonStore.playGame.iconName" class="w-100" />
          </div>
          <div class="gameInfo ms-3">
            <div class="name">{{ this.commonStore.playGame.gameName }}</div>
          </div>
          <div class="closeBtn">
            <CloseBtn></CloseBtn>
          </div>
        </div>
        <button type="button" class="mb-3 btn playBtn" @click="handlePlayGame($event)">
          JOGUE
        </button>
      </div>
      <swiper
        :loop="true"
        :slidesPerView="3"
        :spaceBetween="10"
        :navigation="true"
        :modules="modules"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
        class="liveGameListSwiper mt-3"
      >
        <template v-slot:container-start>
          <div class="topContent d-flex justify-content-between align-items-center mb-2 pe-5">
            <div class="title">
              <img class="me-2" src="@/assets/images/icon/hotIcon.png" width="20" alt="" />
              Provedor Do Jogo
            </div>
            <div class="total px-3 py-1 fw-bold me-4">{{ this.commonStore.hotSize }}</div>
          </div>
        </template>
        <swiper-slide v-for="item in RespectedData" :key="item">
          <div class="img">
            <img :src="item.iconName" class="w-100" @click="setParams(item)" />
          </div>
        </swiper-slide>
      </swiper>
    </section>
    <!-- 下方選單 -->
    <BottomMenu></BottomMenu>
  </div>
</template>
<style scoped>
.playWindow {
  margin-top: 4rem;
}
.breadcrumb-item {
  font-size: 1rem;
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
.playContent {
  background: #1d1e22;
  display: flex;
  flex-direction: column;
}

.playContent .gameBase {
  display: flex;
  width: 100%;
  position: relative;
}
.playContent .gameItem {
  width: 7.8rem;
}
.playContent .gameInfo {
  color: var(--fff);
  font-size: 1rem;
}
.playContent .closeBtn {
  background: #2d3035;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.2rem;
}
.playContent .playBtn {
  border: 0;
  background: linear-gradient(180deg, #278e47, #64d23e);
  color: var(--fff);
  padding: 0.7rem 0;
  border-radius: 0.1rem;
}
.topContent .total {
  color: var(--fff);
  background-color: var(--black2);
  font-size: 1rem;
}
.swiper-button-prev {
  right: 2rem;
  left: initial;
  background: var(--black2) url('../images/icon/chevron-left.png') no-repeat center center / 100%
    100%;
}
.swiper-button-next {
  right: 0;
  background: var(--black2) url('../images/icon/chevron-right.png') no-repeat center center / 100%
    100%;
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 0;
  width: 1.7rem;
  height: 1.7rem;
}
</style>
