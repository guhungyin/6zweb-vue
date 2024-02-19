<template>
    <div class="container-fluid mt-3 depositWindows">
        <div class="pixInfo mb-2">Formas de Pagamentos</div>
        <div class="channelContainer mb-5">
        <div class="payChannel d-flex">
            <div class="channelItem me-2 py-2 px-3 active">
            <div class="pixInfo d-flex align-items-center mb-2">
                <img src="./images/icon/pix.png" alt="" class="pixImg">
                <span>PIX Ⅵ</span>
            </div>
            <span>10 ~ 99,999 BRL</span>
            </div>
            <div class="channelItem me-2 py-2 px-3">
            <div class="pixInfo d-flex align-items-center mb-2">
                <img src="./images/icon/pix.png" alt="" class="pixImg">
                <span>V</span>
            </div>
            <span>10 ~ 99,999 BRL</span>
            </div>
            <div class="channelItem me-2 py-2 px-3">
            <div class="pixInfo d-flex align-items-center mb-2">
                <img src="./images/icon/pix.png" alt="" class="pixImg">
                <span>PIX Ⅲ</span>
            </div>
            <span>10 ~ 99,999 BRL</span>
            </div>
            <div class="channelItem me-2 py-2 px-3">
            <div class="pixInfo d-flex align-items-center mb-2">
                <img src="./images/icon/pix.png" alt="" class="pixImg">
                <span>PIX Ⅳ</span>
            </div>
            <span>10 ~ 99,999 BRL</span>
            </div>
        </div>
        </div>
        <div class="depositMain">
        <div class="amount position-relative mb-4">
            <input type="text" class="form-control" placeholder="Min. 10">
            <span class="tips-close position-absolute fw-bold">Quantia (BRL) </span>
        </div>
        <div class="deposit">
            <ul class="p-0 m-2">
            <li class="mb-3 py-2 active">
                <div class="amountContent d-flex align-items-center">
                <img class="currencyIcon me-1" src="./images/icon/rmoney.svg" alt="">
                <span>20</span>
                </div>
                <div class="amountTips">+100%Bonus</div>
            </li>
            <li class="mb-3 py-2">
                <div class="amountContent d-flex align-items-center">
                <img class="currencyIcon me-1" src="./images/icon/rmoney.svg" alt="">
                <span>50</span>
                </div>
                <div class="amountTips">+100%Bonus</div>
            </li>
            <li class="mb-3 py-2 hot">
                <div class="amountContent d-flex align-items-center">
                <img class="currencyIcon me-1" src="./images/icon/rmoney.svg" alt="">
                <span>100</span>
                </div>
                <div class="amountTips">+100%Bonus</div>
            </li>
            <li class="mb-3 py-2">
                <div class="amountContent d-flex align-items-center">
                <img class="currencyIcon me-1" src="./images/icon/rmoney.svg" alt="">
                <span>200</span>
                </div>
                <div class="amountTips">+100%Bonus</div>
            </li>
            <li class="mb-3 py-2 hot">
                <div class="amountContent d-flex align-items-center">
                <img class="currencyIcon me-1" src="./images/icon/rmoney.svg" alt="">
                <span>500</span>
                </div>
                <div class="amountTips">+100%Bonus</div>
            </li>
            <li class="mb-3 py-2 hot">
                <div class="amountContent d-flex align-items-center">
                <img class="currencyIcon me-1" src="./images/icon/rmoney.svg" alt="">
                <span>1000</span>
                </div>
                <div class="amountTips">+100%Bonus</div>
            </li>
            <li class="mb-3 py-2 hot">
                <div class="amountContent d-flex align-items-center">
                <img class="currencyIcon me-1" src="./images/icon/rmoney.svg" alt="">
                <span>2000</span>
                </div>
                <div class="amountTips">+100%Bonus</div>
            </li>
            <li class="mb-3 py-2">
                <div class="amountContent d-flex align-items-center">
                <img class="currencyIcon me-1" src="./images/icon/rmoney.svg" alt="">
                <span>5000</span>
                </div>
                <div class="amountTips">+100%Bonus</div>
            </li>
            <li class="mb-3 py-2">
                <div class="amountContent d-flex align-items-center">
                <img class="currencyIcon me-1" src="./images/icon/rmoney.svg" alt="">
                <span>10000</span>
                </div>
                <div class="amountTips">+100%Bonus</div>
            </li>
            </ul>
        </div>
        <!-- 可加 active -->
        <button type="button" class="btn depositBtn w-100 mb-3 active"> Depositar Agora </button>
        </div>
        <div class="tips">
            <ul class="ps-3">
                <li class="mb-2">1. Se você perder dinheiro real ao jogar o jogo, a 6Z oferece um <span>Cashback em dinheiro de 25% toda semana</span></li>
                <li class="mb-2">2. O período sobre o qual é calculado o cashback semanal vai de segunda-feira às 00:00 a domingo às 23:59. </li>
                <li class="mb-2">3. Horário de solicitação do cashback: De segunda-feira da próxima semana 06:00 a sexta-feira 23:59, expirará se não for resgatado.</li>
                <li class="mb-2">4. Ao recarregar, certifique-se de vincular o CPF para garantir a segurança dos fundos pessoais e evitar riscos. </li>
            </ul>
        </div>
    </div>
