<script>
import LuckyTurntable from '@/components/LuckyTurntable.vue'
import CountUp from 'vue-countup-v3'
import { useActivityStore } from '@/stores/modules/activity'
import { useUserStore } from '@/stores/modules/user'
import * as bootstrap from 'bootstrap'
export default {
  data() {
    return {
      luckyBonus: '0.00'
    }
  },
  methods: {
    closeBtn() {
      this.$router.go(-1)
    },
    countFinished() {
      this.$refs.luckyStar.countFinished()
    },
    withdrawAlertOpen(luckyBonus) {
      this.luckyBonus = luckyBonus

      var myModal = new bootstrap.Modal(document.getElementById('bigBonus'))
      myModal.show()
    },
    copyLink() {
      const textToCopy = this.meReferral //event.target.getAttribute('data-clipboard-text')
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          console.log('文字已複製到剪貼簿:', textToCopy)
          this.showModal = true
          setTimeout(() => {
            this.showModal = false
          }, 3000)
        })
        .catch((error) => {
          console.error('Failed to copy text:', error)
        })
    },
  },
  components: {
    LuckyTurntable,
    CountUp
  },
  setup() {
    const activityStore = useActivityStore()
    const userStore = useUserStore()

    return {
      activityStore,
      userStore
    }
  }
}
</script>
<template>
  <div class="routerView">
    <div class="headerBack d-flex justify-content-between align-items-center px-2">
      <div class="left d-flex align-items-center">
        <div class="closeBtn" @click="closeBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#FFF"
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </div>
        <h2 class="title mx-2">Receba R$ 100 de graça</h2>
        <div class="ruleBtn" data-bs-toggle="modal" data-bs-target="#ruleModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#FFF"
            class="bi bi-question-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path
              d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"
            />
          </svg>
        </div>
      </div>
      <div class="right d-flex align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="#FFF"
          class="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
        <span class="mx-1">{{ this.userStore.money }}</span>
        <span>BRL</span>
      </div>
    </div>
    <div class="container-fluid cashWheelWindows">
      <div class="cashMain mb-4 px-4 py-2">
        <div class="haveCash d-flex justify-content-between align-items-center">
          <img src="../assets/images/icon/cash_2.png" width="55" alt="" />
          <div class="totalCash">
            <span class="me-2">R$</span>
            <count-up
              class="cash"
              :start-val="this.activityStore.preTotalBonus"
              :end-val="`${this.activityStore.totalBonus}`"
              :decimalPlaces="2"
              @finished="countFinished"
            ></count-up>
          </div>
          <div class="withdraw" data-bs-toggle="modal" data-bs-target="#withdrawAlert">
            <img src="../assets/images/icon/pix_2.png" width="16" class="me-1" alt="" />
            SACAR
          </div>
        </div>
        <div class="progressBox">
          <span>{{ activityStore.totalBonus }}%</span>
          <div class="progress mb-2">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              :style="'width: ' + activityStore.totalBonus + '%'"
            ></div>
          </div>
        </div>
        <div class="needCash">
          Ainda e necessário
          <span class="needCashNum mx-2">
            <count-up
              :start-val="this.activityStore.preRemainingBonus"
              :end-val="`${activityStore.remainingBonus}`"
              :decimalPlaces="2"
            ></count-up>
          </span>
          para sacar
        </div>
      </div>
      <!-- 你已超过99%用户，马上就可以提现啦 +active -->
      <span class="nineNinePercentage mb-3"
        >Você ultrapassou 99% dos usuários e pode sacar dinheiro imediatamente</span
      >
      <div class="drawMain mb-5">
        <!-- 背景旋轉光暈 -->
        <div class="spinLightBg"></div>
        <!-- 轉盤內容 -->
        <LuckyTurntable ref="luckyStar" @withdraw-alert="withdrawAlertOpen"></LuckyTurntable>
        <!-- 轉盤背景 -->
        <div class="bg"></div>
        <!-- 燈光效果 -->
        <div class="light"></div>
        <!-- 指針 -->
        <img src="../assets/images/rou/pointer.png" alt="" class="pointer" />
        <!-- 增加次數 +active -->
        <div class="aginPlay">+1</div>
      </div>
      <div class="drawContent mb-3">
        <div class="text text-center mb-2">
          <span>Expira em</span>
          20:10:52
        </div>
        <div class="cashButton d-flex justify-content-around align-items-center py-2">
          <span> Convide amigos para ajudar com saques </span>
          <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#shareToFriend" aria-controls="shareToFriend">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#FFF"
              class="bi bi-share-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="report mb-3">
        <div class="vanTabs mb-3">
          <div class="reportTitle py-3 mb-2">Relatório</div>
          <div class="vanTabsContent px-2">
            <div class="winList">
              <div class="item">
                <div class="name">5591******372</div>
                <div class="tipText">Acabou de saca</div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5591******589</div>
                <div class="tipText">Acabou de saca</div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5557******786</div>
                <div class="tipText">Acabou de saca</div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5569******675</div>
                <div class="tipText">Acabou de saca</div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5578******459</div>
                <div class="tipText">Acabou de saca</div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5568******699</div>
                <div class="tipText">Acabou de saca</div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5592******712</div>
                <div class="tipText">Acabou de saca</div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5591******217</div>
                <div class="tipText">Acabou de saca</div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5593******277</div>
                <div class="tipText">Acabou de saca</div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5568******286</div>
                <div class="tipText">Acabou de saca</div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5593******189</div>
                <div class="tipText">Acabou de saca</div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5591******778</div>
                <div class="tipText">Acabou de saca</div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5591******566</div>
                <div class="tipText">Acabou de saca</div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5568******545</div>
                <div class="tipText">Acabou de saca</div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5592******387</div>
                <div class="tipText">Acabou de saca</div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rules py-3 px-3">
          <h2 class="mb-3">Regras</h2>
          <ul class="tipsContent p-0">
            <li class="mb-3">
              1.Você pode iniciar um saque quando o valor acumulado atingir 100 BRL.
            </li>
            <li class="mb-3">
              2. Convidar amigos para se registrarem no wins888.vip irá ajudá- lo a sacar dinheiro
              rapidamente.
            </li>
            <li class="mb-3">3. Cada usuário receberá uma única rodada grátis por dia.</li>
            <li class="mb-3">
              4.Cada usuário tem um período de validade de 3 dias para cada atividade e pode
              participar da atividade várias vezes.
            </li>
            <li class="mb-3">
              5. Se você receber um bônus de dinheiro extra, pode jogar jogos de graça e ganhar
              ainda mais dinheiro real.
            </li>
            <li class="mb-3">6.Se voce nao retirar o dinheiro dentro de 3 dias,ele ser perdido.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- ruleModal -->
    <div
      class="modal fade ruleModalLabel"
      id="ruleModal"
      tabindex="-1"
      aria-labelledby="ruleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="false"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h5 class="modal-title" id="ruleModalLabel">Regras</h5>
            <div data-bs-dismiss="modal" aria-label="Close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#FFFFFF"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                ></path>
              </svg>
            </div>
          </div>
          <div class="modal-body">
            <ul class="tipsContent p-0">
              <li class="mb-3">
                1.Você pode iniciar um saque quando o valor acumulado atingir 100 BRL.
              </li>
              <li class="mb-3">
                2. Convidar amigos para se registrarem no wins888.vip irá ajudá- lo a sacar dinheiro
                rapidamente.
              </li>
              <li class="mb-3">3. Cada usuário receberá uma única rodada grátis por dia.</li>
              <li class="mb-3">
                4.Cada usuário tem um período de validade de 3 dias para cada atividade e pode
                participar da atividade várias vezes.
              </li>
              <li class="mb-3">
                5. Se você receber um bônus de dinheiro extra, pode jogar jogos de graça e ganhar
                ainda mais dinheiro real.
              </li>
              <li class="mb-3">
                6.Se voce nao retirar o dinheiro dentro de 3 dias,ele ser perdido.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- withdrawAlertModal -->
    <div
      class="modal fade withdrawAlertModal"
      id="withdrawAlert"
      tabindex="-1"
      aria-labelledby="withdrawAlertLabel"
      aria-hidden="true"
      data-bs-backdrop="false"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h5 class="modal-title" id="withdrawAlertLabel">Em breve poderá sacar</h5>
            <div data-bs-dismiss="modal" aria-label="Close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#FFFFFF"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                ></path>
              </svg>
            </div>
          </div>
          <div class="modal-body">
            <div class="main py-3 px-2">
              <div class="cash">
                <div class="text">Total de dinheiro a ser pago em breve</div>
                <div class="cashContent">
                  <span>{{ this.activityStore.totalBonus }}</span>
                  <span class="currency"> BRL</span>
                </div>
              </div>
              <ul class="withdrawInfo mb-3">
                <li class="mb-2">
                  <span>Conta de saque</span>
                  <span style="color: rgb(60, 197, 23)">100,000</span>
                </li>
                <li class="mb-2">
                  <span>Formas de Pagamentos</span>
                  <span>Pix</span>
                </li>
              </ul>
              <ul class="schedule py-3">
                <li class="mb-3">O pedido de pagamento foi submetido</li>
                <li class="mb-3">Ainda e necessário 2.79 para sacar</li>
                <li class="active">100 R$ serão pagos na sua conta PIX</li>
              </ul>
              <button class="btn w-100" type="button" data-bs-toggle="offcanvas" data-bs-target="#shareToFriend" aria-controls="shareToFriend">Convide amigos para ajudar com</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 轉到大獎 bigBonusModal -->
    <div
      class="modal fade bigBonusModal"
      id="bigBonus"
      tabindex="-1"
      aria-labelledby="bigBonusLabel"
      aria-hidden="true"
      data-bs-backdrop="false"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h5 class="modal-title" id="bigBonusLabel">Em breve poderá sacar</h5>
            <div data-bs-dismiss="modal" aria-label="Close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#FFFFFF"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                ></path>
              </svg>
            </div>
          </div>
          <div class="modal-body">
            <div class="main py-3 px-2">
              <div class="cash mb-3">
                <div class="text">
                  Que sorte, parabéns por ganhar o prêmio em dinheiro O dinheiro será enviado
                  automaticamente para a carteira da sua conta
                </div>
                <div class="cashContent">
                  <span>{{ this.luckyBonus }}</span>
                  <span class="currency"> BRL</span>
                </div>
              </div>
              <button type="button" class="btn w-100" data-bs-dismiss="modal">
                Continue recebendo mais recompensas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 分享給好友 -->
    <div class="offcanvas offcanvas-bottom shareToFriend" tabindex="-1" id="shareToFriend" aria-labelledby="shareToFriendLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">  1. Convide amigos para ajudar com saques </h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="shareLink">
          <li class="shareLinkItem">
            <router-link to="/">
              <img src="@/assets/images/icon/fb.svg" alt="">
            </router-link>
            <span class="mt-2">Facebook</span>
          </li>
          <li class="shareLinkItem">
            <router-link to="/">
              <img src="@/assets/images/icon/whatsapp.svg" alt="">
            </router-link>
            <span class="mt-2">WhatsApp</span>
          </li>
          <li class="shareLinkItem">
            <router-link to="/">
              <img src="@/assets/images/icon/Telegram_logo.svg" alt="">
            </router-link>
            <span class="mt-2">Telegram</span>
          </li>
          <li class="shareLinkItem">
            <router-link to="/">
              <img src="@/assets/images/icon/x.svg" alt="">
            </router-link>
            <span class="mt-2">Twitter</span>
          </li>
          <li class="shareLinkItem">
            <router-link to="/">
              <img src="@/assets/images/icon/mail.svg" alt="">
            </router-link>
            <span class="mt-2">Email</span>
          </li>
        </ul>
        <div class="copyUrl p-2">
          <span class="url">{{ this.meReferral }}</span>
          <span class="copyBtn" @click="copyLink" data-clipboard-text="123456">Cópia</span>
        </div>
        <h5 class="mt-3">2. Enviar convite para jogador aleatório ajudar </h5>
        <div class="code p-3">
          <ul class="p-0">
            <li> 5549984173125 </li>
            <li> 5597999026423 </li>
            <li> 5584996680112 </li>
            <li> 5594992309447 </li>
            <li> 5511975673173 </li>
            <li> 5527998778519 </li>
            <li> 5567996527154 </li>
            <li> 5598970040693 </li>
            <li> 5521980363864 </li>
            <li> 5561982314619 </li>
            <li> 5592992652865 </li>
            <li> 5583991691405 </li>
            <li> 5566996515611 </li>
            <li> 5513997446708 </li>
            <li> 5521965328117 </li>
            <li> 5551996495538 </li>
            <li> 5554996024143 </li>
            <li> 5586998472815 </li>
            <li> 5511959002062 </li>
            <li> 5511953868084 </li>
          </ul>
          <div class="d-flex justify-content-between">
            <div class="shareBtn whatsAppB p-2">
              <div class="text">
                Enviar Mensagem
                <br>
                no <span class="fw-bold">WhatsAPP</span>
              </div>
              <a href="">
                <img src="@/assets/images/icon/whatsappBtn.svg" alt="">
              </a>
            </div>
            <div class="shareBtn sms p-2">
              <a href="">
                <img src="@/assets/images/icon/sms.png" alt="">
              </a>
              <div class="">
                Enviar Mensagem
                <br>
                <span class="fw-bold">SMS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="alert m-0" role="alert" :class="{ active: showModal }">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="#fff"
      class="bi bi-check-lg mb-3"
      viewBox="0 0 16 16"
    >
      <path
        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
      />
    </svg>
    Copy succeeded
  </div>
  </div>
