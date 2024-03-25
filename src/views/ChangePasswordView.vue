<script>
import CloseBtn from '../components/CloseBtn.vue'
import { Encrypt } from '@/utils/crypto'
import { ref, watch } from 'vue'
import LoadingPage from '@/components/LoadingPage.vue'
import { useUserStore } from '@/stores/modules/user'
import * as bootstrap from 'bootstrap'
export default {
  data() {
    return {
      pwdFlag: true,
      newPwdFlag: true,
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
      this.btnClick = true
      console.log('old pwd ', this.resetOldPwd, 'new pwd', this.resetNewPwd)

      if (this.resetOldPwd.length <= 4 || this.resetNewPwd.length <= 4) {
        return
      }

      this.isLoading = true

      this.userStore
        .resetPassword(Encrypt(this.resetOldPwd), Encrypt(this.resetNewPwd))
        .then(() => {
          this.isLoading = false
          var myModal = new bootstrap.Modal(document.getElementById('alertsModal'))
          document.getElementById('errorTips').innerHTML = 'Password change succeeded'
          myModal.show()
          let thant = this

          setTimeout(async function () {
            myModal.hide()
            thant.$router.push({
              name: 'home'
            })
          }, 2000)
        })
        .catch((err) => {
          console.log('修改密码错误: ', err.message)
          this.isLoading = false
        })
    },
    showOldPwd() {
      this.pwdFlag = !this.pwdFlag
    },
    showNewPwd() {
      this.newPwdFlag = !this.newPwdFlag
    }
  },
  setup() {
    const resetOldPwd = ref('')
    const resetNewPwd = ref('')
    const isActive = ref(false)
    const btnClick = ref(false)
    const tipsActive1 = ref(false)
    const tipsActive2 = ref(false)
    const userStore = useUserStore()

    watch([resetOldPwd, resetNewPwd], () => {
      console.log('--> oldPwd', resetOldPwd.value, 'newPwd ', resetNewPwd.value)
      if (resetOldPwd.value.length > 4 && resetNewPwd.value.length > 4) {
        isActive.value = true

        if (btnClick.value) {
          tipsActive1.value = false
          tipsActive2.value = false
        }
      } else {
        isActive.value = false

        if (btnClick.value) {
          if (resetOldPwd.value.length <= 4) {
            tipsActive1.value = true
          }

          if (resetNewPwd.value.length <= 4) {
            tipsActive2.value = true
          }
        }
      }
    })

    return {
      resetOldPwd,
      resetNewPwd,
      isActive,
      btnClick,
      tipsActive1,
      tipsActive2,
      userStore
    }
  }
}
</script>
<template>
  <div class="routerView">
    <LoadingPage :active="isLoading" :is-full-page="false"></LoadingPage>
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
            v-model.trim="this.resetOldPwd"
          />
          <div :class="this.pwdFlag ? 'textIcon' : 'pwdIcon'" @click="showOldPwd"></div>
          <!-- +active顯示 -->
          <div class="tips mt-2" :class="{ active: this.tipsActive1 }">
            Please enter the correct password
          </div>
        </div>
        <div class="passwordInput position-relative mb-5">
          <input
            class="form-control py-2"
            placeholder="Atual senha"
            :type="this.newPwdFlag ? 'password' : 'text'"
            v-model.trim="this.resetNewPwd"
          />
          <div :class="this.newPwdFlag ? 'textIcon' : 'pwdIcon'" @click="showNewPwd"></div>
          <!-- +active顯示 -->
          <div class="tips mt-2" :class="{ active: this.tipsActive2 }">
            Please enter the correct password
          </div>
        </div>
        <button
          type="submit"
          class="btn loginBtn w-100 mb-4"
          :class="{ active: this.isActive }"
          @click="changePwd"
        >
          Mudar
        </button>
        <router-link to="/resetPhone" class="forgetThePassword">Esqueci minha senha?</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.changePasswordWindow {
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
.loginBtn:active {
  color: var(--fff);
}
.loginBtn.active {
  opacity: 1;
  cursor: pointer;
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
