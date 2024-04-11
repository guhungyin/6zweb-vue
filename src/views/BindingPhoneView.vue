<script>
import CloseBtn from '../components/CloseBtn.vue'
import LoadingPage from '@/components/LoadingPage.vue'
import { ref, watch } from 'vue'
import { useUserStore } from '@/stores/modules/user'
import * as bootstrap from 'bootstrap'
export default {
  data() {
    return {
      pwdFlag: true,
      isLoading: false,
      showCountdown: false, // 控制倒计时的显示与隐藏
      countdown: 60, // 倒计时初始值
      timer: 0
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
    sendSMS() {
      //https://api.wins888.club/platform/user/sendSms/+5591984568589?operatorType=bindPhone
      if (!this.mobile || this.mobile.toString().length !== 11) {
        return
      }

      if (this.timer) {
        console.log('---- 定时器为 true ', this.timer)
      } else {
        console.log('---- 定时器为 false ', this.timer)
      }

      this.countdown = 60
      this.sendSMSErrorActive = false
      this.sendSMSErrorMsg = ''
      this.userStore
        .sendSMS('+55' + this.mobile.toString() + '?operatorType=bindPhone')
        .then((res) => {
          if (res.code !== 0) {
            console.log('验证发送错误: ', res)
            this.sendSMSErrorActive = true
            this.sendSMSErrorMsg = res.msg
            return
          }
          console.log('开始倒计时---- ', this.countdown)
          this.startCountdown()
        })
        .catch((err) => {
          console.log('验证码发送错误: ', err.message)
        })
    },
    startCountdown() {
      this.timer && clearInterval(this.timer)
      document.querySelector('.obtivermos').classList.add('hide')
      this.showCountdown = true // 显示倒计时
      this.countdownTimer() // 启动倒计时函数
    },
    countdownTimer() {
      // 使用箭头函数确保在 setInterval 中使用正确的 this
      this.timer = setInterval(() => {
        if (this.countdown > 1) {
          this.countdown-- // 减少倒计时时间
        } else {
          this.showCountdown = false // 隐藏倒计时
          clearInterval(this.timer) // 倒计时结束后清除计时器
          document.querySelector('.obtivermos').classList.remove('hide')
        }
      }, 1000) // 每秒执行一次倒计时
    },
    bindingPhone() {
      console.log('----> binding phone')

      this.isLoading = true

      this.userStore
        .bindingPhone({
          phoneNumber: this.mobile,
          verifyCode: this.verifyCode,
          nationalCode: '+55'
        })
        .then(() => {
          this.isLoading = false
          var myModal = new bootstrap.Modal(document.getElementById('alertsModal'))
          document.getElementById('errorTips').innerHTML = 'Binding phone succeeded'
          myModal.show()
          let thant = this

          this.showCountdown = false // 隐藏倒计时
          this.timer && clearInterval(this.timer) // 倒计时结束后清除计时器
          document.querySelector('.obtivermos').classList.remove('hide')
          this.userStore.mobile = this.mobile

          setTimeout(async function () {
            myModal.hide()
            thant.$router.push({
              name: 'withdraw'
            })
          }, 2000)
        })
        .catch((err) => {
          console.log('修改密码错误: ', err.message)
          this.isLoading = false
        })
    }
  },
  setup() {
    const mobile = ref()
    const verifyCode = ref('')
    const sendSMSErrorActive = ref(false)
    const sendSMSErrorMsg = ref('')
    const isActive = ref(false)
    const isDisabled = ref(true)
    const userStore = useUserStore()

    watch([mobile, verifyCode], () => {
      if (mobile.value.toString().length === 11 && verifyCode.value.length === 6) {
        isActive.value = true
        isDisabled.value = false
      } else {
        isActive.value = false
        isDisabled.value = true
      }
    })

    return {
      mobile,
      verifyCode,
      isActive,
      isDisabled,
      userStore,
      sendSMSErrorMsg,
      sendSMSErrorActive
    }
  }
}
</script>
<template>
  <div class="routerView">
    <header class="headerBack d-flex justify-content-between align-items-center px-2">
      <h2 class="title">Reset Account</h2>
      <CloseBtn></CloseBtn>
    </header>
    <LoadingPage :active="isLoading" :is-full-page="false"></LoadingPage>
    <div class="main">
      <div class="container-fluid">
        <div class="bindingPhoneTitle fw-bold mt-4 mb-3">Encontre sua conta</div>
        <div class="text mb-4">Insira seu número de celular para procurar a sua conta.</div>
        <!-- 電話 -->
        <div class="phoneInput position-relative mt-3">
          <input
            class="form-control py-2"
            type="number"
            placeholder="Número de Celular"
            v-model.number="this.mobile"
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
            v-model.trim="this.verifyCode"
          />
          <button class="btn" type="button" @click="sendSMS">
            <span class="obtivermos">Obtivermos</span>
            <span v-if="showCountdown" class="countdownNum">{{ countdown }}s</span>
          </button>
        </div>
        <div class="tips my-2" :class="{ active: this.sendSMSErrorActive }">
          {{ this.sendSMSErrorMsg }}
        </div>
        <button
          type="submit"
          class="btn continueBtn w-100 mt-4"
          :class="{ active: this.isActive }"
          :disabled="this.isDisabled"
          @click="bindingPhone"
        >
          Continuar
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  padding-top: 4rem;
}
.bindingPhoneTitle {
  color: var(--primary);
  text-align: center;
  font-size: 1.3rem;
}
.text {
  color: var(--fff);
  text-align: center;
  font-size: 0.9rem;
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
.verificationCode .btn {
  position: absolute;
  font-size: 0.9rem;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  color: var(--primary);
}
.verificationCode .btn:active {
  border: none;
}
.verificationCode .countdownNum {
  position: absolute;
  font-size: 0.9rem;
  right: 1rem;
  top: 50%;
  transform: translate(0, -50%);
  color: var(--primary);
}
.verificationCode .obtivermos.hide {
  display: none;
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
.continueBtn:active {
  color: var(--fff);
}
.continueBtn.active {
  opacity: 1;
}
</style>