</template>

<style>
.depositWindows{
    font-size: .8rem;
    width: 100%;
    border: none;
    background-color: #24262b;
    color: var(--gray1);
    padding-bottom: 7rem;
}
.depositWindows .pixInfo{
    color: #b4c0cb;
}
.depositWindows .channelContainer{
    overflow: auto;
}
.depositWindows .channelContainer::-webkit-scrollbar{display: none;}
.depositWindows .channelContainer .channelItem{
    color: #8ea7bb;
    background: #232323;
    border-radius: .4rem;
    width: 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-wrap: nowrap;
}
.depositWindows .channelContainer .channelItem.active{
    box-shadow: inset 0 0 0 1px #8399ac80;
}
.depositWindows .channelContainer .channelItem .pixInfo{
    color: #9e9e9e;
}
.depositWindows .channelContainer .channelItem .pixImg{
    height: 2.2rem;
    margin-right: 1rem;
}
.depositWindows .channelContainer .channelItem span{
    white-space: nowrap;
}
.depositWindows .depositMain input{
    text-indent: 13rem;
    color: var(--blue);
    padding: .8rem 0;
}
.depositWindows .depositMain .tips-close{
    left: 1rem;
    top: 50%;
    color: var(--blue);
    transform: translate(0,-50%);
}
.depositWindows .depositMain .deposit ul{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.depositWindows .depositMain .deposit li{
    position: relative;
    border-radius: .3rem;
    width: 30%;
    background-color: var(--gray2);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.depositWindows .depositMain .deposit li.active{
    background: var(--greenGradient);
}
.depositWindows .depositMain .deposit li.hot::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2rem;
    height: 2rem;
    background: url('../images/icon/hot.png') no-repeat center center / contain;
}
.depositWindows .depositMain .deposit .amountContent{
    display: flex;
    align-items: center;
}
.depositWindows .depositMain .deposit .currencyIcon{
    height: .9rem;
}
.depositWindows .depositMain .deposit span{
    color: var(--fff);
    font-size: 1rem;
}
.depositWindows .depositMain .deposit .amountTips{
    font-size: .7rem;
    color: #9e9e9e;
}
.depositWindows .depositMain .deposit li.active .amountTips{
    color: var(--fff);
}
.depositWindows .depositMain .depositBtn{
    background: var(--greenGradient);
    color: var(--fff);
    border: none;
    opacity: .4;
    border-radius: 2px;
    padding: 0.56rem 0;
}
.depositWindows .depositMain .depositBtn.active{opacity: 1;}
.depositWindows .tips li{
    color: #7e7e7e;
    text-indent: -1rem;
}
.depositWindows .tips li span{
    font-weight: bold;
    color: #64d23e;
}
</style>
