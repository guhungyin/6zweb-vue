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
    <h2 class="title">Alterar senha</h2>
    <CloseBtn></CloseBtn>
  </header>
  <div class="main">
    <div class="container-fluid">
      <div class="changePasswordTitle fw-bold mt-4 mb-3">Alterar senha</div>
      <div class="passwordInput position-relative mb-4">
        <input class="form-control py-2" type="text" placeholder="Atual senha" required />
        <!-- +active顯示 -->
        <div class="tips mt-2">Please enter the correct password</div>
      </div>
      <div class="passwordInput position-relative mb-5">
        <input class="form-control py-2" type="text" placeholder="Atual senha" required />
        <!-- +active顯示 -->
        <div class="tips mt-2">Please enter the correct password</div>
      </div>
      <button type="submit" class="btn loginBtn w-100 mb-4">Mudar</button>
      <router-link to="/resetPhone" class="forgetThePassword">Esqueci minha senha?</router-link>
    </div>
  </div>
</template>
<style scoped>
.app {
  background-color: var(--black2);
  height: 100vh;
  padding-top: 4rem;
}
.changePasswordTitle {
  color: var(--primary);
  text-align: center;
  font-size: 1.2rem;
}
.text {
  color: var(--fff);
  text-align: center;
  font-size: 0.8rem;
}
.passwordInput input {
  height: 3.2rem;
  background-color: #494949;
  color: #868686;
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
.tips {
  display: none;
  color: #e53535;
  font-size: 0.9rem;
}
.tips.active {
  display: block;
}
.forgetThePassword {
  display: block;
  color: var(--fff);
  text-align: right;
  font-size: 0.8rem;
}
</style>
