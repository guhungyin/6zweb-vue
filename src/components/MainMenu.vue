<script>
import { Offcanvas } from 'bootstrap'
import GameLogo from '@/components/home/GameLogo.vue'
import { useCommonStore } from '@/stores/modules/common'
import { useUserStore } from '@/stores/modules/user'
export default {
  data() {
    return {
      bsOffcanvas: null
    }
  },
  components: {
    GameLogo
  },
  watch: {
    $route() {
      this.bsOffcanvas.hide()
    }
  },
  mounted() {
    const myOffcanvas = document.getElementById('mainMenu')
    this.bsOffcanvas = new Offcanvas(myOffcanvas)
  },
  methods: {
    queryCashback() {
      this.userStore.cashback()
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
  <div
    class="mainMenu offcanvas offcanvas-start"
    tabindex="-1"
    id="mainMenu"
    aria-labelledby="mainMenuLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="mainMenuLabel">
        <GameLogo></GameLogo>
      </h5>
      <button type="button" class="btn text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#FFFFFF"
          class="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </button>
    </div>
    <div class="offcanvas-body">
      <ul class="gameLink px-4 py-2">
        <li>
          <router-link to="/affiliate">
            <img class="icon" src="@/assets/images/icon/menuIcon01.png" alt="" />
            Afiliado - Ganhe R$10000 por mês
          </router-link>
        </li>
        <li>
          <router-link to="/cashwheel">
            <img class="icon" src="@/assets/images/icon/menuIcon02.png" alt="" />
            Receba R$ 100 de graça
          </router-link>
        </li>
        <li>
          <router-link to="/cashback" @click="queryCashback">
            <img class="icon" src="@/assets/images/icon/menuIcon03.png" alt="" />
            Cashback {{ this.userStore.cashbackMax }}
          </router-link>
        </li>
      </ul>
      <ul class="pageLink px-4 py-2">
        <li>
          <router-link to="/deposit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#8ea7bb"
              class="bi bi-wallet-fill icon"
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
        </li>
        <li>
          <router-link to="/promotions">
            <img class="icon" src="@/assets/images/icon/menuIcon04.png" alt="" />
            Promoções
          </router-link>
        </li>
        <li>
          <router-link to="/downloadApp">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#8ea7bb"
              class="bi bi-box-seam-fill icon"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"
              />
            </svg>
            Wins888 APP
          </router-link>
          <div class="installBtn ms-auto">
            <router-link to="/downloadApp"> INSTALAR </router-link>
          </div>
        </li>
        <li>
          <router-link to="/help">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#8ea7bb"
              class="bi bi-question-circle-fill icon"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"
              />
            </svg>
            Visitar o Centro de Ajuda
          </router-link>
        </li>
        <li>
          <a href="mailto:support@wins888.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#8ea7bb"
              class="bi bi-envelope-fill icon"
              viewBox="0 0 16 16"
            >
              <path
                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"
              />
            </svg>
            Relatar Problema
          </a>
        </li>
      </ul>
      <div class="socialLink px-4 py-2 mb-3">
        <h6 class="fw-bold mb-3">Junte-se à nossa comunidade</h6>
        <div class="mb-2">
          <template v-for="itemSocial in this.commonStore.social" :key="itemSocial">
            <a :href="itemSocial.link" class="me-3">
              <img :src="itemSocial.src" alt="" />
            </a>
          </template>
          <!-- <a href="#">
            <img
              src="data:image/png;base64,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"
            />
          </a> -->
        </div>
      </div>
      <ul class="helpLink px-4 py-2">
        <li>
          <a :href="this.commonStore.mainService.service" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#3bc117"
              class="bi bi-headset icon"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5"
              />
            </svg>
            Suporte ao vivo
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.mainMenu {
  position: absolute;
  font-size: 1rem;
  width: 100% !important;
  border: none !important;
  background-color: #17191b;
  color: var(--gray1);
}
.mainMenu li {
  display: flex;
  align-items: center;
  line-height: 3rem;
}
.mainMenu .logo {
  height: 30px;
}
.mainMenu li .icon {
  margin-right: 1rem;
  width: 1.2rem;
  height: 1.2rem;
}
.mainMenu .pageLink {
  background-color: #24262b;
}
.mainMenu a {
  color: var(--gray1);
}
.mainMenu .pageLink .installBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--redGradient);
  font-size: 1rem;
  border-radius: 0.2rem;
  padding: 0 3rem;
  width: 5rem;
  height: 2rem;
}
.mainMenu .pageLink .installBtn a {
  color: var(--fff);
  font-size: 1rem;
}
.mainMenu .socialLink {
  background-color: #24262b;
}
.mainMenu .socialLink img {
  width: 2.5rem;
  height: 2.5rem;
}
.mainMenu .helpLink {
  background-color: #24262b;
}
</style>
