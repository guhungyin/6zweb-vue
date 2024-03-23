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
    }
  }
}
</script>
<template>
  <div class="routerView">
    <header class="headerBack d-flex justify-content-between align-items-center px-2">
      <h2 class="title">Alterar senha</h2>
      <CloseBtn></CloseBtn>
    </header>
    <div class="main changePasswordWindow">
      <div class="container-fluid pt-3">
        <div class="changePasswordTitle fw-bold mb-3">Alterar senha</div>
        <div class="passwordInput position-relative mb-4">
          <input
            class="form-control py-2"
            placeholder="Atual senha"
            :type="this.pwdFlag ? 'password' : 'text'"
            v-model.trim="password"
          />
          <div :class="this.pwdFlag ? 'textIcon' : 'pwdIcon'" @click="changePwd"></div>
          <!-- +active顯示 -->
          <div class="tips mt-2">Please enter the correct password</div>
        </div>
        <div class="passwordInput position-relative mb-5">
          <input
            class="form-control py-2"
            placeholder="Atual senha"
            :type="this.pwdFlag ? 'password' : 'text'"
            v-model.trim="password"
          />
          <div :class="this.pwdFlag ? 'textIcon' : 'pwdIcon'" @click="changePwd"></div>
          <!-- +active顯示 -->
          <div class="tips mt-2">Please enter the correct password</div>
        </div>
        <button type="submit" class="btn loginBtn w-100 mb-4">Mudar</button>
        <router-link to="/resetPhone" class="forgetThePassword">Esqueci minha senha?</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.changePasswordWindow{
  margin-top: 4rem;
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
.passwordInput input {
  height: 3.2rem;
  text-indent: 1rem;
  color: var(--fff);
}
.passwordInput input::placeholder {
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
.passwordInput div.textIcon {
  background: url('../assets/images/icon/eye-slash.svg') no-repeat center center / contain;
}
.passwordInput div.pwdIcon {
  background: url('../assets/images/icon/eye-fill.svg') no-repeat center center / contain;
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
