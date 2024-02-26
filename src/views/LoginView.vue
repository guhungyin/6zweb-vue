<script>
import CloseBtn from '../components/CloseBtn.vue'
export default {
  components: {
    CloseBtn
  }
}
</script>
<template>
  <header class="headerBack d-flex justify-content-between align-items-center px-2">
    <h2 class="title">Bem Vindo ao</h2>
    <CloseBtn></CloseBtn>
  </header>
  <div class="main">
    <img class="headerBg w-100" src="../assets/images/login/bg.jpg" alt="" />
    <div class="container-fluid">
      <div class="loginTitle">Login</div>
      <div class="phoneInput position-relative mb-3">
        <input class="form-control py-2" type="text" placeholder="Número de Celular" />
        <span>+55</span>
      </div>
      <div class="passwordInput position-relative mb-2">
        <input class="form-control py-2" placeholder="Senha" type="password" />
        <span>
          <!-- 顯示密碼 -->
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#98a7b5" class="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                    </svg> -->
          <!-- 不顯示密碼 -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#98a7b5"
            class="bi bi-eye-slash-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"
            />
            <path
              d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"
            />
          </svg>
        </span>
      </div>
      <router-link to="/resetPhone" class="forgetPassword mb-4">Esqueci minha senha?</router-link>
      <button type="button" class="btn loginBtn w-100 mb-4">Login</button>
      <div class="link mb-5">
        Novo no 6Z.com?
        <router-link to="/" class="ms-2">Criar Conta Nova</router-link>
      </div>
      <div class="or mb-3">
        <span class="mx-4">OU</span>
      </div>
      <div class="googleLoginBtn mx-auto">
        <img class="me-2" src="../assets/images/login/googleIcon.svg" alt="" />
        Entrar com Google+
      </div>
    </div>
  </div>
</template>
<style scoped>
.app {
  background-color: var(--black2);
  height: 100vh;
}
.phoneInput input {
  color: var(--fff);
  text-indent: 3rem;
}
.phoneInput span {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translate(0, -50%);
  color: #4d565e;
}
.passwordInput input {
  text-indent: 1rem;
  color: var(--fff);
}
.passwordInput span {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translate(0, -50%);
}
.forgetPassword {
  text-align: end;
  font-size: 0.8rem;
  color: var(--gray1);
}
.loginBtn {
  background: var(--greenGradient);
  color: var(--fff);
  border: none;
  opacity: 0.4;
  border-radius: 2px;
  padding: 0.56rem 0;
}
.loginBtn.active {
  opacity: 1;
}
.link {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d4d9e6;
  font-size: 0.8rem;
}
.link a {
  color: var(--primary);
}
.or {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #656e78;
  font-size: 0.7rem;
}
.or::before,
.or::after {
  content: '';
  background-color: #4d565e;
  flex: 1;
  height: 1px;
}
.googleLoginBtn {
  font-size: 1rem;
  height: 3rem;
  width: 16rem;
  border-radius: 0.2rem;
  background-color: #3f6bb3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--fff);
}
</style>
