<script>
  export default {
    methods: {
      closeBtn() {
        this.$router.go(-1)
      }
    }
  }
</script>
<template>
  <div class="routerView">
    <div class="headerBack d-flex justify-content-between align-items-center px-2">
      <div class="left d-flex align-items-center">
        <div class="closeBtn" @click="closeBtn">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FFF" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
          </svg>
        </div>
        <h2 class="title mx-2">  Receba R$ 100 de graça  </h2>
        <div class="ruleBtn" data-bs-toggle="modal" data-bs-target="#ruleModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FFF" class="bi bi-question-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
          </svg>
        </div>
      </div>
      <div class="right d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#FFF" class="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg>
        <span class="mx-1">0.00</span>
        <span>BRL</span>
      </div>
    </div>
    <div class="container-fluid cashWheelWindows">
      <div class="cashMain mb-4 px-4 py-2">
        <div class="haveCash d-flex justify-content-between align-items-center">
          <img src="../assets/images/icon/cash_2.png" width="55" alt="">
          <div class="totalCash">
            R$ 
            <span class="cash">
              97.21
            </span>
          </div>
          <div class="withdraw" data-bs-toggle="modal" data-bs-target="#withdrawAlert">
            <img src="../assets/images/icon/pix_2.png" width="16" class="me-1" alt="">
            SACAR 
          </div>
        </div>
        <div class="progressBox">
          <span>97.21%</span>
          <div class="progress mb-2">
            <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="needCash">
          Ainda e necessário  
          <span class="needCashNum">2.79</span>
          para sacar   
        </div>
      </div>
      <div class="drawMain mb-5">
          <!-- 背景旋轉光暈 -->
          <div class="spinLightBg"></div>
          <!-- 轉盤內容 -->
          <div class="drawContent">
            <div class="spinbox">
                <div class="banknote1"></div>
                <div class="coins"></div>
                <div class="fail"></div>
                <div class="sacar"></div>
                <div class="banknote2"></div>
                <div class="one">1</div>
                <div class="fifty">50</div>
                <div class="oneThousand">1000</div>
            </div>
          </div>
          <!-- 轉盤背景 -->
          <img src="../assets/images/rou/d.png" alt="" class="w-100 position-relative">
          <!-- 燈光效果 -->
          <div class="light"></div>
          <!-- 裝飾 -->
          <img src="../assets/images/rou/pointer.png" alt="" class="pointer">
          <!-- 按鈕 -->
          <div class="drawImg">
              <img src="../assets/images/rou/draw.png" alt="" class="w-100">
          </div>
          <!-- 顯示次數及金額 -->
          <div class="drawLen">
              <div class="content">
                  <img src="../assets/images/rou/one.png" alt="">
              </div>
          </div>
      </div>
      <div class="drawContent mb-3">
        <div class="text text-center mb-2">
          <span>Expira em</span>
          20:10:52
        </div>
        <div class="cashButton d-flex justify-content-around align-items-center py-2">
          <span> Convide amigos para ajudar com saques </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFF" class="bi bi-share-fill" viewBox="0 0 16 16">
            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
          </svg>
        </div>
      </div>
      <div class="report mb-3">
        <div class="vanTabs mb-3">
          <div class="reportTitle py-3 mb-2">Relatório</div>
          <div class="vanTabsContent px-2">
            <div class="winList">
              <div class="item">
                <div class="name">5568******172</div>
                <div class="tipText"> Acabou de saca </div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5568******172</div>
                <div class="tipText"> Acabou de saca </div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5568******172</div>
                <div class="tipText"> Acabou de saca </div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5568******172</div>
                <div class="tipText"> Acabou de saca </div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5568******172</div>
                <div class="tipText"> Acabou de saca </div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5568******172</div>
                <div class="tipText"> Acabou de saca </div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5568******172</div>
                <div class="tipText"> Acabou de saca </div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5568******172</div>
                <div class="tipText"> Acabou de saca </div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5568******172</div>
                <div class="tipText"> Acabou de saca </div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5568******172</div>
                <div class="tipText"> Acabou de saca </div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5568******172</div>
                <div class="tipText"> Acabou de saca </div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5568******172</div>
                <div class="tipText"> Acabou de saca </div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5568******172</div>
                <div class="tipText"> Acabou de saca </div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5568******172</div>
                <div class="tipText"> Acabou de saca </div>
                <div class="value">
                  <span class="addCash">+100</span>
                  <span class="unit"> R$</span>
                </div>
              </div>
              <div class="item">
                <div class="name">5568******172</div>
                <div class="tipText"> Acabou de saca </div>
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
            <li class="mb-3">1.Você pode iniciar um saque quando o valor acumulado atingir 100 BRL.  </li>
            <li class="mb-3">2. Convidar amigos para se registrarem no 6Z.com irá ajudá- lo a sacar dinheiro rapidamente.</li>
            <li class="mb-3">3. Cada usuário receberá uma única rodada grátis por dia. </li>
            <li class="mb-3">4.Cada usuário tem um período de validade de 3 dias para cada atividade e pode participar da atividade várias vezes.</li>
            <li class="mb-3">5. Se você receber um bônus de dinheiro extra, pode jogar jogos de graça e ganhar ainda mais dinheiro real.</li>
            <li class="mb-3">6.Se voce nao retirar o dinheiro dentro de 3 dias,ele ser perdido.</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- ruleModal -->
    <div class="modal fade ruleModalLabel" id="ruleModal" tabindex="-1" aria-labelledby="ruleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h5 class="modal-title" id="ruleModalLabel">Regras</h5>
            <div data-bs-dismiss="modal" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFFFFF" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
              </svg>
            </div>
          </div>
          <div class="modal-body">
            <ul class="tipsContent p-0">
              <li class="mb-3">1.Você pode iniciar um saque quando o valor acumulado atingir 100 BRL.  </li>
              <li class="mb-3">2. Convidar amigos para se registrarem no 6Z.com irá ajudá- lo a sacar dinheiro rapidamente.</li>
              <li class="mb-3">3. Cada usuário receberá uma única rodada grátis por dia. </li>
              <li class="mb-3">4.Cada usuário tem um período de validade de 3 dias para cada atividade e pode participar da atividade várias vezes.</li>
              <li class="mb-3">5. Se você receber um bônus de dinheiro extra, pode jogar jogos de graça e ganhar ainda mais dinheiro real.</li>
              <li class="mb-3">6.Se voce nao retirar o dinheiro dentro de 3 dias,ele ser perdido.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- withdrawAlertModal -->
    <div class="modal fade withdrawAlertModal" id="withdrawAlert" tabindex="-1" aria-labelledby="withdrawAlertLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h5 class="modal-title" id="withdrawAlertLabel">Em breve poderá sacar</h5>
            <div data-bs-dismiss="modal" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFFFFF" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
              </svg>
            </div>
          </div>
          <div class="modal-body">
            <div class="main py-3 px-2">
              <div class="cash">
                <div class="text">Total de dinheiro a ser pago em breve</div>
                <div class="cashContent">
                  <span>97.21</span>
                  <span class="currency"> BRL</span>
                </div>
              </div>
              <ul class="withdrawInfo mb-3">
                <li class="mb-2">
                  <span>Conta de saque</span>
                  <span style="color: rgb(60, 197, 23);">100,000</span>
                </li>
                <li class="mb-2">
                  <span>Formas de Pagamentos</span>
                  <span>Pix</span>
                </li>
              </ul>
              <ul class="schedule py-3">
                <li class="mb-3">O pedido de pagamento foi submetido </li>
                <li class="mb-3"> Ainda e necessário  2.79  para sacar  </li>
                <li class="active">100 R$ serão pagos na sua conta PIX</li>
              </ul>
              <button type="button" class="btn w-100"> Convide amigos para ajudar com </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cashWheelWindows{
  margin-top: 4rem;
}
.headerBack{
  z-index: 1;
  color: var(--fff);
}
.cashMain{
  background-color: #232327;
  border-radius: .8rem;
}
.cashMain .haveCash .totalCash{
  color: #6ddf39;
  font-size: 2rem;
}
.cashMain .haveCash .withdraw{
  background: #efb423 linear-gradient(90deg,#49a319,#2b8b2f);
  color: var(--fff);
  border-radius: 5rem;
  font-size: .9rem;
  padding: .2rem .6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cashMain .progressBox{
  position: relative;
  padding-top: 1.6rem;
}
.cashMain .progressBox span{
  position: absolute;
  color: var(--fff);
  font-size: 1rem;
  top: 0;
  right: 0;
}
.cashMain .progressBox .progress{
  height: .5rem;
}
.cashMain .progressBox .progress .progress-bar{
  background-color: #6ddf39;
}

.cashMain .needCash{
  color: var(--fff);
  text-align: center;
  font-size: 1rem;
}
.cashMain .needCash .needCashNum{
  color: #6ddf39;
  font-weight: bold;
  font-size: 1.1rem;
}

.drawMain {
  position: relative;
  width: 80%;
  margin: 0 auto;
}
.drawMain .spinLightBg{
  pointer-events: none;
  background: url('../assets/images/rou/spinBg_2.png') no-repeat center center / 100% 100%;
  width: 31rem;
  height: 31rem;
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  animation: spinLightBg 20s linear infinite;
}
@keyframes spinLightBg{
  from {
    transform: translate(-50%,-50%) rotate(0deg);
  }
  to{
    transform: translate(-50%,-50%) rotate(360deg);
  }
}
.drawMain .light{
  position: absolute;
  transform: translate(-50%,0);
  left: 50%;
  top: 17.1%;
  width: 18.7rem;
  height: 18.7rem;
  animation: lightAnimation infinite .4s;
}
@keyframes lightAnimation{
  from {
      background: url('../assets/images/rou/light1.png') no-repeat center center / 100% 100%;
  }
  to{
      background: url('../assets/images/rou/light2.png') no-repeat center center / 100% 100%;
  }
}
.drawMain .pointer{
  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;
  top: 15.6%;
  width: 5rem;
  height: 3rem;
}
.drawMain .drawImg{
  position: absolute;
  transform: translate(-50%,0);
  left: 50%;
  top: 43%;
  width: 5.3rem;
  height: 5rem;
}
.drawMain .drawLen{
  pointer-events: none;
  position: absolute;
  transform: translate(-50%,0);
  left: 50%;
  top: 43%;
  width: 5.3rem;
  height: 5rem;
  text-align: center;
  border-radius: 50%;
  color: var(--fff);
  font-weight: bold;
}
.drawMain .drawLen .content{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.drawMain .drawLen img{
  width: 1.2rem;
}
.drawMain .drawContent{
  position: absolute;
  left: 7.6%;
  top: 21.7%;
  width: 84.5%;
  height: 63.4%;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 1s;
}
.drawMain .drawContent .spinbox{
  background: url('../assets/images/rou/spinBg.png') no-repeat center center / contain;
  transform: rotate(0deg);
  width: 100%;
  height: 100%;
}
.drawMain .drawContent .spinbox .banknote1{
  background: url('../assets/images/rou/spin-1.png') no-repeat center center / contain;
  position: absolute;
  top: 10%;
  left: 41.5%;
  width: 3rem;
  height: 2.5rem;
}
.drawMain .drawContent .spinbox .banknote2{
  background: url('../assets/images/rou/spin-1.png') no-repeat center center / contain;
  position: absolute;
  top: 76%;
  left: 41.5%;
  width: 3rem;
  height: 2.5rem;
  transform: rotate(180deg);
}
.drawMain .drawContent .spinbox .coins{
  background: url('../assets/images/rou/spin-2.png') no-repeat center center / contain;
  position: absolute;
  top: 43%;
  left: 9.5%;
  width: 2.5rem;
  height: 2.5rem;
  transform: rotate(-90deg);
}
.drawMain .drawContent .spinbox .fail{
  background: url('../assets/images/rou/spin-4.png') no-repeat center center / contain;
  position: absolute;
  top: 65%;
  left: 15.5%;
  width: 3rem;
  height: 3.5rem;
  transform: rotate(-135deg);
}
.drawMain .drawContent .spinbox .sacar{
  background: url('../assets/images/rou/spin-5.png') no-repeat center center / contain;
  position: absolute;
  top: 62%;
  left: 63.5%;
  width: 3rem;
  transform: rotate(135deg);
  height: 3.5rem;
}
.drawMain .drawContent .spinbox .one{
  position: absolute;
  top: 17%;
  left: 21.5%;
  transform: rotate(-45deg);
  font-weight: bold;
  font-size: 2rem;
  color: #ffd760;
}
.drawMain .drawContent .spinbox .fifty{
  position: absolute;
  top: 41%;
  left: 78.5%;
  transform: rotate(90deg);
  font-weight: bold;
  font-size: 2rem;
  color: #b90615;
}
.drawMain .drawContent .spinbox .oneThousand{
  position: absolute;
  top: 18%;
  left: 64.8%;
  transform: rotate(45deg);
  font-weight: bold;
  font-size: 1.5rem;
  color: #ffd760;
}
.drawContent{
  color: var(--fff);
}
.drawContent .text span{
  color: #8795b1;
}
.drawContent .cashButton{
  background-color: #202124;
}
.report .reportTitle{
  background-color: #202124;
  color: var(--fff);
  text-align: center;
}
.report .vanTabsContent{
  overflow: hidden;
  height: 15rem;
  position: relative;
}
.report .vanTabsContent .winList{
  animation: winList 8s infinite linear;
  width: 96%;
  position: absolute;
  top: 0;
}
@keyframes winList{
  0%{
      transform:translateY(0);
  }
  100%{
      transform:translateY(-20rem);
  }
}
.report .vanTabsContent .winList .item{
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.report .vanTabsContent .winList .item .name,
.report .vanTabsContent .winList .item .tipText{
  font-size: .85rem;
  color: #8795b1;}
.report .vanTabsContent .winList .item .value{
  display: flex;
  align-items: center;
  justify-content: center;
}
.report .vanTabsContent .winList .item .value .addCash{
  color: #6ddf39;
  font-size: .85rem;
  margin-right: 0.5rem;
}
.report .vanTabsContent .winList .item .value .unit{
  background-color: #6ddf39;
  border-radius: 50%;
  color: var(--fff);
  font-size: .7rem;
  font-weight: bold;
  width: 1.3rem;
  height: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.report .rules{
  background-color: #202124;

}
.report .rules h2{
  color: #8795b1;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
}
.report .rules .tipsContent{
  color: #7d8397;
  font-size: 1rem;
}

.ruleModalLabel .modal-content{
  background-color: #201f1f;
  color: var(--fff);
}
.ruleModalLabel .modal-content .modal-title{
  color: #61cf3e;
  font-weight: bold;
}


.withdrawAlertModal .modal-content{
  background-color: #202124;
}
.withdrawAlertModal .modal-content .modal-title{
  color: var(--fff);
}
.withdrawAlertModal .modal-content .main{
  background-color: #27292d;
}
.withdrawAlertModal .modal-content .main .cash .text{
  color: #6ddf39;
  font-size: .9rem;
  text-align: center;
}
.withdrawAlertModal .modal-content .main .cashContent{
  color: #fd2626;
  font-size: 2.6rem;
  text-align: center;
  font-weight: bold;
}
.withdrawAlertModal .modal-content .main .withdrawInfo{
  padding: 0;
}
.withdrawAlertModal .modal-content .main .withdrawInfo li{
  display: flex;
  justify-content: space-between;
  color: var(--fff);
  font-size: .8rem;
}
.withdrawAlertModal .modal-content .main .schedule{
  background-color: #232327;
  color: #6ddf39;
  font-size: .8rem;
  position: relative;
}
.withdrawAlertModal .modal-content .main .schedule::before {
  content: "";
  position: absolute;
  height: 5rem;
  border-left: 1px dotted #3cc517;
  transform: translate(0,-50%);
  top: 50%;
  left: 1rem;
}
.withdrawAlertModal .modal-content .main .schedule li{
  position: relative;
}
.withdrawAlertModal .modal-content .main .schedule li::before{
  content: "\2713";
  font-size: .6rem;
  color: var(--fff);
  width: .9rem;
  height: .9rem;
  position: absolute;
  left: -1.5rem;
  top: 50%;
  transform: translate(0,-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6ddf39;
  border-radius: 50%;
}
.withdrawAlertModal .modal-content .main .schedule li.active{
  color: #4b4f5d;
}
.withdrawAlertModal .modal-content .main .schedule li.active::before{
  content: "";
  width: .55rem;
  height: .55rem;
  left: -1.25rem;
  top: 52%;
  background-color: #4b4f5d;
}
.withdrawAlertModal .modal-content button{
  background-color: #6ddf39;
  color: var(--fff);
}
</style>
