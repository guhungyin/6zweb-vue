<script>
import CommitteeModal from '@/components/affiliate/CommitteeModal.vue'
import { useCommonStore } from '@/stores/modules/common'
import { useUserStore } from '@/stores/modules/user'
export default {
  data() {
    return {
      telegramReferral: '',
      facebookReferral: '',
      whatsappReferral: '',
      meReferral: ''
    }
  },
  components: {
    CommitteeModal
  },
  mounted() {
    this.commonStore.referralList.forEach((v) => {
      if (v.channel === 'Telegram') {
        this.telegramReferral = v.link.replace(/userId/g, this.userStore.id.toString())
      } else if (v.channel === 'Facebook') {
        this.facebookReferral = v.link.replace(/userId/g, this.userStore.id.toString())
      } else if (v.channel === 'whatsapp') {
        this.whatsappReferral = v.link.replace(/userId/g, this.userStore.id.toString())
      } else if (v.channel === 'me') {
        this.meReferral = v.link.replace(/userId/g, this.userStore.id.toString())
      }
    })
  },
  created() {},
  methods: {},
  setup() {
    const commonStore = useCommonStore()
    const userStore = useUserStore()
    return {
      commonStore,
      userStore
    }
  }
}
</script>
<template>
  <div class="contentBox summaryContent">
    <div class="card today">
      <div class="card-header fw-bold">
        Hoje
        <button type="button" class="modalBtn" data-bs-toggle="modal" data-bs-target="#todayModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="#FFF"
            class="bi bi-question-lg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14"
            />
          </svg>
        </button>
      </div>
      <div class="card-body">
        <ul class="today d-flex p-0">
          <li class="d-flex flex-column align-items-center">
            <span class="num">0</span>
            <span class="mainTitle">Inscrições</span>
          </li>
          <li class="d-flex flex-column align-items-center">
            <span class="num">0</span>
            <span class="mainTitle">Novos jogadores</span>
          </li>
          <li class="d-flex flex-column align-items-center">
            <span class="num">
              <span>R$</span>
              0
            </span>
            <span class="mainTitle">Aposta válidas em equipe</span>
          </li>
          <li class="d-flex flex-column align-items-center">
            <span class="num">
              <span>R$</span>
              0
            </span>
            <span class="mainTitle">Comissão</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="card total">
      <div class="card-header fw-bold">
        Total
        <button type="button" class="modalBtn" data-bs-toggle="modal" data-bs-target="#totalModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="#FFF"
            class="bi bi-question-lg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14"
            />
          </svg>
        </button>
      </div>
      <div class="card-body">
        <ul class="today d-flex p-0">
          <li class="d-flex flex-column align-items-center">
            <span class="num">0</span>
            <span class="mainTitle"> Inscrições </span>
          </li>
          <li class="d-flex flex-column align-items-center">
            <span class="num">0</span>
            <span class="mainTitle"> Jogadores totais </span>
          </li>
          <li class="d-flex flex-column align-items-center">
            <span class="num">
              <span>R$</span>
              0
            </span>
            <span class="mainTitle"> Aposta válidas total </span>
          </li>
          <li class="d-flex flex-column align-items-center">
            <span class="num">
              <span>R$</span>
              0
            </span>
            <span class="mainTitle"> Comissão </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="card committee">
      <div class="card-header fw-bold">
        Comissão
        <button
          type="button"
          class="modalBtn"
          data-bs-toggle="modal"
          data-bs-target="#committeeModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="#FFF"
            class="bi bi-question-lg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14"
            />
          </svg>
        </button>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-4 d-flex align-items-center justify-content-center">
            <div class="vip p-2">
              <div class="leve mb-2">
                <span>1</span>
              </div>
              <div class="acting">
                Nível de Agente
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="#a6a6a6"
                  class="bi bi-exclamation-circle-fill"
                  viewBox="0 0 16 16"
                  data-bs-toggle="modal"
                  data-bs-target="#committeeModal"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="col-8">
            <ul class="commission p-0 mb-3 d-flex">
              <li>
                <span class="num">
                  <span>R$</span>
                  <span class="cash">0.00</span>
                </span>
                <span class="mainTitle">Total pago</span>
              </li>
              <li>
                <span class="num">
                  <span>R$</span>
                  <span class="cash">0.00</span>
                </span>
                <span class="mainTitle">Não pago</span>
              </li>
            </ul>
            <div class="wallet">
              <button type="button" class="btn btn-outline-secondary mb-2">
                TRANSFERIR PARA A CARTEIRA
              </button>
              <div class="tip">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="#009d80"
                  class="bi bi-lightbulb"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"
                  />
                </svg>
                Valor mínimo de transferência de 10 BRL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card share">
      <div class="card-header fw-bold">Compartilhe com sua comunidade social</div>
      <div class="card-body">
        <ul class="p-0 mb-3">
          <!-- <li>
            <a href="#" class="mb-2">
              <img src="@/assets/images/icon/shar.svg" alt="" width="46" />
            </a>
            <span>Mais</span>
          </li> -->
          <li>
            <a :href="this.facebookReferral" class="mb-2">
              <img src="@/assets/images/icon/fb.svg" alt="" width="46" />
            </a>
            <span>Facebook</span>
          </li>
          <li>
            <a :href="this.whatsappReferral" class="mb-2">
              <img src="@/assets/images/icon/whatsapp.svg" alt="" width="46" />
            </a>
            <span>WhatsApp</span>
          </li>
          <li>
            <a :href="this.telegramReferral" class="mb-2">
              <img src="@/assets/images/icon/Telegram_logo.svg" alt="" width="46" />
            </a>
            <span>Telegram</span>
          </li>
          <li>
            <a href="#" class="mb-2">
              <img src="@/assets/images/icon/x.svg" alt="" width="46" />
            </a>
            <span>Twitter</span>
          </li>
          <li>
            <a href="#" class="mb-2">
              <img src="@/assets/images/icon/mail.svg" alt="" width="46" />
            </a>
            <span>Email</span>
          </li>
        </ul>
        <div class="shareLink">
          <div class="tip mb-2">Compartilhe este link de indicação com seus amigos</div>
          <div class="copyUrl p-2">
            <span class="url">{{ this.meReferral }}</span>
            <span class="copyBtn">Cópia</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card service">
      <div class="card-header fw-bold">Grupo CHAT entre agentes por telegram oficial do 6Z.COM</div>
      <div class="card-body">
        <div class="d-flex align-items-center mb-2">
          <a href="#" class="me-2">
            <img src="@/assets/images/icon/Telegram_logo.svg" width="55" alt="" />
          </a>
          <div class="text">
            Clique o botão de ícone no lado esquerdo, junte-se ao nosso grupo afiliado do TG oficial
            Vamos oferecer- lo as palavras afiliadas profissionais e as ferramentas afiliadas
            profissionais. E ajudar-lo obter bem os benefícios reais.
          </div>
        </div>
        <div class="text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="#a6a6a6"
            class="bi bi-exclamation-circle-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
            ></path>
          </svg>
          Se você tem um grande público e seguidores. Temos condições especiais para você
          personalizar seu programa de indicações! para mais detalhes, por favorcontate- nos em:
          <a href="#">@wins888</a>
        </div>
      </div>
    </div>
    <div class="card commission m-0">
      <div class="card-header fw-bold">
        Regras de recompensas por comissão
        <button
          type="button"
          class="modalBtn"
          data-bs-toggle="modal"
          data-bs-target="#committeeModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="#FFF"
            class="bi bi-question-lg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14"
            />
          </svg>
        </button>
      </div>
      <div class="card-body">
        <div class="hintTitle mb-3">
          Ganhe dinheiro indicando amigos para a 6z, você ganha sempre que um convidado seu realiza
          uma aposta!
        </div>
        <div class="imgContent mb-3">
          <img src="@/assets/images/icon/money2.png" width="73" alt="" />
          <span>Comissão pode ser</span>
          <input type="range" class="rangeBar ms-auto" />
        </div>
        <div class="relationSchema">
          <div class="mb-2 text-center fw-bold">Desenvolvimento ilimitado de indicados</div>
          <img src="@/assets/images/icon/group.png" alt="" class="w-100 mb-5" />
          <ul class="p-0">
            <li class="mb-2">
              1. Você receberá uma porcentagem de comissão diferente toda vez que um jogador
              indicado por você fizer uma aposta, <span>ganhar ou perder</span>.
            </li>
            <li>2. O sistema calcula a comissão a cada 24 horas.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- todayModal -->
  <div
    class="modal fade todayModal"
    id="todayModal"
    tabindex="-1"
    aria-labelledby="todayModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold" id="todayModalLabel">Definição</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <ul class="p-0 mb-3">
            <li class="mb-2 fw-bold">1. Inscrições - Número de usuários registrados</li>
            <li class="mb-2 fw-bold">
              2. Novos Jogadores - Novos jogadores pagantes entre os usuários registrados de hoje
            </li>
            <li class="mb-2 fw-bold">
              3. Aposta válidas em equiper[num] - Total de valor de apostas válidas provenientes de
              indicações e contribuições de suas equipes. num - Número total de indicações e membros
              de suas equipes que contribuíram com apostas válidas.
            </li>
          </ul>
          <div class="notice">Aviso: Os dados de hoje são atualizados a cada 15 minutos</div>
        </div>
      </div>
    </div>
  </div>
  <!-- totalModal -->
  <div
    class="modal fade totalModal"
    id="totalModal"
    tabindex="-1"
    aria-labelledby="totalModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold" id="todayModalLabel">Definição</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <ul class="p-0 mb-3">
            <li class="mb-2 fw-bold">1. Inscrições - Número de usuários registrados totais</li>
            <li class="mb-2 fw-bold">
              2. Jogadores totais - Número total de indicações e membros de suas equipes que
              contribuíram com apostas válidas
            </li>
            <li class="mb-2 fw-bold">
              3. Aposta válidas total - Total do valor de apostas válidas provenientes de indicações
              e contribuições de suas equipes
            </li>
          </ul>
          <div class="notice">
            Aviso: Os dados estatísticos totais não incluem o dia de hoje, última atualização: 0:00
            de hoje
          </div>
        </div>
      </div>
    </div>
  </div>
  <CommitteeModal></CommitteeModal>
