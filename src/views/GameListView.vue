<script>
import GameLogo from '@/components/home/GameLogo.vue'
import BottomMenu from '@/components/BottomMenu.vue'
import { useCommonStore } from '@/stores/modules/common'
import { useUserStore } from '@/stores/modules/user'
export default {
  data() {
    return {
      activeTab: '',
      activeList: [],
      queryList: [],
      logged: false,
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
    this.activeTab = this.commonStore.selectGameType
    this.byType()
  },
  methods: {
    setActiveTab(tab) {
      this.commonStore.setSelectGameType(tab)
      this.activeTab = tab
      this.byType()
    },
    setParams(gamPeInfo) {
      this.commonStore.setPlayGame(gamPeInfo)
    },
    byType() {
      if (this.commonStore.selectGameType === 'Hot') {
        this.commonStore
          .hotList()
          .then((res) => {
            this.queryList = []
            this.activeList = []
            this.totalSize = 0
            this.pageNumber = 0
            this.currentSize = 0
            this.pageSize = 24
            res.data.forEach((v) => this.queryList.push(v))
            this.totalSize = res.data.length
            this.nextPage()
          })
          .catch((err) => {
            console.log('查询热门游戏错误: ', err.message)
          })

        return
      }

      this.commonStore
        .byType(this.commonStore.selectGameType)
        .then((res) => {
          this.queryList = []
          this.activeList = []
          this.totalSize = 0
          this.pageNumber = 0
          this.currentSize = 0
          this.pageSize = 24
          res.data.forEach((v) => {
            this.queryList.push(v)
          })
          this.totalSize = res.data.length
          this.nextPage()
        })
        .catch((err) => {
          console.log('查询' + this.commonStore.selectGameType + '错误: ', err.message)
        })
    },
    nextPage() {
      this.pageNumber++
      if (this.commonStore.selectProvedor) {
        let temList = []
        let endLength =
          this.pageSize * this.pageNumber > this.queryList.length
            ? this.queryList.length
            : this.pageSize * this.pageNumber

        temList = this.queryList.slice((this.pageNumber - 1) * this.pageSize, endLength)
        // if (this.commonStore.selectProvedor.cp == 'PG') {
        //   let endLength =
        //     this.pageSize * this.pageNumber > this.commonStore.pgList.length
        //       ? this.commonStore.pgList.length
        //       : this.pageSize * this.pageNumber

        //   temList = this.commonStore.pgList.slice((this.pageNumber - 1) * this.pageSize, endLength)
        // } else if (this.commonStore.selectProvedor.cp == 'TADA') {
        //   let endLength =
        //     this.pageSize * this.pageNumber > this.commonStore.tadaList.length
        //       ? this.commonStore.tadaList.length
        //       : this.pageSize * this.pageNumber

        //   temList = this.commonStore.tadaList.slice(
        //     (this.pageNumber - 1) * this.pageSize,
        //     endLength
        //   )
        // } else if (this.commonStore.selectProvedor.cp == 'Evolution') {
        //   let endLength =
        //     this.pageSize * this.pageNumber > this.commonStore.evoList.length
        //       ? this.commonStore.evoList.length
        //       : this.pageSize * this.pageNumber

        //   temList = this.commonStore.evoList.slice((this.pageNumber - 1) * this.pageSize, endLength)
        // }
        temList.forEach((v) => this.activeList.push(v))
        this.currentSize = this.activeList.length
      }
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
  <div class="routerView gameListWindow">
    <header class="position-fixed">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid h-100 px-1 px-sm-3">
          <router-link to="/" class="navbar-brand me-0">
            <GameLogo></GameLogo>
          </router-link>
          <div class="right" v-show="!logged">
            <router-link to="/register" class="registerBtn me-3">Cadastre-se</router-link>
            <router-link to="/login" class="btn loginBtn fw-bold">Login</router-link>
          </div>
          <div class="right" v-show="logged">
            <div class="userMoney me-2">
              <img src="@/assets/images/icon/rmoneyIcon.svg" alt="" />
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
    <div class="tabList">
      <ul class="p-0">
        <li class="hot" :class="{ active: activeTab === 'Hot' }" @click="setActiveTab('Hot')">
          <div class="d-flex">
            <i class="icon mb-2"></i>
            <span>Hot</span>
          </div>
        </li>
        <!-- <li
          class="record"
          :class="{ active: activeTab === 'Record' }"
          @click="setActiveTab('Record')"
        >
          <div class="d-flex">
            <i class="icon mb-2"></i>
            <span>Record</span>
          </div>
        </li> -->
        <li class="slots" :class="{ active: activeTab === 'Slots' }" @click="setActiveTab('Slots')">
          <div class="d-flex">
            <i class="icon mb-2"></i>
            <span>Slots</span>
          </div>
        </li>
        <li class="live" :class="{ active: activeTab === 'Live' }" @click="setActiveTab('Live')">
          <div class="d-flex">
            <i class="icon mb-2"></i>
            <span>Live</span>
          </div>
        </li>
        <li class="fish" :class="{ active: activeTab === 'Fish' }" @click="setActiveTab('Fish')">
          <div class="d-flex">
            <i class="icon mb-2"></i>
            <span>Fish</span>
          </div>
        </li>
        <li
          class="sports"
          :class="{ active: activeTab === 'Sports' }"
          @click="setActiveTab('Sports')"
        >
          <div class="d-flex">
            <i class="icon mb-2"></i>
            <span>Sports</span>
          </div>
        </li>
        <li
          class="blockchain"
          :class="{ active: activeTab === 'Blockchain' }"
          @click="setActiveTab('Blockchain')"
        >
          <div class="d-flex">
            <i class="icon mb-2"></i>
            <span>Blockchain</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="main">
      <div class="container mt-2">
        <div class="row row-cols-3 g-3">
          <router-link
            to="/play"
            class="col gameItem"
            v-for="item in this.activeList"
            :key="item"
            @click="setParams(item)"
          >
            <img class="bgImg w-100" :src="item.iconName" />
          </router-link>
          <!-- <router-link to="/play" class="col gameItem">
            <img class="bgImg w-100" src="https://6z.com/images/game/PIC_Mines.jpg" />
          </router-link>
          <router-link to="/play" class="col gameItem">
            <img class="bgImg w-100" src="https://6z.com/images/game/PIC_Mines.jpg" />
          </router-link>
          <router-link to="/play" class="col gameItem">
            <img class="bgImg w-100" src="https://6z.com/images/game/PIC_Mines.jpg" />
          </router-link>
          <router-link to="/play" class="col gameItem">
            <img class="bgImg w-100" src="https://6z.com/images/game/PIC_Mines.jpg" />
          </router-link>
          <router-link to="/play" class="col gameItem">
            <img class="bgImg w-100" src="https://6z.com/images/game/PIC_Mines.jpg" />
          </router-link>
          <router-link to="/play" class="col gameItem">
            <img class="bgImg w-100" src="https://6z.com/images/game/PIC_Mines.jpg" />
          </router-link>
          <router-link to="/play" class="col gameItem">
            <img class="bgImg w-100" src="https://6z.com/images/game/PIC_Mines.jpg" />
          </router-link>
          <router-link to="/play" class="col gameItem">
            <img class="bgImg w-100" src="https://6z.com/images/game/PIC_Mines.jpg" />
          </router-link>
          <router-link to="/play" class="col gameItem">
            <img class="bgImg w-100" src="https://6z.com/images/game/PIC_Mines.jpg" />
          </router-link> -->
        </div>
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
.gameListWindow {
  background-color: #1a1a1a;
}
.tabList {
  margin-top: 4rem;
  background-color: #212227;
  height: 4.8rem;
}
.tabList ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 100%;
  overflow-x: auto;
}
.tabList ul::-webkit-scrollbar {
  display: none;
}
.tabList li {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 1.2rem;
}
.tabList li.active {
  background-color: #2d3035;
}
.tabList li div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.tabList li .icon {
  width: 1.5rem;
  height: 1.5rem;
}
.tabList li.hot .icon {
  background: url('@/assets/images/icon/gameListIcon/hot_off.png') no-repeat center center / contain;
}
.tabList li.record .icon {
  background: url('@/assets/images/icon/gameListIcon/record_off.png') no-repeat center center /
    contain;
}
.tabList li.slots .icon {
  background: url('@/assets/images/icon/gameListIcon/slots_off.png') no-repeat center center /
    contain;
}
.tabList li.live .icon {
  background: url('@/assets/images/icon/gameListIcon/live_off.png') no-repeat center center /
    contain;
}
.tabList li.fish .icon {
  background: url('@/assets/images/icon/gameListIcon/fish_off.png') no-repeat center center /
    contain;
}
.tabList li.blockchain .icon {
  background: url('@/assets/images/icon/gameListIcon/blockchain_off.png') no-repeat center center /
    contain;
}
.tabList li.sports .icon {
  background: url('@/assets/images/icon/gameListIcon/sports_off.png') no-repeat center center /
    contain;
}

.tabList li.active.hot .icon {
  background: url('@/assets/images/icon/gameListIcon/hot_on.png') no-repeat center center / contain;
}
.tabList li.active.record .icon {
  background: url('@/assets/images/icon/gameListIcon/record_on.png') no-repeat center center /
    contain;
}
.tabList li.active.slots .icon {
  background: url('@/assets/images/icon/gameListIcon/slots_on.png') no-repeat center center /
    contain;
}
.tabList li.active.live .icon {
  background: url('@/assets/images/icon/gameListIcon/live_on.png') no-repeat center center / contain;
}
.tabList li.active.fish .icon {
  background: url('@/assets/images/icon/gameListIcon/fish_on.png') no-repeat center center / contain;
}
.tabList li.active.blockchain .icon {
  background: url('@/assets/images/icon/gameListIcon/blockchain_on.png') no-repeat center center /
    contain;
}
.tabList li.active.sports .icon {
  background: url('@/assets/images/icon/gameListIcon/sports_on.png') no-repeat center center /
    contain;
}

.tabList li span {
  font-size: 0.9rem;
  white-space: nowrap;
  color: var(--gray1);
}
.main {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100vh - 12rem);
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
</style>
