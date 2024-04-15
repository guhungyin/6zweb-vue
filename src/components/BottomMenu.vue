<script>
import { useUserStore } from '@/stores/modules/user'

export default {
  methods: {
    wallterDetails() {
      this.userStore.walletDetails()
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
<template>
  <section class="bottomMenu position-fixed w-100">
    <ul class="d-flex justify-content-between align-items-end pb-2 px-0 m-0 h-100">
      <li :class="{ active: $route.path === '/' }">
        <RouterLink
          to="/"
          class="d-flex flex-column justify-content-center align-items-center text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#FFF"
            class="bi bi-house-door-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"
            />
          </svg>
          <span class="bottomMenuName mt-2">Início</span>
        </RouterLink>
      </li>
      <li :class="{ active: $route.path === '/deposit' }">
        <RouterLink
          to="/deposit"
          class="d-flex flex-column justify-content-center align-items-center text-decoration-none p-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#FFF"
            class="bi bi-wallet-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z"
            />
            <path
              d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z"
            />
          </svg>
          <span class="bottomMenuName mt-2">Depósito</span>
        </RouterLink>
      </li>
      <li class="main">
        <RouterLink
          to="/affiliate"
          class="d-flex flex-column justify-content-center align-items-center text-decoration-none p-0"
        >
          <img src="@/assets/images/icon/afiliado.png" width="50" height="50" alt="" />
          <span class="bottomMenuName mt-2">Afiliado</span>
        </RouterLink>
      </li>
      <li>
        <button
          class="btn d-flex flex-column justify-content-center align-items-center text-decoration-none p-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#profileWindow"
          aria-controls="profileWindow"
          @click="wallterDetails"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#FFF"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
          <span class="bottomMenuName mt-2">Perfil</span>
        </button>
      </li>
      <li>
        <a
          class="d-flex flex-column justify-content-center align-items-center text-decoration-none p-0"
          data-bs-toggle="offcanvas"
          href="#mainMenu"
          aria-controls="mainMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#FFF"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
          <span class="bottomMenuName mt-2">Menu</span>
        </a>
      </li>
    </ul>
  </section>
</template>
<style scoped>
.bottomMenu {
  max-width: 34rem;
  bottom: 0;
  height: 4rem;
  z-index: 1;
  background-color: var(--black2);
}
.bottomMenu ul {
  box-sizing: border-box;
}
.bottomMenu ul li {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.bottomMenu ul li .bottomMenuName {
  color: var(--gray1);
  font-size: 0.7rem;
}
.bottomMenu .active svg,
.bottomMenu .active .bottomMenuName {
  color: var(--primary);
  fill: var(--primary);
}
</style>
