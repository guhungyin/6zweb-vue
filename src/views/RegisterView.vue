<script>
import CloseBtn from '../components/CloseBtn.vue'
import { ref, watch } from 'vue'
import { useUserStore } from '@/stores/modules/user'
import { EncryptReg } from '@/utils/crypto'
import LoadingPage from '@/components/LoadingPage.vue'
import * as bootstrap from 'bootstrap'
export default {
  data() {
    return {
      pwdFlag: true,
      isLoading: false
    }
  },
  components: {
    CloseBtn,
    LoadingPage
  },
  methods: {
    // 切換是否顯示密碼
    changePwd() {
      this.pwdFlag = !this.pwdFlag
    },
    register() {
      console.log('mobile > ', this.mobile, 'password > ', this.password)

      if (this.password !== this.confirmPassword) {
        this.confirmPasswordErrorActive = true
        return
      }

      this.isLoading = true

      let channel = this.userStore.channel

      this.userStore
        .register({
          password: EncryptReg(this.password),
          account: this.account,
          channel: channel,
          version: '1',
          nickName: this.nickName,
          source: this.userStore.source
        })
        .then((res) => {
          this.isLoading = false
          console.log('注册用户成功: ', res)
          var myModal = new bootstrap.Modal(document.getElementById('alertsModal'))
          document.getElementById('errorTips').innerHTML = 'Register succeeded'
          myModal.show()
          let thant = this

          setTimeout(async function () {
            myModal.hide()
            thant.$router.push({
              name: 'login'
            })
          }, 2000)
        })
        .catch((err) => {
          this.isLoading = false
          // this.accountErrorActive = true
          // this.accountErrorMsg = err.message
          console.log('注册用户错误: ', err.message)
        })
    }
  },
  setup() {
    const account = ref('')
    const accountErrorMsg = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const nickName = ref('')
    const isActive = ref(false)
    const accountErrorActive = ref(false)
    const confirmPasswordErrorActive = ref(false)
    const isDisabled = ref(true)
    const isChecked = ref(true)
    const userStore = useUserStore()

    watch([account, password, confirmPassword], () => {
      if (
        account.value.toString().length > 4 &&
        password.value.length > 4 &&
        confirmPassword.value.length > 4
      ) {
        console.log('password --: ', password.value, 'confirmpassword : ', confirmPassword.value)

        if (
          password.value !== confirmPassword.value &&
          confirmPassword.value.length >= password.value.length
        ) {
          confirmPasswordErrorActive.value = true
          isActive.value = false
          isDisabled.value = true
        } else {
          confirmPasswordErrorActive.value = false
          isActive.value = true
          isDisabled.value = false
        }
      } else {
        isActive.value = false
        isDisabled.value = true
      }
    })

    return {
      account,
      password,
      isActive,
      isDisabled,
      isChecked,
      userStore,
      accountErrorActive,
      accountErrorMsg,
      confirmPassword,
      nickName,
      confirmPasswordErrorActive
    }
  }
}
</script>
<template>
  <div class="routerView">
    <LoadingPage :active="isLoading" :is-full-page="false"></LoadingPage>
    <header class="headerBack d-flex justify-content-between align-items-center px-2">
      <h2 class="title">Bem Vindo ao</h2>
      <CloseBtn></CloseBtn>
    </header>
    <div class="main">
      <img class="headerBg w-100" src="../assets/images/login/bg.jpg" alt="" />
      <div class="container-fluid">
        <div class="loginTitle my-2 fw-bold">Cadastre-se</div>
        <!-- 使用者名稱 -->
        <input
          class="form-control py-2"
          placeholder="Nome de Usuário"
          v-model.trim="this.account"
        />
        <div class="tips my-2" :class="{ active: this.accountErrorActive }">
          {{ this.accountErrorMsg }}
        </div>
        <!-- 電話 -->
        <!-- <div class="phoneInput position-relative mt-3">
          <input
            class="form-control py-2"
            type="number"
            placeholder="Por favor, digite seu nome"
            v-model.trim="this.mobile"
          />
          <span>+55</span>
        </div> -->

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
            v-model.trim="this.confirmPassword"
          />
          <div :class="this.pwdFlag ? 'textIcon' : 'pwdIcon'" @click="changePwd"></div>
        </div>
        <div class="tips my-2" :class="{ active: this.confirmPasswordErrorActive }">
          Confirmar senha incorreta
        </div>
        <!-- 名字 -->
        <input
          class="form-control mt-3"
          placeholder="Por favor, digite seu nome"
          v-model.trim="this.nickName"
        />
        <div class="tips my-2">Por favor, digite seu nome</div>
        <div class="form-check agreeText my-2">
          <input
            class="form-check-input"
            type="checkbox"
            id="agreeCheck"
            v-model="isChecked"
            disabled
          />
          <label class="form-check-label" for="agreeCheck">
            Eu concordo com os
            <router-link to="/terms" class="agreeLink">acordo do usuário</router-link>
            e confirmo que tenho pelo menos 18 anos
          </label>
        </div>
        <button
          type="button"
          class="btn establishBtn w-100 mb-3"
          :class="{ active: this.isActive }"
          :disabled="this.isDisabled"
          @click="register"
        >
          Criar conta
        </button>
        <div class="link mb-3">
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
  max-width: 34rem;
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
input {
  color: var(--fff);
}
input::placeholder {
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
  font-size: 0.9rem;
  display: none;
}
.tips.active {
  display: block;
}
.agreeText {
  font-size: 1rem;
  color: var(--gray1);
}
.agreeText .form-check-input {
  background-color: #2d303580;
  border: 1px solid #919191;
}
.agreeText .form-check-input:focus {
  box-shadow: none;
}
.agreeText .agreeLink {
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
.establishBtn:active {
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
  font-size: 1rem;
}
.link a {
  color: var(--primary);
}
.or {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #656e78;
  font-size: 1rem;
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
