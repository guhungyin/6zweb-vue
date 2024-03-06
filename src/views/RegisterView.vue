<script>
import CloseBtn from '../components/CloseBtn.vue'
export default {
  data(){
    return{
      pwdFlag:true,
    }
  },
  components: {
    CloseBtn
  },
  methods: {
    // 切換是否顯示密碼
    changePwd(){
      this.pwdFlag =! this.pwdFlag;
    }
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
      <div class="loginTitle my-2 fw-bold">Cadastre-se</div>
      <div class="phoneInput position-relative mb-3">
        <input class="form-control py-2" type="text" placeholder="Número de Celular" />
        <span>+55</span>
      </div>
      <div class="passwordInput position-relative mb-2">
        <input 
          class="form-control py-2" 
          placeholder="Senha" 
          :type="this.pwdFlag ? 'password' : 'text'"
         />
        <div :class="this.pwdFlag ? 'textIcon' : 'pwdIcon'" @click="changePwd"></div>
      </div>
      <div class="form-check agreeText my-3">
        <input class="form-check-input" type="checkbox" value="" id="agreeCheck">
        <label class="form-check-label" for="agreeCheck">
          Eu concordo com os 
          <router-link to="/terms" class="agreeLink">acordo do usuário</router-link>
          e confirmo que tenho pelo menos 18 anos
        </label>
      </div>
      <button type="button" class="btn establishBtn w-100 mb-4"> Criar conta </button>
      <div class="link mb-4">
        Já tem uma conta?
        <router-link to="/login" class="ms-2"> Criar conta</router-link>
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
.headerBack{z-index: 3;}
.app {
  background-color: var(--black2);
  height: 100vh;
}
.main{
  max-width: 34rem;
  z-index: 2;
  margin-top: 0rem;
  position: fixed;
  background-color: var(--black1);
  top: 0;
  height: 100%;
}
.loginTitle{
  color: var(--fff);
}
.phoneInput input {
  color: var(--fff);
  text-indent: 3rem;
}
.phoneInput input::placeholder{
  color: #4d565e;
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
.passwordInput input::placeholder{
  color: #4d565e;
}
.passwordInput div {
  position: absolute;
  top: 50%;
  right: 1rem;
  width: 1rem;
  height: 1rem;
  transform: translate(0, -50%);
}
.passwordInput div.textIcon{
  background: url('../assets/images/icon/eye-slash.svg') no-repeat center center / contain ;
}
.passwordInput div.pwdIcon{
  background: url('../assets/images/icon/eye-fill.svg') no-repeat center center / contain ;
}
.agreeText {
  font-size: 0.8rem;
  color: var(--gray1);
}
.agreeText .form-check-input{
  background-color: #2d303580;
  border: 1px solid #919191;
}
.agreeText .form-check-input:focus{
  box-shadow: none;
}
.agreeText .agreeLink{
  color: var(--fff);
}
.establishBtn {
  background: var(--greenGradient);
  color: var(--fff);
  border: none;
  opacity: 0.4;
  border-radius: 2px;
  padding: 0.56rem 0;
}
.establishBtn:active{
  color: var(--fff);
}
.establishBtn.active {
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
