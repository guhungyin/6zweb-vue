<script>
import CloseBtn from '../components/CloseBtn.vue'
export default {
  data() {
    return {
      pwdFlag: true,
    }
  },
  components: {
    CloseBtn
  },
  methods: {
    // 切換是否顯示密碼
    changePwd() {
      this.pwdFlag = !this.pwdFlag
    },
  }
}
</script>
<template>
  <div class="routerView">
    <header class="headerBack d-flex justify-content-between align-items-center px-2">
      <h2 class="title">Reset Account</h2>
      <CloseBtn></CloseBtn>
    </header>
    <div class="main">
      <div class="container-fluid">
        <div class="resetPhoneTitle fw-bold mt-4 mb-3">Encontre sua conta</div>
        <div class="text mb-4">Insira seu número de celular para procurar a sua conta.</div>
        <!-- 電話 -->
        <div class="phoneInput position-relative mt-3">
          <input
            class="form-control py-2"
            type="number"
            placeholder="Número de Celular"
            v-model.trim="this.mobile"
          />
          <span>+55</span>
        </div>
        <div class="tips my-2">Please enter the correct phone number</div>
        <!-- 驗證碼 -->
        <div class="verificationCode position-relative mt-3">
          <input
            class="form-control py-2"
            type="text"
            placeholder="Digite o código de verificação"
          />
          <button class="btn" type="button">Obtivermos</button>
        </div>
        <div class="tips my-2">Please enter verification code</div>
        <!-- 密碼 -->
        <div class="passwordInput position-relative mt-3">
          <input
            class="form-control py-2"
            placeholder="Senha"
            :type="this.pwdFlag ? 'password' : 'text'"
            v-model.trim="this.password"
          />
          <div :class="this.pwdFlag ? 'textIcon' : 'pwdIcon'" @click="changePwd"></div>
        </div>
        <div class="tips my-2">Please enter the correct password</div>
        <!-- 確認密碼 -->
        <div class="passwordInput position-relative mt-3">
          <input
            class="form-control py-2"
            placeholder="Confirme a senha"
            :type="this.pwdFlag ? 'password' : 'text'"
            v-model.trim="this.password"
          />
          <div :class="this.pwdFlag ? 'textIcon' : 'pwdIcon'" @click="changePwd"></div>
        </div>
        <div class="tips my-2">Please enter the correct password</div>
        <button type="submit" class="btn continueBtn w-100 mt-4">Continuar</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main{
  padding-top: 4rem;
}
.resetPhoneTitle {
  color: var(--primary);
  text-align: center;
  font-size: 1.3rem;
}
.text {
  color: var(--fff);
  text-align: center;
  font-size: .9rem;
}
input {
  color: #868686;
  height: 3rem;
}
input::placeholder {
  color: #4d565e;
}
.phoneInput input {
  color: var(--fff);
  text-indent: 3rem;
}
.phoneInput input::placeholder {
  color: #4d565e;
}
.phoneInput input[type='number']::-webkit-outer-spin-button,
.phoneInput input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.phoneInput input[type='number'] {
  -moz-appearance: textfield;
}
.phoneInput span {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translate(0, -50%);
  color: #4d565e;
}
.verificationCode .btn{
  position: absolute;
  font-size: .9rem;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  color: var(--primary);
}
.verificationCode .btn:active{
  border: none;
}
.passwordInput div {
  position: absolute;
  top: 50%;
  right: 1rem;
  width: 1rem;
  height: 1rem;
  transform: translate(0, -50%);
}
.passwordInput div.textIcon {
  background: url('../assets/images/icon/eye-slash.svg') no-repeat center center / contain;
}
.passwordInput div.pwdIcon {
  background: url('../assets/images/icon/eye-fill.svg') no-repeat center center / contain;
}
.tips {
  color: #e53535;
  font-size: 0.9rem;
  display: none;
}
.tips.active {
  display: block;
}
.continueBtn {
  background: var(--greenGradient);
  color: var(--fff);
  border: none;
  opacity: 0.4;
  border-radius: 2px;
  padding: 0.56rem 0;
}
.continueBtn:active{
  color: var(--fff);
}
.continueBtn.active {
  opacity: 1;
}
</style>
