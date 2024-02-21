<script>
  import { Offcanvas } from 'bootstrap'
  import GameLogo from '../components/home/GameLogo.vue';
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
    mounted(){
        const myOffcanvas = document.getElementById("profileWindow");
        this.bsOffcanvas = new Offcanvas(myOffcanvas);
    }
  }
</script>
<template>
    <div class="offcanvas profileWindow offcanvas-top" tabindex="-1" id="profileWindow" aria-labelledby="profileWindowLabel">
      <div class="offcanvas-header">
        <h5 id="profileWindowLabe l">
          <GameLogo></GameLogo>
        </h5>
        <button type="button" class="btn text-reset p-0" data-bs-dismiss="offcanvas" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
          </svg>
        </button>
      </div>
      <div class="offcanvas-body">
        <div class="main">
          <div class="userInfo">
            <div class="userContent d-flex justify-content-between align-items-center mb-3">
              <router-link to="/changePassword" class="userImg d-flex justify-content-between align-items-center ">
                <img class="me-3" src="https://6z.com/img/user.6da7e89a.png" alt="">
                <div class="d-flex flex-column">
                  <span>Conta</span>
                  <span>*********</span>
                </div>
              </router-link>
              <router-link to="/changePassword" class="changePassword d-flex">
                <i class="keyIcon me-2"></i>
                Mudar Senha
              </router-link>
            </div>
            <div class="coin d-flex justify-content-between position-relative mb-3">
              <div class="d-flex flex-column align-items-center w-50">
                <div class="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8ea7bb" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
                  </svg>
                  Saldo
                </div>
                <div class="num">
                  <span>R$ </span>
                  <span>0.00</span>
                </div>
              </div>
              <div class="d-flex flex-column align-items-center w-50">
                <div class="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8ea7bb" class="bi bi-gift-fill me-1" viewBox="0 0 16 16">
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z"/>
                  </svg>
                  Bônus
                </div>
                <div class="num">
                  <span>R$ </span>
                  <span>0.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="link d-flex align-items-center justify-content-around mb-3">
            <router-link to="/deposit" class="d-flex align-items-center justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#64d23e" class="bi bi-wallet-fill me-2" viewBox="0 0 16 16">
                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z"></path>
                <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z"></path>
              </svg>
              Depósito
            </router-link>
            <router-link to="/withdraw" class="d-flex align-items-center justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#64d23e" class="bi bi-cash-stack me-2" viewBox="0 0 16 16">
                <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z"/>
              </svg>
              Sacar
            </router-link>
          </div>
          <ul class="p-3 d-flex flex-wrap">
            <li class="py-2">
              <img class="icon" src="../assets/images/icon/transfer.png" alt="">
              <router-link to="/bets"> Minhas Apostas de Jogo </router-link>
            </li>
            <li class="py-2">
              <img class="icon" src="../assets/images/icon/coin.png" alt="">
              <router-link to="/transactions"> Transações </router-link>
            </li>
            <li class="py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8ea7bb" class="bi bi-question-circle-fill icon" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
              </svg>
              <router-link to="/help"> Ajuda </router-link>
            </li>
            <li class="py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8ea7bb" class="bi bi-chat-dots-fill icon" viewBox="0 0 16 16">
                <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
              </svg>
              <router-link to="/message"> Mensagem </router-link>
            </li>
            <li class="py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8ea7bb" class="bi bi-envelope-fill icon" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"></path>
              </svg>
              <router-link to="/contact"> Contate-nos </router-link>
            </li>
            <li class="py-2">
              <img class="icon" src="../assets/images/icon/share.png" alt="">
              <router-link to="#"> Afiliado - Ganhe R$10000 por mês </router-link>
            </li>
            <li class="py-2">
              <img class="icon" src="../assets/images/icon/money.png" alt="">
              <router-link to="#"> Cashback 25% </router-link>
            </li>
            <li class="py-2">
              <img class="icon" src="../assets/images/icon/danger.png" alt="">
              <router-link to="/promotions"> Promoções </router-link>
            </li>
            <li class="py-2">
              <img class="icon" src="../assets/images/icon/menuIcon02.png" alt="">
              <router-link to="#"> Receba R$ 100 de graça </router-link>
            </li>
          </ul>
          <div class="logOut px-3 mb-2">
            <img src="../assets/images/icon/logout.png" alt="">
            Login
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.profileWindow .offcanvas-header{
  background-color: var(--black1);
  height: 4rem;
}
.profileWindow .offcanvas-header img{
  height: 2.5rem;
}
.profileWindow .offcanvas-body{
  overflow: initial;
  background-color: #1f1f1f;
}
.profileWindow .main .userContent a{
  color: var(--blue);
}
.profileWindow .main .userContent .userImg img{
  width: 3rem;
}
.profileWindow .main .userContent .changePassword{
  color: var(--blue);
}
.profileWindow .main .userContent .keyIcon{
  width: 1rem;
  padding-bottom: 1rem;
  background: url('../assets/images/icon/key.png') no-repeat center center / contain;
}
.profileWindow .main .coin{
  color: var(--blue);
}
.profileWindow .main .coin::before{
  content: '';
  width: 1px;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 0;
  background-color: #4c4c4c;
  transform: translate(-50%,0);
}
.profileWindow .main .coin .num{
  color: var(--fff);
}
.profileWindow .main .link a{
  width: 7rem;
  height: 2.2rem;
  color: var(--fff);
  border-radius: .2rem;
  font-size: .8rem;
  background: linear-gradient(180deg,#303030,#494949);
}
.profileWindow .main ul{
  background-color: #2d3035;
}
.profileWindow .main ul li{
  width: 50%;
  display: flex;
  align-items: center;
}
.profileWindow .main ul li .icon{
  width: 0.9rem;
  height: 0.9rem;
  margin-right: 0.5rem;
}
.profileWindow .main ul li a{
  color: var(--blue);
  font-size: .7rem;
}
.profileWindow .main .logOut{
  display: flex;
  align-items: center;
  color: var(--blue);
  font-size: .8rem;
}
.profileWindow .main .logOut img{
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}
</style>