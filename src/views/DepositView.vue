<script>
import '@/assets/css/deposit.css'
import CloseBtn from '../components/CloseBtn.vue'
export default {
  components: {
    CloseBtn
  }
}
</script>
<template>
  <div class="headerBack d-flex justify-content-between align-items-center px-2">
    <h2 class="title">Depósito</h2>
    <CloseBtn></CloseBtn>
  </div>
  <div class="container-fluid mt-3 depositWindows">
    <div class="pixInfo mb-2">Formas de Pagamentos</div>
    <div class="channelContainer mb-5">
      <div class="payChannel d-flex">
        <div class="channelItem me-2 py-2 px-3 active">
          <div class="pixInfo d-flex align-items-center mb-2">
            <img src="../assets/images/icon/pix.png" alt="" class="pixImg" />
            <span>PIX Ⅵ</span>
          </div>
          <span>10 ~ 99,999 BRL</span>
        </div>
        <div class="channelItem me-2 py-2 px-3">
          <div class="pixInfo d-flex align-items-center mb-2">
            <img src="../assets/images/icon/pix.png" alt="" class="pixImg" />
            <span>V</span>
          </div>
          <span>10 ~ 99,999 BRL</span>
        </div>
        <div class="channelItem me-2 py-2 px-3">
          <div class="pixInfo d-flex align-items-center mb-2">
            <img src="../assets/images/icon/pix.png" alt="" class="pixImg" />
            <span>PIX Ⅲ</span>
          </div>
          <span>10 ~ 99,999 BRL</span>
        </div>
        <div class="channelItem me-2 py-2 px-3">
          <div class="pixInfo d-flex align-items-center mb-2">
            <img src="../assets/images/icon/pix.png" alt="" class="pixImg" />
            <span>PIX Ⅳ</span>
          </div>
          <span>10 ~ 99,999 BRL</span>
        </div>
      </div>
    </div>
    <div class="depositMain">
      <div class="amount position-relative mb-4">
        <input type="text" class="form-control" placeholder="Min. 10" />
        <span class="tips-close position-absolute fw-bold">Quantia (BRL) </span>
      </div>
      <div class="deposit">
        <ul class="p-0 m-2">
          <li class="mb-3 py-2" :class="{ active: isActive }" @click="toggleActive">
            <div class="amountContent d-flex align-items-center">
              <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
              <span>20</span>
            </div>
            <div class="amountTips">+100%Bonus</div>
          </li>
          <li class="mb-3 py-2">
            <div class="amountContent d-flex align-items-center">
              <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
              <span>50</span>
            </div>
            <div class="amountTips">+100%Bonus</div>
          </li>
          <li class="mb-3 py-2 hot">
            <div class="amountContent d-flex align-items-center">
              <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
              <span>100</span>
            </div>
            <div class="amountTips">+100%Bonus</div>
          </li>
          <li class="mb-3 py-2">
            <div class="amountContent d-flex align-items-center">
              <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
              <span>200</span>
            </div>
            <div class="amountTips">+100%Bonus</div>
          </li>
          <li class="mb-3 py-2 hot">
            <div class="amountContent d-flex align-items-center">
              <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
              <span>500</span>
            </div>
            <div class="amountTips">+100%Bonus</div>
          </li>
          <li class="mb-3 py-2 hot">
            <div class="amountContent d-flex align-items-center">
              <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
              <span>1000</span>
            </div>
            <div class="amountTips">+100%Bonus</div>
          </li>
          <li class="mb-3 py-2 hot">
            <div class="amountContent d-flex align-items-center">
              <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
              <span>2000</span>
            </div>
            <div class="amountTips">+100%Bonus</div>
          </li>
          <li class="mb-3 py-2">
            <div class="amountContent d-flex align-items-center">
              <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
              <span>5000</span>
            </div>
            <div class="amountTips">+100%Bonus</div>
          </li>
          <li class="mb-3 py-2">
            <div class="amountContent d-flex align-items-center">
              <img class="currencyIcon me-1" src="../assets/images/icon/rmoneyIcon.svg" alt="" />
              <span>10000</span>
            </div>
            <div class="amountTips">+100%Bonus</div>
          </li>
        </ul>
      </div>
      <!-- 可加 active -->
      <button type="button" class="btn depositBtn w-100 mb-3 active">Depositar Agora</button>
    </div>
    <div class="tips">
      <ul class="ps-3">
        <li class="mb-2">
          1. Se você perder dinheiro real ao jogar o jogo, a 6Z oferece um
          <span>Cashback em dinheiro de 25% toda semana</span>
        </li>
        <li class="mb-2">
          2. O período sobre o qual é calculado o cashback semanal vai de segunda-feira às 00:00 a
          domingo às 23:59.
        </li>
        <li class="mb-2">
          3. Horário de solicitação do cashback: De segunda-feira da próxima semana 06:00 a
          sexta-feira 23:59, expirará se não for resgatado.
        </li>
        <li class="mb-2">
          4. Ao recarregar, certifique-se de vincular o CPF para garantir a segurança dos fundos
          pessoais e evitar riscos.
        </li>
      </ul>
    </div>
  </div>
</template>