</template>
<style scoped>
.contentBox {
  overflow-y: auto;
  height: calc(100vh - 7.5rem);
}
.contentBox::-webkit-scrollbar {
  display: none;
}
.contentBox .card {
  border: none;
  margin-bottom: 0.8rem;
}
.contentBox .card .card-header {
  background-color: #fff;
  color: #808080;
  display: flex;
  align-items: center;
}
.contentBox .card .modalBtn {
  margin-left: 0.5rem;
  border-radius: 50%;
  background-color: #f9a21a;
  border: none;
  padding: 0;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contentBox .card ul {
  justify-content: space-between;
  margin-bottom: 0;
}
.contentBox .card .num {
  font-size: 1.1rem;
  font-weight: bold;
}
.contentBox .card .mainTitle {
  font-size: 0.7rem;
  color: #808080;
}
.contentBox .card.committee .vip {
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.contentBox .card.committee .vip .leve {
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-sizing: border-box;
  padding-bottom: 0.1rem;
  background: url('@/assets/images/icon/crown.png') no-repeat center center / contain;
}
.contentBox .card.committee .vip .leve span {
  color: var(--fff);
  font-size: 1.2rem;
}
.contentBox .card.committee .vip .acting {
  text-align: center;
  color: #009d80;
  font-size: 0.6rem;
}
.contentBox .card.committee .commission li {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.contentBox .card.committee .wallet {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contentBox .card.committee .wallet button {
  font-size: 0.7rem;
}
.contentBox .card.committee .wallet .tip {
  font-size: 0.7rem;
}
.contentBox .card.share ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.contentBox .card.share li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.contentBox .card.share li span {
  font-size: 0.7rem;
  color: #727272;
}
.contentBox .card.share .shareLink .tip {
  font-size: 0.9rem;
}
.contentBox .card.share .shareLink .copyUrl {
  background-color: #f9f9f9;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.contentBox .card.share .shareLink .copyUrl .url {
  color: #808080;
  font-size: 0.9rem;
}
.contentBox .card.share .shareLink .copyUrl .copyBtn {
  color: #40a1de;
  font-size: 0.9rem;
}
.contentBox .card.service .card-header {
  font-size: 0.8rem;
}
.contentBox .card.service .text {
  font-size: 0.72rem;
  line-height: 1.8;
}
.contentBox .card.commission .hintTitle {
  text-align: center;
  font-weight: bold;
  font-size: 0.8rem;
}
.contentBox .card.commission .imgContent {
  display: flex;
  align-items: center;
}
.contentBox .card.commission .imgContent span {
  color: red;
  font-size: 0.9rem;
}
.contentBox .card.commission .imgContent .rangeBar {
  width: 7rem;
}
.contentBox .card.commission .relationSchema li {
  font-size: 0.8rem;
}
.contentBox .card.commission .relationSchema li span {
  color: red;
}
.todayModal.modal .modal-title,
.totalModal.modal .modal-title {
  color: #009d81;
}
.modal .notice {
  color: #808080;
}
</style>
