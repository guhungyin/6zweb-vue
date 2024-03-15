<script>
    import GameLogo from '@/components/home/GameLogo.vue'
    import BottomMenu from '@/components/BottomMenu.vue'
    export default {
        data() {
            return {
            activeTab: '',
            };
        },
        methods: {
            setActiveTab(tab) {
            this.activeTab = tab;
            },
        },
        components: {
            GameLogo,
            BottomMenu,
        }
    }
</script>
<template>
    <div class="routerView gameListWindow">
        <header class="position-fixed">
          <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <router-link to="/" class="navbar-brand logo">
                <GameLogo></GameLogo>
              </router-link>
              <!-- 登出顯示登入按鈕 -->
              <!-- <a href="./login.html" class="btn loginBtn fw-bold">Login</a> -->
              <!-- 登入顯示金額 + 儲值 + 個人選單按鈕 -->
              <div class="right">
                <div class="userMoney me-2">
                  <img class="me-1" src="@/assets/images/icon/rmoneyIcon.svg" alt="">
                  0.00
                </div>
                <router-link to="/deposit" class="depositBtn me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" class="bi bi-wallet-fill me-2" viewBox="0 0 16 16">
                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z"></path>
                    <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z"></path>
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
        <div class="tabHome">
            <ul class="p-0">
                <li class="px-3 py-2">
                    <router-link to="/promotions">
                        <span>Promoções</span>
                    </router-link>
                </li>
                <li class="px-3 py-2" :class="{ 'active': activeTab === 'recommendation' }">
                    <span @click="setActiveTab('recommendation')">Recomendação</span>
                </li>
                <li class="px-3 py-2" :class="{ 'active': activeTab === 'spin' }">
                    <span @click="setActiveTab('spin')">Spin</span>
                </li>
                <li class="px-3 py-2" :class="{ 'active': activeTab === 'slots' }">
                    <span @click="setActiveTab('slots')">Slots</span>
                </li>
            </ul>
        </div>
        <div class="main">
            <div class="container">
                <div class="row row-cols-3 g-3">
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
                    </router-link>
                    <router-link to="/play" class="col gameItem">
                        <img class="bgImg w-100" src="https://6z.com/images/game/PIC_Mines.jpg" />
                    </router-link>
                    <router-link to="/play" class="col gameItem">
                        <img class="bgImg w-100" src="https://6z.com/images/game/PIC_Mines.jpg" />
                    </router-link>
                </div>
            </div>
            <div class="sum mx-auto mt-3"> Mostrando 24 de 42 jogos </div>
            <button class="btn moreBtn mx-auto mt-3 px-3 py-2">Carregar Mais</button>
        </div>
        <!-- 下方選單 -->
        <BottomMenu></BottomMenu>
    </div>
</template>
<style scoped>
    .gameListWindow{
        background-color: #1a1a1a;
    }
    .tabHome {
    margin-top: 4.5rem;
    }
    .tabHome ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    }
    .tabHome li {
    background-color: var(--black2);
    }
    .tabHome li.active{
        background-color: #2d3035;
    }
    .tabHome li span {
    font-size: 0.8rem;
    white-space: nowrap;
    color: var(--gray1);
    }
    .main{
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        height: calc(100vh - 12rem);
        padding-bottom: 2rem;
        background-color: #24262b;
    }
    .main::-webkit-scrollbar{display: none;}
    .sum{
        font-size: .7rem;
        text-align: center;
        color: #c4c4c4;
    }
    .moreBtn{
        border: none;
        width: 12rem;
        font-size: .8rem;
        text-align: center;
        color: var(--fff);
        background-color: #1a1a1a;
        border-radius: .3rem;
    }
    .moreBtn:active{
        color: var(--fff);
        background-color: #1a1a1a;
    }
</style>