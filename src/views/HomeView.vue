<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Grid } from 'swiper/modules'
import GameLogo from '@/components/home/GameLogo.vue'
import AddHomeWindow from '@/components/AddHomeWindow.vue'
import BottomMenu from '@/components/BottomMenu.vue'
import GameListSearch from '@/components/GameListSearch.vue'
import LuckyTurntable from '@/components/LuckyTurntable.vue'
import { useCommonStore } from '@/stores/modules/common'
import { useUserStore } from '@/stores/modules/user'
import { useActivityStore } from '@/stores/modules/activity'
import Fingerprint2 from 'fingerprintjs2'
import 'swiper/css'
import 'swiper/css/pagination'
import '@/assets/css/index.css'
// import { pinia } from '@/stores'

export default {
  data() {
    return {
      // recentListWinData: [],
      // hotList: [],
      // hotSize: 0,
      // pgList: [],
      // pgSize: 0,
      // tadaList: [],
      // tadaSize: 0,
      // evoList: [],
      // evoSize: 0,
      // mediaList: [],
      // serviceList: [],
      // provedorList: [],
      logged: false,
      showTurntableModal: false
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    GameLogo,
    AddHomeWindow,
    BottomMenu,
    GameListSearch,
    LuckyTurntable
  },
  mounted() {
    if (this.$route.query.source) {
      this.userStore.source = this.$route.query.source
    }
    console.log('url params: ', this.userStore.source, 'timezone:', this.userStore.timezone)

    // 生成指纹
    if (window.requestIdleCallback) {
      requestIdleCallback(() => {
        this.createFingerprint()
      })
    } else {
      setTimeout(() => {
        this.createFingerprint()
      }, 1000)
    }

    this.activityStore
      .queryLotteryTimes()
      .then((res) => {
        this.activityStore.showText = res.data.remainingLotteryDraws.toString()
        this.showTurntableModal = true
        this.activityStore.logged = true
        this.activityStore.preTotalBonus = res.data.totalBonus
        this.activityStore.totalBonus = res.data.totalBonus
        this.activityStore.preRemainingBonus = res.data.remainingBonus
        this.activityStore.remainingBonus = res.data.remainingBonus
        this.$refs.homeLuckStar.countFinished()
      })
      .catch((err) => {
        if (err.message === 'User not logged.') {
          this.activityStore.showText = '1'

          this.showTurntableModal = true
        } else {
          this.activityStore.showText = '0'

          this.showTurntableModal = false
        }
      })
  },
  created() {
    console.log(
      '------- userStore ',
      this.userStore,
      ' .ticket',
      this.userStore.ticket,
      ' url params : ',
      this.$route.params
    )

    if (this.$route.query.source) {
      this.userStore.source = this.$route.query.source
    }

    if (this.userStore.ticket && this.userStore.ticket !== '') {
      this.logged = true
      // this.userMoney = this.userStore.money

      this.userStore.userInfo()
      // .then((res) => {
      //   if (res.code === 0) {
      //     this.userMoney = this.userStore.money
      //   }
      // })
    }

    this.websiteConfig()
    this.hotGameList()
    this.winnerShow()
  },
  methods: {
    createFingerprint() {
      Fingerprint2.get((components) => {
        let values = components.map((component) => component.value)
        this.userStore.deviceId = Fingerprint2.x64hash128(values.join(''), 31)
        console.log('deviceId: ', this.userStore.deviceId)
      })
    },
    closeTurntableModal() {
      const turntableModal = document.getElementById('turntableModal')
      turntableModal.classList.remove('active')
      this.showTurntableModal = false
    },
    goToTop() {
      const viewScroll = document.getElementById('routerView')
      viewScroll.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
      })
    },
    wallterDetails() {
      this.userStore.walletDetails()
      this.userStore.userInfo()
    },
    setParams(gameInfo) {
      this.commonStore.setPlayGame(gameInfo)
    },
    selectGameType(gameType) {
      console.log('click game type : ', gameType)
      this.commonStore.setSelectGameType(gameType)
    },
    selectProvedor(selectPorvedor) {
      this.commonStore.selectProvedor = selectPorvedor
    },
    // queryGameList() {
    //   this.commonStore
    //     .getGameList()
    //     .then((response) => {
    //       if (response.data) {
    //         response.data.forEach((v) => {
    //           this.gameList.push(v)
    //         })
    //       }
    //     })
    //     .catch((error) => {
    //       console.log('query game list error: ', error.message)
    //     })
    // },
    websiteConfig() {
      this.commonStore
        .websiteConfig()
        .then((res) => {
          if (res.data) {
            res.data.forEach((v) => {
              if (v.media) {
                this.commonStore.mediaList = v.media
              } else if (v.service) {
                this.commonStore.serviceList = v.service
              } else if (v.provedor) {
                this.commonStore.provedorList = v.provedor
              } else if (v.referral) {
                this.commonStore.referralList = v.referral
              } else if (v.mediahelp) {
                this.commonStore.mediahelp = v.mediahelp
              } else if (v.mainService) {
                this.commonStore.mainService = v.mainService
              } else if (v.social) {
                this.commonStore.social = v.social
              }
            })

            console.log('website config:', this.commonStore.mediaList)
            console.log('website config:', this.commonStore.serviceList)
          }
        })
        .catch((err) => console.log('load website error: ', err.message))
    },
    hotGameList() {
      this.commonStore
        .lobby()
        .then((res) => {
          if (res.data) {
            let total = res.data.hotList.length
            let rows = Math.ceil(total / 9)
            console.log('总记录数:', total, '总页数:', rows)
            let index = 0
            for (let i = 0; i < rows; i++) {
              this.commonStore.hotArrayList[i] = []
              for (let j = 0; j < 9 && index < total; j++, index++) {
                if (res.data.hotList[index].cp === 'evo') {
                  res.data.hotList[index].cpSoft = 'Live'
                } else if (res.data.hotList[index].cp === 'tada') {
                  res.data.hotList[index].cpSoft = 'Tada Soft'
                } else if (res.data.hotList[index].cp === 'pg_electronic') {
                  res.data.hotList[index].cpSoft = 'PG Soft'
                } else if (res.data.hotList[index].cp === 'pgplus') {
                  res.data.hotList[index].cpSoft = 'PG Soft'
                }
                this.commonStore.hotArrayList[i].push(res.data.hotList[index])
              }
            }
            console.log('hot list : ', this.commonStore.hotArrayList)
            this.commonStore.hotSize = total

            if (res.data.pg) {
              total = res.data.pg.length
              rows = Math.ceil(total / 6)
              index = 0
              for (let i = 0; i < rows; i++) {
                this.commonStore.pgArrayList[i] = []
                for (let j = 0; j < 6 && index < total; j++, index++) {
                  res.data.pg[index].cpSoft = 'PG Soft'
                  this.commonStore.pgArrayList[i].push(res.data.pg[index])
                }
              }
              this.commonStore.pgSize = total
              this.commonStore.pgList = res.data.pg
            }

            if (res.data.tada) {
              total = res.data.tada.length
              rows = Math.ceil(total / 9)
              index = 0
              for (let i = 0; i < rows; i++) {
                this.commonStore.tadaArrayList[i] = []
                for (let j = 0; j < 9 && index < total; j++, index++) {
                  res.data.tada[index].cpSoft = 'Tada Soft'
                  this.commonStore.tadaArrayList[i].push(res.data.tada[index])
                }
              }
              this.commonStore.tadaSize = total
              this.commonStore.tadaList = res.data.tada
            }

            if (res.data.evo) {
              total = res.data.evo.length
              rows = Math.ceil(total / 6)
              index = 0
              for (let i = 0; i < rows; i++) {
                this.commonStore.evoArrayList[i] = []
                for (let j = 0; j < 6 && index < total; j++, index++) {
                  res.data.evo[index].cpSoft = 'Live'
                  this.commonStore.evoArrayList[i].push(res.data.evo[index])
                }
              }
              this.commonStore.evoSize = total
              this.commonStore.evoList = res.data.evo
            }
          }
        })
        .catch((err) => console.log('query host list error: ', err.message))
    },
    winnerShow() {
      this.commonStore
        .getWinnerShow()
        .then((response) => {
          console.log('response ---> ', response)
          if (response.data.bigWin) {
            this.commonStore.recentListWinData = []
            response.data.bigWin.forEach((v) => {
              this.commonStore.recentListWinData.push({
                userName: v.nickname,
                winMoney: v.amount,
                imgUrl: v.gameVo.img
              })
            })
          }
        })
        .catch((err) => {
          console.log('getWinnerShow error message  ---> ', err.message)
        })
    }
  },
  setup() {
    const commonStore = useCommonStore()
    const userStore = useUserStore()
    const activityStore = useActivityStore()
    return {
      modules: [Navigation, Pagination, Grid],
      commonStore,
      userStore,
      activityStore
    }
  }
}
</script>
<template>
  <div id="routerView" class="routerView">
    <!-- 上方選單 -->
    <header class="position-fixed">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid h-100 px-1 px-sm-3">
          <router-link to="/" class="navbar-brand me-0">
            <GameLogo></GameLogo>
          </router-link>
          <!-- 登入顯示金額 + 儲值 + 個人選單按鈕 -->
          <div class="right" v-show="!logged">
            <router-link to="/register" class="registerBtn me-3">Cadastre-se</router-link>
            <router-link to="/login" class="btn loginBtn fw-bold">Login</router-link>
          </div>
          <!-- 登入顯示金額 + 儲值 + 個人選單按鈕 -->
          <div class="right" v-show="logged">
            <div class="userMoney me-2">
              <img src="@/assets/images/icon/rmoneyIcon.svg" alt="" />
              {{ this.userStore.money }}
            </div>
            <router-link class="depositBtn me-2" to="/deposit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#FFF"
                class="bi bi-wallet-fill me-1"
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
    <!-- banner -->
    <div class="banner">
      <swiper
        :loop="true"
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :pagination="{
          clickable: true
        }"
        :modules="modules"
        class="bannerSwiper"
      >
        <swiper-slide>
          <RouterLink to="/deposit">
            <img class="img-fluid" src="@/assets/images/banner/banner_01.jpg" alt="" />
          </RouterLink>
        </swiper-slide>
        <swiper-slide>
          <img class="img-fluid" src="@/assets/images/banner/banner_02.jpg" alt="" />
        </swiper-slide>
        <!--<swiper-slide>
          <img class="img-fluid" src="@/assets/images/banner/banner_03.jpg" alt="" />
        </swiper-slide>-->
        <swiper-slide>
          <img class="img-fluid" src="@/assets/images/banner/banner_04.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="img-fluid" src="@/assets/images/banner/banner_05.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="img-fluid" src="@/assets/images/banner/banner_06.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="img-fluid" src="@/assets/images/banner/banner_07.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="img-fluid" src="@/assets/images/banner/banner_08.jpg" alt="" />
        </swiper-slide>
      </swiper>
    </div>
    <!-- banner2 -->
    <div class="banner2 container">
      <div class="row row-cols-2 g-1">
        <router-link class="col" to="/deposit">
          <img src="@/assets/images/banner/banner2_01.jpg" class="w-100" alt="" />
        </router-link>
        <router-link class="col" to="/cashback">
          <img src="@/assets/images/banner/banner2_02.jpg" class="w-100" alt="" />
        </router-link>
      </div>
    </div>
    <!-- 跑馬燈 -->
    <section class="container d-flex marquee my-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#3bc117"
        class="bi bi-volume-down-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12zm3.025 4a4.5 4.5 0 0 1-1.318 3.182L10 10.475A3.5 3.5 0 0 0 11.025 8 3.5 3.5 0 0 0 10 5.525l.707-.707A4.5 4.5 0 0 1 12.025 8"
        />
      </svg>
      <div class="marqueeContent">
        <span>1*****48 acabou de retirar 10000.0 BRL</span>
      </div>
    </section>
    <!-- 搜尋框 -->
    <section class="container-fluid mb-3">
      <button
        type="button"
        class="btn searchBox"
        data-bs-toggle="modal"
        data-bs-target="#GameListSearchModal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#6e6e6e"
          class="bi bi-search me-3"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
          />
        </svg>
        <span>Procure Jogos ou Provedores</span>
      </button>
    </section>
    <!-- 遊戲內容 -->
    <section class="container-fluid mb-4">
      <swiper
        :loop="true"
        :slidesPerView="3"
        :spaceBetween="10"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
        class="recentListSwiper mt-2"
      >
        <swiper-slide
          v-for="item in this.commonStore.recentListWinData"
          :key="item"
          class="main overflow-hidden"
        >
          <div class="img">
            <img :src="item.imgUrl" class="w-100" />
          </div>
          <div class="container py-2">
            <div class="name mb-1">{{ item.userName }}</div>
            <div class="money">{{ item.winMoney }}</div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="tabHome mt-3">
        <ul class="p-0">
          <li class="me-2">
            <router-link to="/gameList" @click="selectGameType('Slots')">
              <img src="@/assets/images/icon/gameListIcon/slots_on.png" alt="" />
              <span>Slots</span>
            </router-link>
          </li>
          <li class="me-2">
            <router-link to="/gameList" @click="selectGameType('Live')">
              <img src="@/assets/images/icon/gameListIcon/live_on.png" alt="" />
              <span>Live</span>
            </router-link>
          </li>
          <li class="me-2">
            <router-link to="/gameList" @click="selectGameType('Fish')">
              <img src="@/assets/images/icon/gameListIcon/fish_on.png" alt="" />
              <span>Fish</span>
            </router-link>
          </li>
          <li class="me-2">
            <router-link to="/gameList" @click="selectGameType('Blockchain')">
              <img src="@/assets/images/icon/gameListIcon/blockchain_on.png" alt="" />
              <span>Blockchain</span>
            </router-link>
          </li>
          <li class="me-2">
            <router-link to="/gameList" @click="selectGameType('Sports')">
              <img src="@/assets/images/icon/gameListIcon/sports_on.png" alt="" />
              <span>Sports</span>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- Quente  -->
      <swiper :navigation="true" :modules="modules" class="quenteGameListSwiper mt-3">
        <template v-slot:container-start>
          <div class="topContent d-flex justify-content-between align-items-center mb-2 pe-5">
            <div class="title">Quente</div>
            <router-link to="/gameList" class="total px-3 py-1 fw-bold me-4"
              >ALL {{ this.commonStore.hotSize }}</router-link
            >
          </div>
        </template>
        <swiper-slide v-for="itemrow in this.commonStore.hotArrayList" :key="itemrow">
          <div class="row row-cols-3 g-2">
            <div class="col" v-for="item in itemrow" :key="item">
              <router-link to="/play" class="img" @click="setParams(item)">
                <img :src="item.iconName" class="w-100" />
              </router-link>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <!-- pg game -->
      <swiper :navigation="true" :modules="modules" class="pgGameListSwiper mt-3">
        <template v-slot:container-start>
          <div class="topContent d-flex justify-content-between align-items-center mb-2 pe-5">
            <div class="title">PG Soft</div>
            <router-link
              to="/gameSpecifyList"
              class="total px-3 py-1 fw-bold me-4"
              @click="selectProvedor({ cp: 'PG', tag: 'PG Soft Games' })"
              >ALL {{ this.commonStore.pgSize }}</router-link
            >
          </div>
        </template>
        <swiper-slide v-for="pgItemRow in this.commonStore.pgArrayList" :key="pgItemRow">
          <div class="row row-cols-3 g-2">
            <div class="col" v-for="pgItem in pgItemRow" :key="pgItem">
              <router-link to="/play" class="img" @click="setParams(pgItem)">
                <img :src="pgItem.iconName" class="w-100" />
              </router-link>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <!-- Tada Game -->
      <swiper :navigation="true" :modules="modules" class="sixzGameListSwiper mt-3">
        <template v-slot:container-start>
          <div class="topContent d-flex justify-content-between align-items-center mb-2 pe-5">
            <div class="title">Tada Soft</div>
            <router-link
              to="/gameSpecifyList"
              class="total px-3 py-1 fw-bold me-4"
              @click="selectProvedor({ cp: 'TADA', tag: 'TADA Games' })"
              >ALL {{ this.commonStore.tadaSize }}</router-link
            >
          </div>
        </template>
        <swiper-slide v-for="tadaItemRow in this.commonStore.tadaArrayList" :key="tadaItemRow">
          <div class="row row-cols-3 g-2">
            <div class="col" v-for="tataItem in tadaItemRow" :key="tataItem">
              <router-link to="/play" class="img" @click="setParams(tataItem)">
                <img :src="tataItem.iconName" class="w-100" />
              </router-link>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <!-- Provedor -->
      <div class="mt-3">
        <div class="topContent mb-2">
          <div class="title">Provedor Do Jogo</div>
        </div>
        <div class="row row-cols-2 g-2">
          <template v-for="provedorItem in this.commonStore.provedorList" :key="provedorItem">
            <router-link
              v-if="provedorItem.cp !== 'Pinnacle'"
              to="/gameSpecifyList"
              class="col"
              @click="selectProvedor(provedorItem)"
            >
              <img :src="provedorItem.img" alt="" class="w-100" />
            </router-link>
            <router-link
              v-if="provedorItem.cp === 'Pinnacle'"
              to="/sports"
              class="col"
              @click="selectProvedor(provedorItem)"
            >
              <img :src="provedorItem.img" alt="" class="w-100" />
            </router-link>
          </template>
        </div>
      </div>
      <!-- LIVE game -->
      <swiper :navigation="true" :modules="modules" class="liveGameListSwiper mt-3">
        <template v-slot:container-start>
          <div class="topContent d-flex justify-content-between align-items-center mb-2 pe-5">
            <div class="title">Live Casino</div>
            <router-link
              to="/gameSpecifyList"
              class="total px-3 py-1 fw-bold me-4"
              @click="selectProvedor({ cp: 'Evolution', tag: 'Evolution Games' })"
              >ALL {{ this.commonStore.evoSize }}</router-link
            >
          </div>
        </template>
        <swiper-slide v-for="evoItemRow in this.commonStore.evoArrayList" :key="evoItemRow">
          <div class="row row-cols-3 g-2">
            <div class="col" v-for="evoItem in evoItemRow" :key="evoItem">
              <router-link to="/play" class="img" @click="setParams(evoItem)">
                <img :src="evoItem.iconName" class="w-100" />
              </router-link>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
    <footer class="container-fluid footer">
      <div class="bottomLogo mb-4 pt-3">
        <img src="@/assets/images/logo.png" class="img-fluid" alt="" />
      </div>
      <div class="customerService mb-3">
        <template v-for="serviceItem in this.commonStore.serviceList" :key="serviceItem">
          <a :href="serviceItem.link" class="mx-2">
            <img :src="serviceItem.img" alt="" />
          </a>
        </template>
      </div>
      <div class="share mb-3">
        <span class="d-flex justify-content-center"
          >Wins888 GAME irá responder todas suas dúvidas. Entre em contato usando uma das formas
          abaixo.</span
        >
        <div class="d-flex justify-content-around mt-3">
          <template v-for="mediaItem in this.commonStore.mediaList" :key="mediaItem">
            <a :href="mediaItem.link" class="text-decoration-none">
              <img :src="mediaItem.img" alt="" />
            </a>
          </template>
        </div>
      </div>
      <div class="footerBottom">
        <div class="title text-center mb-3">JOGOS</div>
        <ul class="d-flex justify-content-around p-0">
          <li>
            <a href="#" class="text-decoration-none"> Crash </a>
          </li>
          <li>
            <a href="#" class="text-decoration-none"> Mines </a>
          </li>
          <li>
            <a href="#" class="text-decoration-none"> Super777 </a>
          </li>
        </ul>
        <div class="title text-center mb-3">SOBRE NÓS</div>
        <ul class="d-flex justify-content-around p-0">
          <li>
            <router-link to="/contact" class="text-decoration-none"> Contate-nos </router-link>
          </li>
          <li>
            <router-link to="/help" class="text-decoration-none"> Como Jogar </router-link>
          </li>
        </ul>
        <div class="terms text-center">
          <router-link to="/preventLaunderMoney" class="px-2">AML Policy</router-link>
          <router-link to="/terms" class="px-2">Terms &amp; Conditions</router-link>
          <br />
          <router-link to="/privacy" class="px-2">KYC Policy </router-link>
          <router-link to="/exclusionPolicy" class="px-2">Self Exclusion Policy</router-link>
          <br />
          <router-link to="/gamingPolicy" class="px-2"
            >Underage Gaming Policy (18+ to play clause)</router-link
          >
          <br />
          <router-link to="/responsible" class="px-2">Responsible Gaming Policy</router-link>
        </div>
        <hr />
        <div class="title text-center mb-3">LICENÇA</div>
        <p class="license">
          wins888.club é operada pela Dubet N.V., número de registro da empresa 10692, com endereço
          registrado em Abraham de Veerstraat 7, Curaçao e é licenciada e autorizada pelo governo de
          365/JAZ Sub-Licença
          <a href="#" class="text-decoration-none">GLH-OCCHKTW0705152022</a>
        </p>
        <p class="warnContent">
          entretenimento.
          <br />
          2. este jogo contém compras noapp.
          <br />
          ganhará em apostas com dinheiro real e jogos relacionados no futuro.
        </p>
        <hr />
        <div class="support pt-3">
          <ul class="p-0">
            <li class="d-flex justify-content-center mb-4">
              <div class="text">Support</div>
              <div class="email ms-2">royal@wins888.vip</div>
            </li>
            <li class="d-flex justify-content-center mb-4">
              <div class="text">Partners</div>
              <div class="email ms-2">partners@wins888.vip</div>
            </li>
            <li class="d-flex justify-content-center mb-4">
              <div class="text">Legal</div>
              <div class="email ms-2">trusted@wins888.vip</div>
            </li>
          </ul>
          <div class="favorite">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              class="bi bi-bookmark-star-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.18.18 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.18.18 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.18.18 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.18.18 0 0 1-.134-.098z"
              />
            </svg>
          </div>
          <div class="message">
            <a :href="this.commonStore.mainService.service" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                class="bi bi-chat-dots-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                />
              </svg>
            </a>
          </div>
        </div>
        <div @click="goToTop" class="topBtn mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#3bc117"
            class="bi bi-chevron-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
            />
          </svg>
          <span class="mt-2">TOP</span>
        </div>
      </div>
    </footer>
    <!-- 增加到桌面 -->
    <AddHomeWindow></AddHomeWindow>
    <!-- 下方選單 -->
    <BottomMenu></BottomMenu>
    <!-- 搜尋遊戲列表 -->
    <GameListSearch></GameListSearch>
    <!-- 轉盤 -->
    <div id="turntableModal" class="turntableModal" :class="{ active: showTurntableModal }">
      <div class="turntableContent">
        <img
          @click="closeTurntableModal"
          src="../assets/images/rou/close.png"
          alt=""
          class="closeTurntableModalBtn"
        />
        <!-- 轉盤標題 -->
        <img src="../assets/images/rou/title.png" alt="" class="turntableTitle" />
        <!-- 轉盤內容 -->
        <LuckyTurntable ref="homeLuckStar"></LuckyTurntable>
        <!-- 轉盤背景 -->
        <div class="bg"></div>
        <!-- 燈光效果 -->
        <div class="light"></div>
        <!-- 指針 -->
        <img src="../assets/images/rou/pointer.png" alt="" class="pointer" />
        <img src="../assets/images/rou/tip.png" alt="" class="tipImg" />
        <img src="../assets/images/rou/decoration.png" alt="" class="decorationImg" />
      </div>
    </div>
  </div>
</template>
