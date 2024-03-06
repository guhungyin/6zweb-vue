<script>
import CloseBtn from '../components/CloseBtn.vue'
import { ref, watch } from 'vue'
import { useUserStore } from '@/stores/modules/user'
export default {
  data() {
    return {
      pwdFlag: true,
      errorMsg: ''
    }
  },
  components: {
    CloseBtn
  },
  created() {},
  methods: {
    login() {
      console.log('账号：', this.mobile, ' 密码：', this.password)
      this.loginClick = true
      let loginUser = { mobile: this.mobile, password: this.password, source: '' }
      this.userStore
        .login(loginUser)
        .then((res) => {
          console.log('登录响应: ', res)
        })
        .catch((err) => {
          this.errorMsg = err.message
          this.errorActive = true
          console.log('登录失败: ', err.message)
        })
      console.log('账号：', this.mobile, ' 密码：')
    },
    // 切換是否顯示密碼
    changePwd() {
      this.pwdFlag = !this.pwdFlag
    }
  },
  setup() {
    const isActive = ref(false)
    const tips1Active = ref(false)
    const isDisabled = ref(true)
    const errorActive = ref(false)
    const loginClick = ref(false)
    const mobile = ref()
    const password = ref('')
    const userStore = useUserStore()

    watch(password, () => {
      if (password.value.length > 4) {
        isActive.value = true
        isDisabled.value = false

        if (loginClick.value) {
          tips1Active.value = false
        }
      } else {
        isActive.value = false
        isDisabled.value = true

        if (loginClick.value) {
          tips1Active.value = true
        }
      }
    })

    return {
      isActive,
      tips1Active,
      mobile,
      password,
      isDisabled,
      userStore,
      loginClick,
      errorActive
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
      <div class="loginTitle my-2 fw-bold">Login</div>
      <div class="phoneInput position-relative">
        <input
          class="form-control py-2"
          type="number"
          placeholder="Número de Celular"
          v-model.number="mobile"
        />
        <span>+55</span>
      </div>
      <div class="tips my-2">Please enter the correct phone number</div>
      <div class="passwordInput position-relative mt-3">
        <input
          class="form-control py-2"
          placeholder="Senha"
          :type="this.pwdFlag ? 'password' : 'text'"
          v-model.trim="password"
        />
        <div :class="this.pwdFlag ? 'textIcon' : 'pwdIcon'" @click="changePwd"></div>
      </div>
      <div class="tips my-2" :class="{ active: tips1Active }">
        Please enter the correct password
      </div>
      <router-link to="/resetPhone" class="forgetPassword my-2">Esqueci minha senha?</router-link>
      <div class="tips text-center mb-0" :class="{ active: errorActive }">{{ errorMsg }}</div>
      <button
        type="button"
        class="btn loginBtn w-100 my-2"
        :class="{ active: isActive }"
        :disabled="isDisabled"
        style="pointer-events: auto"
        @click="login"
      >
        Login
      </button>
      <div class="link mb-4">
        Novo no 6Z.com?
        <router-link to="/register" class="ms-2">Criar Conta Nova</router-link>
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
.headerBack {
  z-index: 3;
}
.app {
  background-color: var(--black2);
  height: 100vh;
}
.main {
  z-index: 2;
  margin-top: 0rem;
  position: fixed;
  background-color: var(--black1);
  top: 0;
  height: 100%;
}
.loginTitle {
  color: var(--fff);
}
.phoneInput input {
  color: var(--fff);
  text-indent: 3rem;
}
.phoneInput input::placeholder {
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
  color: #e53535;
  font-size: 0.8rem;
  display: none;
}
.tips.active {
  display: block;
}
.forgetPassword {
  display: block;
  text-align: right;
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
  cursor: not-allowed;
}
.loginBtn:active {
  color: var(--fff);
}
.loginBtn.active {
  opacity: 1;
  cursor: pointer;
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
