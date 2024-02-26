<script>
import CloseBtn from '../components/CloseBtn.vue'
export default {
  components: {
    CloseBtn
  }
}
</script>
<template>
  <div class="headerBack d-flex justify-content-between align-items-center px-2">
    <h2 class="title">Sacar</h2>
    <CloseBtn></CloseBtn>
  </div>
  <div class="container-fluid mt-3 withdrawWindows">
    <div class="pixInfo mb-2">Saque com</div>
    <div class="channelContainer mb-4">
      <div class="payChannel d-flex">
        <div class="channelItem me-2 py-2 px-3 active">
          <div class="pixInfo d-flex align-items-center mb-2">
            <img src="../assets/images/icon/pix.png" alt="" class="pixImg" />
            <span>PIX Ⅵ</span>
          </div>
          <span>20 ~ 99,999 BRL</span>
        </div>
        <div class="channelItem me-2 py-2 px-3">
          <div class="pixInfo d-flex align-items-center mb-2">
            <img src="../assets/images/icon/pix.png" alt="" class="pixImg" />
            <span>V</span>
          </div>
          <span>20 ~ 99,999 BRL</span>
        </div>
        <div class="channelItem me-2 py-2 px-3">
          <div class="pixInfo d-flex align-items-center mb-2">
            <img src="../assets/images/icon/pix.png" alt="" class="pixImg" />
            <span>PIX Ⅲ</span>
          </div>
          <span>20 ~ 99,999 BRL</span>
        </div>
        <div class="channelItem me-2 py-2 px-3">
          <div class="pixInfo d-flex align-items-center mb-2">
            <img src="../assets/images/icon/pix.png" alt="" class="pixImg" />
            <span>PIX Ⅳ</span>
          </div>
          <span>20 ~ 99,999 BRL</span>
        </div>
      </div>
    </div>
    <p class="text-white">Certifique-se de que o CPF está em seu nome para evitar atrasos.</p>
    <ul class="withdrawTips">
      <li>Mín 20, máx 10000</li>
      <li>
        2% de taxa por saque. Em caso de saldo insuficiente, o montante creditado será deduzido
      </li>
    </ul>
    <!-- cpf -->
    <div class="cpf mt-2 mb-3 d-flex align-items-center mt-2 mb-3 inputBg">
      <button
        type="button"
        class="cpfSwitchBtn"
        data-bs-toggle="offcanvas"
        data-bs-target="#cpfWindow"
        aria-controls="cpfWindow"
      >
        <span class="me-2">CPF</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#FFF"
          class="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
          />
        </svg>
      </button>
      <input type="text" class="form-control" placeholder="000.000.000-00" />
    </div>
    <!-- account -->
    <div class="account mb-3">
      <label class="d-flex align-items-center"> Tipo de chave PIX </label>
      <div class="d-flex align-items-center mt-2 mb-3 inputBg">
        <button
          type="button"
          class="accountBtn"
          data-bs-toggle="offcanvas"
          data-bs-target="#accountWindow"
          aria-controls="accountWindow"
        >
          <span class="me-2 text-nowrap">CPF</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#FFF"
            class="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
            ></path>
          </svg>
        </button>
        <input type="number" class="form-control" placeholder="000.000.000-00" />
      </div>
    </div>
    <div class="withdrawMain">
      <div class="content">
        <label class="d-flex align-items-center" for="quantiaInupt">
          SALDO DISPONIVEL:
          <img src="../assets/images/icon/rmoneyIcon2.svg" class="ms-2" width="25" alt="" />
          <span class="ms-2">0</span>
        </label>
        <div class="position-relative mt-2 mb-3">
          <input id="quantiaInupt" type="number" class="form-control" />
          <span class="tipsClose position-absolute fw-bold">Quantia (BRL) </span>
        </div>
        <div class="slot mb-4">
          <ul class="p-0">
            <li class="mb-2 d-flex align-items-center">
              Valor total de resgate
              <span class="tip mx-2">0 BRL</span>
              <button
                type="button"
                class="btn p-0"
                data-bs-toggle="modal"
                data-bs-target="#BonusProdress"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="#8ea7bb"
                  class="bi bi-question-circle-fill icon"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"
                  ></path>
                </svg>
              </button>
            </li>
            <li class="mb-2">
              Para aumentar seu saldo disponível,
              <a href="/" class="toHome">Aposte Agora</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 可加 active -->
    <button type="button" class="btn confirmBtn w-100 mb-3">Saque</button>
    <!-- 獎金優惠視窗 -->
    <div
      class="modal fade"
      id="BonusProdress"
      tabindex="-1"
      aria-labelledby="BonusProdressLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content BonusProdressModal">
          <div class="modal-header border-0">
            <h5 class="modal-title d-flex align-items-center" id="BonusProdressLabel">
              <div class="modalHeaderIicon me-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#b9b9b9"
                  class="bi bi-gift"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z"
                  />
                </svg>
              </div>
              Proxima retirada de bonus
            </h5>
            <button type="button" class="btn p-0" data-bs-dismiss="modal" aria-label="Close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#98a7b5"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </button>
          </div>
          <div class="modal-body">
            <ul class="p-0">
              <li class="mb-2 d-flex align-items-baseline">
                RECEBIDO
                <img src="../assets/images/icon/rmoneyIcon2.svg" width="35" class="ms-2" alt="" />
              </li>
              <li class="mb-2 time">
                Invalid Date
                <span>Invalid Date</span>
              </li>
              <li>Requisito de rolagem 0X</li>
            </ul>
            <div class="progressContent mb-2">
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span>25%</span>
            </div>
            <div class="d-flex align-items-center">
              FALTA APOSTAR
              <img src="../assets/images/icon/rmoneyIcon3.svg" width="24" class="mx-2" alt="" />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.withdrawWindows {
  font-size: 0.8rem;
  width: 100%;
  border: none;
  background-color: #24262b;
  color: var(--gray1);
  padding-bottom: 7rem;
}
.withdrawWindows .pixInfo {
  color: #b4c0cb;
}
.withdrawWindows .channelContainer {
  overflow: auto;
}
.withdrawWindows .channelContainer::-webkit-scrollbar {
  display: none;
}
.withdrawWindows .channelContainer .channelItem {
  color: #8ea7bb;
  background: #232323;
  border-radius: 0.4rem;
  width: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-wrap: nowrap;
}
.withdrawWindows .channelContainer .channelItem.active {
  box-shadow: inset 0 0 0 1px #8399ac80;
}
.withdrawWindows .channelContainer .channelItem .pixInfo {
  color: #9e9e9e;
}
.withdrawWindows .channelContainer .channelItem .pixImg {
  height: 2.2rem;
  margin-right: 1rem;
}
.withdrawWindows .channelContainer .channelItem span {
  white-space: nowrap;
}
.withdrawWindows .withdrawTips li {
  list-style-type: decimal;
}
.withdrawWindows label {
  color: #aab3ba;
}
.withdrawWindows input {
  padding: 0.5rem 0.8rem;
  color: var(--blue);
}
.inputBg {
  background-color: var(--black3);
}
.accountBtn,
.cpfSwitchBtn {
  background-color: initial;
  border: none;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  color: var(--fff);
}
.withdrawWindows input:focus {
  color: #868686;
  background-color: var(--black3);
  box-shadow: none !important;
}
.withdrawWindows .withdrawMain .tipsClose {
  left: 1rem;
  top: 50%;
  color: var(--blue);
  transform: translate(0, -50%);
}
.withdrawWindows .withdrawMain input {
  text-indent: 6.5rem;
}
.withdrawWindows .withdrawMain .slot .tip {
  color: #ffa200;
}
.withdrawWindows .withdrawMain .slot .toHome {
  color: var(--primary);
}
.withdrawWindows .confirmBtn {
  background: var(--greenGradient);
  color: var(--fff);
  border: none;
  opacity: 0.4;
  border-radius: 2px;
  padding: 0.56rem 0;
}
.withdrawWindows .confirmBtn.active {
  opacity: 1;
}
/* 獎金優惠視窗 */
.withdrawWindows .BonusProdressModal {
  color: var(--gray1);
  background-color: #3f3e3e;
}
.withdrawWindows .BonusProdressModal .modal-title {
  font-size: 1.2rem;
}
.withdrawWindows .BonusProdressModal .modal-title .modalHeaderIicon {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px #b9b9b9;
}
.withdrawWindows .BonusProdressModal .modal-body {
  font-size: 0.8rem;
}
.withdrawWindows .BonusProdressModal .progressContent {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.withdrawWindows .BonusProdressModal .progressContent .progress {
  height: 0.6rem;
  width: 85%;
}
.withdrawWindows .BonusProdressModal .progressContent .progress .progress-bar {
  background-color: #009d81;
}
.withdrawWindows .BonusProdressModal .progressContent span {
  color: var(--primary);
  font-size: 1.2rem;
}
.switchWindow {
  background-color: #353535;
  height: auto;
}
.switchWindow button {
  background-color: #262728;
  color: var(--gray1);
}
.switchWindow button.closeBtn {
  color: #646566;
}
.switchWindow button.active {
  color: var(--primary);
}
</style>
