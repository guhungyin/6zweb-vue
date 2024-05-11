<script>
import { useUserStore } from '@/stores/modules/user'
export default {
  methods: {
    closeBtn() {
      this.$router.go(-1)
    }
  },
  setup() {
    const userStore = useUserStore()

    return {
      userStore
    }
  }
}
</script>
<template>
  <div class="routerView">
    <header class="headerBack d-flex justify-content-between align-items-center px-2">
      <h2 class="title d-flex align-items-center">
        <div @click="closeBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#ffe800"
            class="bi bi-chevron-left me-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </div>
        Cashback {{ this.userStore.cashbackInfo.maxRate }}
      </h2>
      <div class="moneyBox">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#FFF"
          class="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
        <span>{{ this.userStore.money }}</span>
        BRL
      </div>
    </header>
    <div class="main container-fluid cashbackWinsows py-3">
      <div class="vipCard mb-3 p-3">
        <div class="main d-flex justify-content-between align-items-center mb-2">
          <div class="cashMain">
            <img src="../assets/images/icon/money1.png" width="44" alt="" />
            <span class="current fw-bold mx-2"
              >{{ this.userStore.cashbackInfo.minRate }} Cashback</span
            >
            <span class="max">Max:{{ this.userStore.cashbackInfo.maxRate }}</span>
          </div>
          <div class="vipMaim vip1 d-flex justify-content-between">
            <span class="iconfont icon-vip me-1">
              <img src="../assets/images/icon/menuIcon05.png" width="25" alt="" />
            </span>
            <span class="vipNum">v{{ this.userStore.cashbackInfo.vipLevel }}</span>
          </div>
        </div>
        <div class="progress van-progress mb-2">
          <span class="vanProgressPortion"></span>
        </div>
        <div class="progressTips">
          {{ this.userStore.cashbackInfo.nextBetAmount }} Apostas to VIP{{
            this.userStore.cashbackInfo.nextVipLevel
          }}
        </div>
      </div>
      <div class="vipCash d-flex align-items-center mb-3 p-3">
        <div class="img position-relative">
          <img src="https://6z.com/img/M-4.328863a6.png" alt="" class="cashImg" width="86" />
          <img src="https://6z.com/img/free.b8fcf912.png" alt="" class="free" width="44" />
        </div>
        <div class="main">
          <div class="title fw-bold mb-1">Seu Cashback Semanal</div>
          <p class="mb-1">Você ganhará ??? BRL em cashback jogando esta semana.</p>
          <div class="time mb-1">Periodo {{ this.userStore.cashbackInfo.cycle }}</div>
          <div class="button mb-2">Reivindicar Agora</div>
          <div class="extTime">Tempo de reivindicação {{ this.userStore.cashbackInfo.claim }}</div>
        </div>
      </div>
      <div class="vipList mb-3 p-3">
        <h3>Status VIP Cashback</h3>
        <table class="table table-bordered table-striped align-middle">
          <thead>
            <tr>
              <th>VIP</th>
              <th>APOSTA</th>
              <th>CASHBACK</th>
            </tr>
          </thead>
          <tbody>
            <template
              v-for="levelItem in this.userStore.cashbackInfo.vipCondition"
              :key="levelItem"
            >
              <tr>
                <td>{{ levelItem.vipLevel }}</td>
                <td>{{ levelItem.requireBetAmount }}</td>
                <td>{{ levelItem.rebate }}</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <div class="vipRules">
        <h3>TERMOS E REGRAS</h3>
        <ul class="p-0">
          <li>1. O cashback semanal é dado como recompensa todas as semanas.</li>
          <li>
            2. O período sobre o qual é calculado o cashback semanal vai de segunda-feira às 00:00 a
            domingo às 23:59.
          </li>
          <li>
            3. Horário de solicitação do cashback: De segunda-feira da próxima semana 06:00 a
            sexta-feira 23:59, expirará se não for resgatado.
          </li>
          <li>
            4. O número de Perdas de dinheiro real multiplicado pela % de reembolso é o
            reembolso/cashback da semana.
          </li>
          <li>
            5. Caso você não tenha apostado durante o período em que o cashback estava ativo ou se
            seus ganhos da última semana ou ganhos totais são maiores que suas perdas, você não
            receberá cashback.
          </li>
          <li>6. Limite máximo de recompensa de cashback por pessoa por semana: 10000 BRL</li>
          <li>
            7. O valor do cashback pode ser sacar diretamente ou utilizado para continuar jogando
          </li>
          <li>
            8. O valor do Cashback Semanal não é contabilizado como aposta válida para o calculo do
            próximo período de distribuição.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cashbackWinsows {
  margin-top: 4rem;
  background-color: #ededed;
}
.headerBack {
  background-color: var(--greenBg);
}
.headerBack .title {
  color: var(--yellow);
}
.headerBack .moneyBox {
  color: var(--fff);
}
.vipCard {
  border-radius: 0.5rem;
  color: #009d80;
  background-color: var(--yellow);
}
.vipCard .cashMain .current {
  font-size: 1.5rem;
}
.vipCard .cashMain .max {
  color: #383838;
  font-size: 0.8rem;
}
.vipCard .vipMaim .vipNum {
  padding: 2px 9px;
  color: var(--fff);
  border-radius: 3px;
  font-size: 0.7rem;
  background-color: #1a9c82;
}
.vipCard .progress {
  height: 0.6rem;
  background-color: var(--fff);
}
.vipCard .progressTips {
  color: #383838;
  text-align: right;
  font-size: 0.7rem;
}
.vipCash {
  background-color: var(--fff);
}
.vipCash .img .free {
  position: absolute;
  left: 2.5rem;
  top: 3rem;
}
.vipCash .main .title {
  color: #cf0202;
  font-size: 1.3rem;
}
.vipCash .main p {
  font-size: 0.9rem;
}
.vipCash .main .time {
  color: red;
  font-size: 0.65rem;
}
.vipCash .main .button {
  text-align: center;
  padding: 0.5rem 0;
  font-size: 0.7rem;
  color: var(--fff);
  background: var(--greenGradient);
}
.vipCash .main .extTime {
  font-size: 0.55rem;
  color: grey;
  text-align: center;
}
.vipList {
  font-weight: bold;
  background-color: var(--fff);
}
.vipList h3 {
  color: grey;
  font-size: 1rem;
  font-weight: bold;
}
.vipList table {
  text-align: center;
  font-size: 0.9rem;
}
.vipList thead th {
  color: #009d80;
}
.vipList table tr:nth-child(10) td {
  color: #cf0202;
}
.vipRules h3 {
  font-weight: bold;
  font-size: 1rem;
}
.vipRules {
  font-size: 0.8rem;
}
</style>
