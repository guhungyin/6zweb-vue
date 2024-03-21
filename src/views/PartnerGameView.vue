<script>
import { useCommonStore } from '@/stores/modules/common'
import { useUserStore } from '@/stores/modules/user'

export default {
  data() {
    return {
      isMenuActive: false,
      gameUrl: ''
    }
  },
  created() {
    if (this.commonStore.playGame.cp === 'pg_electronic') {
      this.gameUrl =
        'https://api.wins888.club/platform/pg/gameLogin/' +
        this.commonStore.playGame.gameId +
        '?token=' +
        this.userStore.ticket
    } else {
      if (this.commonStore.playGame.cp === 'tada') {
        this.gameUrl = this.commonStore.playGame.gameUrl
        console.log('-----> tada game url: ', this.gameUrl)
      }
    }

    console.log('--------> game url ', this.gameUrl)
  },
  methods: {
    toggleActive() {
      this.isMenuActive = !this.isMenuActive
    },
    handleClose() {
      this.$router.replace({ name: 'play' })
      this.$router.go(-1)
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
  <div class="routerView">
    <div class="partnerView">
      <iframe :src="gameUrl" frameborder="0" scrolling="no"></iframe>
      <button
        class="btn fullScreenExitBtn border-0"
        @click="toggleActive"
        :class="{ active: isMenuActive }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#FFF"
          class="bi bi-fullscreen-exit"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z"
          />
        </svg>
      </button>
      <ul class="p-0 m-0 bottomMenu" :class="{ active: isMenuActive }">
        <li>
          <a data-bs-toggle="offcanvas" href="#mainMenu" aria-controls="mainMenu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#FFF"
              class="bi bi-list"
              viewBox="0 0 16 16"
              data-v-dfea027f=""
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                data-v-dfea027f=""
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <button class="btn fullScreenBtn" @click="toggleActive">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#FFF"
              class="bi bi-fullscreen"
              viewBox="0 0 16 16"
            >
              <path
                d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5"
              />
            </svg>
          </button>
        </li>
        <li>
          <router-link to="/deposit">
            <svg
              data-v-dfea027f=""
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#FFF"
              class="bi bi-wallet-fill"
              viewBox="0 0 16 16"
            >
              <path
                data-v-dfea027f=""
                d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z"
              ></path>
              <path
                data-v-dfea027f=""
                d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z"
              ></path>
            </svg>
          </router-link>
        </li>
        <li>
          <router-link to="" @click="handleClose">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#FFF"
              class="bi bi-power"
              viewBox="0 0 16 16"
            >
              <path d="M7.5 1v7h1V1z" />
              <path
                d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"
              />
            </svg>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.partnerView {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #000;
}
.partnerView iframe {
  width: 100%;
  height: 100%;
  background-color: gray;
}
.partnerView ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  animation: fadeIn 0.5s;
}
.partnerView ul.active {
  display: none;
  animation: fadeOut 0.5s;
}
.partnerView ul li {
  width: 25%;
  text-align: center;
}
.partnerView .fullScreenExitBtn {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 1vh;
  display: none;
}
.partnerView .fullScreenExitBtn.active {
  display: flex;
  animation: fadeIn 0.5s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
