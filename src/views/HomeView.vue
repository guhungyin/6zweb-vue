<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import GameLogo from '@/components/home/GameLogo.vue'
import AddHomeWindow from '@/components/AddHomeWindow.vue'
import BottomMenu from '@/components/BottomMenu.vue'
import GameListSearch from '@/components/GameListSearch.vue'

import { useCommonStore } from '@/stores/modules/common'
import { useUserStore } from '@/stores/modules/user'
import 'swiper/css'
import 'swiper/css/pagination'
import '@/assets/css/index.css'
// import { pinia } from '@/stores'

export default {
  data() {
    return {
      recentListWinData: [],
      gameList: [],
      gameImgData: {
        quente: {
          list1: [
            {
              imgUrl: 'https://6z.com/images/game/551931.jpg'
            },
            {
              imgUrl: 'https://images.hibigwin.com/wildbet777/202401/FhsZfhemCibKnvX.jpg'
            },
            {
              imgUrl: 'https://images.hibigwin.com/wildbet777/202401/VbIBbstdlEVdOgG.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551476.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551031.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/PIC_Mines.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551010.jpg'
            },
            {
              imgUrl: 'https://images.hibigwin.com/wildbet777/202401/mLLqbYLHTFbRPFQ.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551458.jpg'
            }
          ],
          list2: [
            {
              imgUrl: 'https://6z.com/images/game/551931.jpg'
            },
            {
              imgUrl: 'https://images.hibigwin.com/wildbet777/202401/FhsZfhemCibKnvX.jpg'
            },
            {
              imgUrl: 'https://images.hibigwin.com/wildbet777/202401/VbIBbstdlEVdOgG.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551476.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551031.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/PIC_Mines.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551010.jpg'
            },
            {
              imgUrl: 'https://images.hibigwin.com/wildbet777/202401/mLLqbYLHTFbRPFQ.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551458.jpg'
            }
          ]
        },
        pg: {
          list1: [
            {
              imgUrl: 'https://6z.com/images/game/551931.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551932.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551934.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551933.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551936.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551935.jpg'
            }
          ],
          list2: [
            {
              imgUrl: 'https://6z.com/images/game/551937.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551938.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551940.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551941.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551942.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551943.jpg'
            }
          ]
        },
        sixz: {
          list1: [
            {
              imgUrl: 'https://6z.com/images/game/PIC_Mines.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551032.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551008.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551031.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551010.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551009.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551037.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551006.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/PIC_Tower.jpg'
            }
          ],
          list2: [
            {
              imgUrl: 'https://6z.com/images/game/551025.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551034.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551012.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551004.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551028.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551011.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551019.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551024.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551016.jpg'
            }
          ]
        },
        Provedor: [
          {
            imgUrl: 'https://6z.com/images/homePage/provider/link_PG.jpg'
          },
          {
            imgUrl: 'https://6z.com/images/homePage/provider/link_TD.jpg'
          },
          {
            imgUrl: 'https://6z.com/images/homePage/provider/link_pp.jpg'
          },
          {
            imgUrl: 'https://6z.com/images/homePage/provider/link_EG.jpg'
          },
          {
            imgUrl: 'https://6z.com/images/homePage/provider/link_6z.jpg'
          }
        ],
        live: {
          list1: [
            {
              imgUrl: 'https://6z.com/images/game/551914.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551909.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551910.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551912.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551911.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551913.jpg'
            }
          ],
          list2: [
            {
              imgUrl: 'https://6z.com/images/game/551908.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551951.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551979.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551963.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551959.jpg'
            },
            {
              imgUrl: 'https://6z.com/images/game/551957.jpg'
            }
          ]
        }
      },
      logged: false,
      userMoney: '0.00'
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    GameLogo,
    AddHomeWindow,
    BottomMenu,
    GameListSearch,
  },
  created() {
    console.log('------- userStore ', this.userStore, ' .ticket', this.userStore.ticket)

    if (this.userStore.ticket) {
      this.logged = true

      this.userMoney = this.userStore.money
    }

    this.winnerShow()
    this.queryGameList()
  },
  methods: {
    toTop() {
      document.documentElement.scrollTop = 0
    },
    queryGameList() {
      this.commonStore
        .getGameList()
        .then((response) => {
          if (response.data) {
            response.data.forEach((v) => {
              this.gameList.push(v)
            })
          }
        })
        .catch((error) => {
          console.log('query game list error: ', error.message)
        })
    },
    winnerShow() {
      this.commonStore
        .getWinnerShow()
        .then((response) => {
          console.log('response ---> ', response)
          if (response.data.bigWin) {
            response.data.bigWin.forEach((v) => {
              this.recentListWinData.push({
                userName: v.nickname,
                winMoney: v.amount,
                imgUrl: v.gameVo.img
              })
            })
          }
        })
        .catch((error) => {
          console.log('getWinnerShow error message  ---> ', error.message)
        })
    },
  },
  setup() {
    const commonStore = useCommonStore()
    const userStore = useUserStore()
    return {
      modules: [Navigation, Pagination],
      commonStore,
      userStore
    }
  }
}
</script>
<template>
    <div class="routerView">
      <!-- 上方選單 -->
      <header class="position-fixed">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <router-link to="/" class="navbar-brand logo">
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
                <img class="me-1" src="@/assets/images/icon/rmoneyIcon.svg" alt="" />
                {{ userMoney }}
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
            <img
              class="img-fluid"
              src="https://images.hibigwin.com/wildbet777/202312/mzrqWIEAPFiZzqF.jpg"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img-fluid"
              src="https://images.hibigwin.com/wildbet777/202312/tXjavEotaEosfJt.jpg"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img-fluid"
              src="https://images.hibigwin.com/wildbet777/202312/IiLcNgsERhzevtg.jpg"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img-fluid"
              src="https://images.hibigwin.com/wildbet777/202312/MDspeLyExVBrDMK.jpg"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img-fluid"
              src="https://images.hibigwin.com/wildbet777/202312/UkdfGNnCHEVhPRD.jpg"
              alt=""
            />
          </swiper-slide>
        </swiper>
      </div>
      <!-- banner2 -->
      <div class="banner2 container">
        <div class="row row-cols-2 g-1">
          <router-link class="col" to="/deposit">
            <img src="https://6z.com/img/vip.a28e101a.jpg" class="w-100" alt="">
          </router-link>
          <router-link class="col" to="/cashback">
            <img src="https://6z.com/img/RS12.affbb8c0.jpg" class="w-100" alt="">
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
        <button type="button" class="btn searchBox" data-bs-toggle="modal" data-bs-target="#GameListSearchModal">
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
        <div class="recentListTitle title">Recent Grand Prize</div>
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
          <swiper-slide v-for="item in recentListWinData" :key="item" class="main">
            <div class="img">
              <img :src="item.imgUrl" class="w-100" />
            </div>
            <div class="container py-1">
              <div class="name mb-1">{{ item.userName }}</div>
              <div class="money">{{ item.winMoney }}</div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="tabHome mt-3">
          <ul class="p-0">
            <li class="px-3 py-2 me-2">
              <router-link to="/promotions">
                <span>Promoções</span>
              </router-link>
            </li>
            <li class="px-3 py-2 me-2">
              <span>6z Originals</span>
            </li>
            <li class="px-3 py-2 me-2">
              <span>Slots</span>
            </li>
            <li class="px-3 py-2 me-2">
              <span>APP</span>
            </li>
            <li class="px-3 py-2 me-2">
              <span>HOT</span>
            </li>
          </ul>
        </div>
        <!-- Quente  -->
        <swiper :navigation="true" :modules="modules" class="quenteGameListSwiper mt-3">
          <template v-slot:container-start>
            <div class="topContent d-flex justify-content-between align-items-center mb-2 pe-5">
              <div class="title">Quente</div>
              <router-link to="/gameList" class="total px-3 py-1 fw-bold me-4">ALL 18</router-link>
            </div>
          </template>
          <swiper-slide>
            <div class="row row-cols-3 g-2">
              <div class="col" v-for="item in gameImgData.quente.list1" :key="item">
                <router-link to="/play" class="img">
                  <img :src="item.imgUrl" class="w-100" />
                </router-link>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="row row-cols-3 g-2">
              <div class="col" v-for="item in gameImgData.quente.list2" :key="item">
                <div class="img">
                  <img :src="item.imgUrl" class="w-100" />
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <!-- pg game -->
        <swiper :navigation="true" :modules="modules" class="pgGameListSwiper mt-3">
          <template v-slot:container-start>
            <div class="topContent d-flex justify-content-between align-items-center mb-2 pe-5">
              <div class="title">PG Soft</div>
              <router-link to="/gameList" class="total px-3 py-1 fw-bold me-4">ALL 102</router-link>
            </div>
          </template>
          <swiper-slide>
            <div class="row row-cols-3 g-2">
              <div class="col" v-for="item in gameImgData.pg.list1" :key="item">
                <div class="img">
                  <img :src="item.imgUrl" class="w-100" />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="row row-cols-3 g-2">
              <div class="col" v-for="item in gameImgData.pg.list2" :key="item">
                <div class="img">
                  <img :src="item.imgUrl" class="w-100" />
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <!-- 6z game -->
        <swiper :navigation="true" :modules="modules" class="sixzGameListSwiper mt-3">
          <template v-slot:container-start>
            <div class="topContent d-flex justify-content-between align-items-center mb-2 pe-5">
              <div class="title">6z Originals</div>
              <router-link to="/gameList" class="total px-3 py-1 fw-bold me-4">ALL 41</router-link>
            </div>
          </template>
          <swiper-slide>
            <div class="row row-cols-3 g-2">
              <div class="col" v-for="item in gameImgData.sixz.list1" :key="item">
                <div class="img">
                  <img :src="item.imgUrl" class="w-100" />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="row row-cols-3 g-2">
              <div class="col" v-for="item in gameImgData.sixz.list2" :key="item">
                <div class="img">
                  <img :src="item.imgUrl" class="w-100" />
                </div>
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
            <div class="col" v-for="item in gameImgData.Provedor" :key="item">
              <img :src="item.imgUrl" alt="" class="w-100" />
            </div>
          </div>
        </div>
        <!-- LIVE game -->
        <swiper :navigation="true" :modules="modules" class="liveGameListSwiper mt-3">
          <template v-slot:container-start>
            <div class="topContent d-flex justify-content-between align-items-center mb-2 pe-5">
              <div class="title">Live Casino</div>
              <router-link to="/gameList" class="total px-3 py-1 fw-bold me-4">ALL 55</router-link>
            </div>
          </template>
          <swiper-slide>
            <div class="row row-cols-3 g-2">
              <div class="col" v-for="item in gameImgData.live.list1" :key="item">
                <div class="img">
                  <img :src="item.imgUrl" class="w-100" />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="row row-cols-3 g-2">
              <div class="col" v-for="item in gameImgData.live.list2" :key="item">
                <div class="img">
                  <img :src="item.imgUrl" class="w-100" />
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </section>
      <footer class="container-fluid footer">
        <div class="bottomLogo mb-4 pt-3">
          <img src="../assets/images/logo.png" class="img-fluid" alt="" />
        </div>
        <div class="customerService mb-3">
          <a href="#" class="mx-2">
            <img src="https://6z.com/img/persons.ac57c729.png" alt="" />
          </a>
          <a href="#" class="mx-2">
            <img src="https://6z.com/img/service.1a114e92.png" alt="" />
          </a>
        </div>
        <div class="share mb-3">
          <span class="d-flex justify-content-center"
            >6Z GAME irá responder todas suas dúvidas. Entre em contato usando uma das formas
            abaixo.</span
          >
          <div class="d-flex justify-content-around mt-3">
            <a href="#" class="text-decoration-none">
              <img src="https://6z.com/img/facebook.3fa7319c.svg" alt="" />
            </a>
            <a href="#" class="text-decoration-none">
              <img src="https://6z.com/img/twitter.cff17340.svg" alt="" />
            </a>
            <a href="#" class="text-decoration-none">
              <img src="../assets/images/icon/youtube.png" alt="" />
            </a>
            <a href="#" class="text-decoration-none">
              <img src="https://6z.com/img/telegram.dbf9a86f.svg" alt="" />
            </a>
            <a href="#" class="text-decoration-none">
              <img src="https://6z.com/img/whatsapp.e195b1e8.svg" alt="" />
            </a>
            <a href="#" class="text-decoration-none">
              <img src="https://6z.com/img/ins.5bd9c20b.png" alt="" />
            </a>
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
            6z.com é operada pela Dubet N.V., número de registro da empresa 10692, com endereço
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
                <div class="email ms-2">royal@6z.com</div>
              </li>
              <li class="d-flex justify-content-center mb-4">
                <div class="text">Partners</div>
                <div class="email ms-2">partners@6z.com</div>
              </li>
              <li class="d-flex justify-content-center mb-4">
                <div class="text">Legal</div>
                <div class="email ms-2">trusted@6z.com</div>
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
            </div>
          </div>
          <div @click="toTop" class="topBtn mx-auto">
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
    </div>
</template>