</template>
<style scoped>
.cashWheelWindows {
  margin-top: 4rem;
}
.headerBack {
  z-index: 1;
  color: var(--fff);
}
.cashMain {
  background-color: #232327;
  border-radius: 0.8rem;
}
.cashMain .haveCash .totalCash {
  display: flex;
  align-items: center;
  color: #6ddf39;
  font-size: 2rem;
}
.cashMain .haveCash .withdraw {
  background: #efb423 linear-gradient(90deg, #49a319, #2b8b2f);
  color: var(--fff);
  border-radius: 5rem;
  font-size: 0.9rem;
  padding: 0.2rem 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cashMain .progressBox {
  position: relative;
  padding-top: 1.6rem;
}
.cashMain .progressBox span {
  position: absolute;
  color: var(--fff);
  font-size: 1rem;
  top: 0;
  right: 0;
}
.cashMain .progressBox .progress {
  height: 0.5rem;
}
.cashMain .progressBox .progress .progress-bar {
  background-color: #6ddf39;
}
.nineNinePercentage {
  display: none;
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
}
.nineNinePercentage.active {
  display: block;
}
.cashMain .needCash {
  color: var(--fff);
  text-align: center;
  font-size: 1rem;
  display: flex;
  justify-content: center;
}
.cashMain .needCash .needCashNum {
  color: #6ddf39;
  font-weight: bold;
  font-size: 1.1rem;
}
.aginPlay {
  display: none;
  position: absolute;
  left: -5%;
  top: 24%;
  color: #6ddf39;
  font-size: 2.5rem;
  font-weight: bold;
  animation: 0.1s zoomIn;
}
@keyframes zoomIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
.aginPlay.active {
  display: block;
}
.drawMain {
  position: relative;
  max-width: 400px;
  height: 530px;
  margin: 0 auto;
}
.drawMain .bg {
  pointer-events: none;
  position: absolute;
  transform: translate(-50%, 0);
  top: -15px;
  left: 50%;
  width: 400px;
  height: 539px;
  background: url('../assets/images/rou/d.png') no-repeat 0 0 / 100% 100%;
}
.drawMain .spinLightBg {
  pointer-events: none;
  background: url('../assets/images/rou/spinBg_2.png') no-repeat center center / 100% 100%;
  width: 500px;
  height: 500px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  animation: spinLightBg 20s linear infinite;
}
@keyframes spinLightBg {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.drawMain .luckyWheelContent {
  position: absolute;
  left: 50%;
  top: 103px;
  transform: translate(-50%, 0);
}
.drawMain .light {
  pointer-events: none;
  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;
  top: 80px;
  height: 385px;
  width: 382px;
  animation: lightAnimation infinite 0.4s;
}
@keyframes lightAnimation {
  from {
    background: url('../assets/images/rou/light1.png') no-repeat center center / 100% 100%;
  }
  to {
    background: url('../assets/images/rou/light2.png') no-repeat center center / 100% 100%;
  }
}
.drawMain .pointer {
  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;
  top: 78px;
  width: 5rem;
  height: 3rem;
}
.drawContent {
  color: var(--fff);
}
.drawContent .text span {
  color: #8795b1;
}
.drawContent .cashButton {
  background-color: #202124;
}
.report .reportTitle {
  background-color: #202124;
  color: var(--fff);
  text-align: center;
}
.report .vanTabsContent {
  overflow: hidden;
  height: 15rem;
  position: relative;
}
.report .vanTabsContent .winList {
  animation: winList 8s infinite linear;
  width: 96%;
  position: absolute;
  top: 0;
}
@keyframes winList {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20rem);
  }
}
.report .vanTabsContent .winList .item {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.report .vanTabsContent .winList .item .name,
.report .vanTabsContent .winList .item .tipText {
  font-size: 0.85rem;
  color: #8795b1;
}
.report .vanTabsContent .winList .item .value {
  display: flex;
  align-items: center;
  justify-content: center;
}
.report .vanTabsContent .winList .item .value .addCash {
  color: #6ddf39;
  font-size: 0.85rem;
  margin-right: 0.5rem;
}
.report .vanTabsContent .winList .item .value .unit {
  background-color: #6ddf39;
  border-radius: 50%;
  color: var(--fff);
  font-size: 1rem;
  font-weight: bold;
  width: 1.3rem;
  height: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.report .rules {
  background-color: #202124;
}
.report .rules h2 {
  color: #8795b1;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
}
.report .rules .tipsContent {
  color: #7d8397;
  font-size: 1rem;
}

.ruleModalLabel .modal-content {
  background-color: #201f1f;
  color: var(--fff);
}
.ruleModalLabel .modal-content .modal-title {
  color: #61cf3e;
  font-weight: bold;
}

.withdrawAlertModal .modal-content {
  background-color: #202124;
}
.withdrawAlertModal .modal-content .modal-title {
  color: var(--fff);
}
.withdrawAlertModal .modal-content .main {
  background-color: #27292d;
}
.withdrawAlertModal .modal-content .main .cash .text {
  color: #6ddf39;
  font-size: 0.9rem;
  text-align: center;
}
.withdrawAlertModal .modal-content .main .cashContent {
  color: #fd2626;
  font-size: 2.6rem;
  text-align: center;
  font-weight: bold;
}
.withdrawAlertModal .modal-content .main .withdrawInfo {
  padding: 0;
}
.withdrawAlertModal .modal-content .main .withdrawInfo li {
  display: flex;
  justify-content: space-between;
  color: var(--fff);
  font-size: 1rem;
}
.withdrawAlertModal .modal-content .main .schedule {
  background-color: #232327;
  color: #6ddf39;
  font-size: 1rem;
  position: relative;
}
.withdrawAlertModal .modal-content .main .schedule::before {
  content: '';
  position: absolute;
  height: 5rem;
  border-left: 1px dotted #3cc517;
  transform: translate(0, -50%);
  top: 50%;
  left: 1rem;
}
.withdrawAlertModal .modal-content .main .schedule li {
  position: relative;
}
.withdrawAlertModal .modal-content .main .schedule li::before {
  content: '\2713';
  font-size: 0.6rem;
  color: var(--fff);
  width: 0.9rem;
  height: 0.9rem;
  position: absolute;
  left: -1.5rem;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6ddf39;
  border-radius: 50%;
}
.withdrawAlertModal .modal-content .main .schedule li.active {
  color: #4b4f5d;
}
.withdrawAlertModal .modal-content .main .schedule li.active::before {
  content: '';
  width: 0.55rem;
  height: 0.55rem;
  left: -1.25rem;
  top: 52%;
  background-color: #4b4f5d;
}
.withdrawAlertModal .modal-content button {
  background-color: #6ddf39;
  color: var(--fff);
}

.bigBonusModal .modal-content {
  margin: 0 auto;
  width: 84%;
  background-color: #202124;
}
.bigBonusModal .modal-content .modal-title {
  color: var(--fff);
}
.bigBonusModal .modal-content .main {
  background-color: #27292d;
}
.bigBonusModal .modal-content .main .cash .text {
  color: #6ddf39;
  font-size: 0.9rem;
  text-align: center;
}
.bigBonusModal .modal-content .main .cashContent {
  color: #fd2626;
  font-size: 2.6rem;
  text-align: center;
  font-weight: bold;
}
.bigBonusModal .modal-content button {
  background-color: #6ddf39;
  color: var(--fff);
}
.shareToFriend{
  z-index: 2000;
  height: auto;
}
.shareToFriend h5{
  font-size: 1rem;
  color: #898989;
}
.shareToFriend .shareLink{
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
}
.shareToFriend .shareLink .shareLinkItem{
  text-align: center;
  width: 20%;
  display: flex;
  flex-direction: column;
}
.shareToFriend .shareLink img{
  width: 3rem;
}
.shareToFriend .shareLink span{
  color: #727272;
  font-size: .8rem;
}
.shareToFriend .copyUrl {
  background-color: #f9f9f9;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.shareToFriend .copyUrl .url {
  color: #808080;
  font-size: 0.9rem;
}
.shareToFriend .copyUrl .copyBtn {
  color: #40a1de;
  font-size: 0.9rem;
}
.shareToFriend .code{
  background-color: #000;
  color: #8f8f8f;
  font-weight: 700;
}
.shareToFriend .code ul{
  display: flex;
  flex-wrap: wrap;
}
.shareToFriend .code ul li{
  padding: 0 .4rem;
  font-size: .8rem;
}
.shareToFriend .code .shareBtn{
  background-color: #fff;
  text-align: left;
  width: 48%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #000;
  font-size: .8rem;
}
.shareToFriend .code .shareBtn img{
  width: 2rem;
}
.alert {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);
  border: 0;
  color: #fff;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 8rem;
  height: 8rem;
  font-size: 1rem;
  white-space: nowrap;
}
.alert.active {
  display: flex;
}
</style>
