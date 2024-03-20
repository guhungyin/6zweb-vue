<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import GameLogo from '@/components/home/GameLogo.vue'
import BottomMenu from '@/components/BottomMenu.vue'
import CloseBtn from '@/components/CloseBtn.vue'
import 'swiper/css'
import 'swiper/css/pagination'
export default {
  data() {
    return {
      RespectedData: [
        {
          imgUrl: 'https://6z.com/images/game/551032.jpg'
        },
        {
          imgUrl: 'https://6z.com/images/game/551458.jpg'
        },
        {
          imgUrl: 'https://6z.com/images/game/551031.jpg'
        },
        {
          imgUrl: 'https://6z.com/images/game/551932.jpg'
        },
        {
          imgUrl: 'https://6z.com/images/game/551008.jpg'
        },
        {
          imgUrl: 'https://6z.com/images/game/551934.jpg'
        },
        {
          imgUrl: 'https://pg61.vip/images/game/551037.jpg'
        },
        {
          imgUrl: 'https://pg61.vip/images/game/551204.jpg'
        },
        {
          imgUrl: 'https://pg61.vip/images/game/551476.jpg'
        },
        {
          imgUrl: 'https://pg61.vip/images/game/551936.jpg'
        }
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    GameLogo,
    BottomMenu,
    CloseBtn
  },
  mounted() {
    console.log('------> query params : ', this.commonStore.playGame)
  },
  methods: {
    handlePlayGame(e) {
      //e.preventDefault()
      console.log('------> handle play game url', e)
      return false
    }
  },
  setup() {
    const commonStore = useCommonStore()
    return {
      commonStore,
      modules: [Navigation, Pagination]
    }
  }
}
</script>
<template>
  <div class="routerView">
    <header class="position-fixed">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand logo" href="#">
            <GameLogo></GameLogo>
          </a>
          <!-- 登出顯示登入按鈕 -->
          <!-- <router-link to="/login" class="btn loginBtn fw-bold">Login</router-link> -->
          <!-- 登入顯示金額 + 儲值 + 個人選單按鈕 -->
          <div class="right">
            <div class="userMoney me-2">
              <img class="me-1" src="@/assets/images/icon/rmoneyIcon.svg" alt="" />
              0.00
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
          <li class="breadcrumb-item"><a href="/">PG Soft</a></li>
          <li class="breadcrumb-item active" aria-current="page">Fortune Rabbit</li>
        </ol>
      </nav>
      <div class="playContent p-2 mb-3">
        <div class="gameBase mb-3">
          <div class="gameItem">
            <img src="https://6z.com/images/game/551934.jpg" class="w-100" />
          </div>
          <div class="gameInfo ms-3">
            <div class="name">Fortune Rabbit</div>
          </div>
          <div class="closeBtn">
            <CloseBtn></CloseBtn>
          </div>
        </div>
        <router-link to="#" @click="handlePlayGame($event)">
          <div class="playBtn mb-3">JOGUE</div>
        </router-link>
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
            <div class="total px-3 py-1 fw-bold me-4">ALL 55</div>
          </div>
        </template>
        <swiper-slide v-for="item in RespectedData" :key="item">
          <div class="img">
            <img :src="item.imgUrl" class="w-100" />
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
  font-size: 0.9rem;
}
.playContent .closeBtn {
  background: #2d3035;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.2rem;
}
.playContent .playBtn {
  background: linear-gradient(180deg, #278e47, #64d23e);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--fff);
  padding: 0.7rem 0;
  border-radius: 0.1rem;
}
.topContent .total {
  color: var(--fff);
  background-color: var(--black2);
  font-size: 0.8rem;
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
