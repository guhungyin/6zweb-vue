<template>
    <div class="modal fade commissionRulesModal" id="commissionRulesModal" tabindex="-1" aria-labelledby="commissionRulesModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5 class="modal-title" id="totalModalLabel">Regras de cálculo de comissão</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#98a7b5" class="bi bi-x closeBtn" viewBox="0 0 16 16" data-bs-dismiss="modal" aria-label="Close">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                    </svg>
                </div>
                <div class="modal-body">
                    <div class="topBox p-2">
                    <div class="detail mb-3">
                        <div class="headWrap me-4">
                        <div class="headBox">
                            <img src="@/assets/images/commissionRules/avatar_01.jpg" class="w-100">
                        </div>
                        <div class="level">A</div>
                        </div>
                        <div class="detailDesc">
                        <div class="descTitle"> O C3 é poderoso e também possui </div>
                        <div class="descNum">
                            <span>110</span>
                            /million
                        </div>
                        </div>
                    </div>
                    <div class="fundList">
                        <div class="listItem mb-2">
                        Desempenho total 3,31M, Bônus total do agente 
                        <span>2500</span>
                        </div>
                        <div class="listItem mb-2">
                        Desempenho de subordinado 180K, Contribuiu 
                        <span>1980</span>
                        </div>
                        <div class="listItem mb-2">
                        Outro desempenho 3,13M, Contribuir 
                        <span>520</span>
                        </div>
                    </div>
                    </div>
                    <div class="position-relative centerBox mb-3">
                    <div class="item item1">
                        <div class="fundDesc">
                        Contribuição de B1
                        <span>1320</span>
                        </div>
                        <div class="arrow my-2"></div>
                        <div class="fundDesc">
                        Outras contribuições de C1 e C2 
                        <span>520</span>
                        </div>
                    </div>
                    <div class="item item2">
                        <div class="arrow my-2"></div>
                        <div class="fundDesc">
                        Contribuir para A: 
                        <span>440</span>
                        </div>
                    </div>
                    <div class="item item3">
                        <div class="fundDesc">
                        Contribuição de B3
                        <span>220</span>
                        </div>
                        <div class="arrow my-2"></div>
                        <div class="fundDesc">
                        Outras contribuições de C3 
                        <span>0</span>
                        </div>
                    </div>
                    </div>
                    <div class="row layer mb-3">
                    <div class="col-4 layerItem">
                        <div class="headWrap mb-2">
                        <div class="headBox">
                            <img src="@/assets/images/commissionRules/avatar_02.jpg" alt="" class="w-100">
                        </div>
                        <div class="level">B1</div>
                        </div>
                        <div class="descTxt">
                        Subagente ganha, geralmente 
                        <span><br>70</span>
                        /10K 
                        </div>
                        <hr>
                        <div class="descFund">Apostas válidas 120K</div>
                    </div>
                    <div class="col-4 layerItem">
                        <div class="headWrap mb-2">
                        <div class="headBox">
                            <img src="@/assets/images/commissionRules/avatar_03.jpg" alt="" class="w-100">
                        </div>
                        <div class="level">B2</div>
                        </div>
                        <div class="descTxt">
                        B2 não tem subordinados, por isso não tem lucros 
                        </div>
                        <hr>
                        <div class="descFund">Apostas válidas 40K</div>
                    </div>
                    <div class="col-4 layerItem">
                        <div class="headWrap mb-2">
                        <div class="headBox">
                            <img src="@/assets/images/commissionRules/avatar_04.jpg" alt="" class="w-100">
                        </div>
                        <div class="level">B3</div>
                        </div>
                        <div class="descTxt">
                        Muito bem subagente, ganhou 
                        <span><br>110</span>
                        /10K 
                        </div>
                        <hr>
                        <div class="descFund">Apostas válidas 20K</div>
                    </div>
                    </div>
                    <div class="position-relative arrowBox mb-2">
                    <div class="arrow arrow1"></div>
                    <div class="arrow arrow2"></div>
                    <div class="arrow arrow3"></div>
                    </div>
                    <div class="row fundLayer mb-2">
                    <div class="col-4">
                        <div>Contribuir para A:</div>
                        <span>400</span>
                        <div>Contribuir para B1:</div>
                        <span>700</span>
                    </div>
                    <div class="col-4">
                        <div>Contribuir para A:</div>
                        <span>120</span>
                        <div>Contribuir para B1:</div>
                        <span>210</span>
                    </div>
                    <div class="col-4">
                        <div>Contribuir para A:</div>
                        <span>0</span>
                        <div>Contribuir para B3:</div>
                        <span>33000</span>
                    </div>
                    </div>
                    <div class="row layer mb-3">
                    <div class="col-4 layerItem">
                        <div class="headWrap mb-2">
                        <div class="headBox">
                            <img src="@/assets/images/commissionRules/avatar_05.jpg" alt="" class="w-100">
                        </div>
                        <div class="level">C1</div>
                        </div>
                        <div class="descTxt">
                        C1 não tem subordinados, por isso não tem lucros 
                        </div>
                        <hr>
                        <div class="descFund">Apostas validas 100K</div>
                    </div>
                    <div class="col-4 layerItem">
                        <div class="headWrap mb-2">
                        <div class="headBox">
                            <img src="@/assets/images/commissionRules/avatar_06.jpg" alt="" class="w-100">
                        </div>
                        <div class="level">C2</div>
                        </div>
                        <div class="descTxt">
                        C2 não tem subordinados, por isso não tem lucros 
                        </div>
                        <hr>
                        <div class="descFund">Apostas válidas 30K</div>
                    </div>
                    <div class="col-4 layerItem">
                        <div class="headWrap mb-2">
                        <div class="headBox">
                            <img src="@/assets/images/commissionRules/avatar_07.jpg" alt="" class="w-100">
                        </div>
                        <div class="level">C3</div>
                        </div>
                        <div class="descTxt">
                        C3 não tem subordinados, por isso não tem lucros 
                        </div>
                        <hr>
                        <div class="descFund">Apostas válidas 3000K</div>
                    </div>
                    </div>
                    <div class="ruleDesc">
                    <p>Por exemplo:</p>
                    <p> Neste website o bónus do agente é calculado por apostas. Por exemplo, se as apostas forem 10-200000, a taxa de bónus correspondente será 70/10000, e se as apostas forem superiores a 3000000, o bónus de agente é 110/10000. A é o agente do website, ele recruta B1, B2 e B3 como seus agentes e B1 também recruta C1 e C2 como seus agentes. B2 não tem agentes e B3 tem apenas um agente C3. Alguns dias depois, a aposta efetiva do próprio B1 é de 120.000, a aposta efetiva de B2 é de 40.000, as apostas efetivas de B3 são 20.000, as apostas efetivas do C1 são 100.000, as apostas efetivas do C2 são 30.000, C3 Eu tenho 3 milhões de apostas eficazes, Em seguida, o desempenho total de B1 vem de 130.000 de C1 e C2, e a taxa de retorno da comissão correspondente é 70/10.000; B2 não tem desempenho subordinado 0; a taxa de retorno da comissão é 110/10.000; a tem 180.000 do Equipe direta e 3,13 milhões de outras equipes, com um desempenho total de 3,31 milhões, e a taxa de retorno correspondente é 110/10.000. </p>
                    <p>Por conseguinte, o bónus é calculado da seguinte forma:</p>
                    <p> 1. Equipa direta: refere-se aos membros do desenvolvimento vertical, que são coletivamente chamados de equipa direta. </p>
                    <p> (1) B1, B2, B3 contribuem para A: (120000+40000+20000)x110/10000=1980. </p>
                    <p> (2) C1 e C2 contribuem para B1:(100000+30000)x70/10000=910. </p>
                    <p>(3) C3 contribui para B3: 3 milhões x 110/10000=33000.</p>
                    <p> 2. Outras equipas: refere-se aos membros do desenvolvimento de subordinados, subordinados, etc., que são coletivamente chamados de outras equipas; porque este sistema pode desenvolver subordinados indefinidamente, para melhor compreensão, este artigo apenas toma como exemplo uma estrutura de 2 níveis. </p>
                    <p> (1) De C1 e C2: Visto que o desempenho total de B1 é de 130000, tem apenas uma taxa de desconto de 70/10000, enquanto que o desempenho total de A é de 3,31 milhões, e tem uma taxa de desconto de 110/10000. Então a diferença de desconto entre A e B1 é de: 110-70=40/100000, esta diferença é a parte contribuída por C1 e C2 para A, portanto C1 e C2 contribuem para A: (100000+30000)×40/10000=520. </p>
                    <p> 2. Outras equipas: refere-se aos membros do desenvolvimento de subordinados, subordinados, etc., que são coletivamente chamados de outras equipas; porque este sistema pode desenvolver subordinados indefinidamente, para melhor compreensão, este artigo apenas toma como exemplo uma estrutura de 2 níveis. </p>
                    <p>3. Resumo:</p>
                    <p> (1) C3 é poderoso, indiretamente permite que todo o desempenho de A desfrute de uma proporção maior de retornos da comissão. </p>
                    <p> (2) B2 pode ser preguiçoso, e não tem vantagem se não houver desenvolvimento de subordinados. </p>
                    <p> (3) Apesar de B3 se ter juntado relativamente tarde e pertencer aos subordinados de A, o seu subordinado C3 é poderoso, permitindo que B3 desfrute diretamente da mais alta taxa de desconto, e A não pode ganhar diretamente a diferença de B3. Por isso, de quem é a posição de B3 quando este se junta? Os benefícios dos subordinados, independentemente do nível em que se encontrem, nunca serão afetados, deixarão de sofrer as perdas de outros subordinados, e o seu desenvolvimento não será restringido. </p>
                    <p> (4) Este é um modelo de agência absolutamente justo, e não prejudicará sempre quem se juntar mais tarde. </p></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .commissionRulesModal{
        position: absolute;
    }
    .modal-fullscreen{
        max-width: 34rem;
    }
    .modal-body::-webkit-scrollbar{display: none;}
    .commissionRulesModal .modal-header{
        background-color: #17181c;
        color: #98a7b5;
    }
    .commissionRulesModal .modal-header .modal-title{
        font-size: .8rem;
    }
    .commissionRulesModal .modal-body{
        background-color: #151d28;
        font-size: .9rem;
    }
    .commissionRulesModal .topBox{
        background: #151d28;
        border: 2px solid #1d2532;
        display: flex;
        flex-direction: column;
    }
    .commissionRulesModal .topBox .detail{
        display: flex;
        align-items: center;
    }
    .commissionRulesModal .topBox .detail .headWrap{
        position: relative;
        width: 5.2rem;
        height: 5.2rem;
    }
    .commissionRulesModal .topBox .detail .headWrap .headBox{
        border: 1px solid #ecae3d;
        border-radius: 50%;
        overflow: hidden;
    }
    .commissionRulesModal .topBox .detail .headWrap .level{
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        bottom: 0;
        right: 0;
        color: #fff;
        font-size: .9rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ecae3d;
    }

    .commissionRulesModal .topBox .detail .detailDesc{
        display: flex;
        flex-direction: column;
        color: #5d6578;
    }
    .commissionRulesModal .topBox .detail .detailDesc .descNum span{
        color: #ecae3d;
    }
    .commissionRulesModal .topBox .fundList{
        color: var(--fff);
    }
    .commissionRulesModal .topBox .fundList .listItem{
        text-align: center;
    }
    .commissionRulesModal .topBox .fundList .listItem span{
        color: #ecae3d;
    }


    .commissionRulesModal .centerBox{
        height: 8.5rem;
    }
    .commissionRulesModal .centerBox .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
    }
    .commissionRulesModal .centerBox .item.item1,
    .commissionRulesModal .centerBox .item.item3{
        width: 10rem;
    }
    .commissionRulesModal .centerBox .item.item1{
        bottom: 14%;
        transform: rotate(330deg);
    }
    .commissionRulesModal .centerBox .item.item2{
        bottom: 0;
        left: 50%;
        transform: translate(-50%,0);
    }
    .commissionRulesModal .centerBox .item.item3{
        bottom: 14%;
        transform: rotate(30deg);
        right: 0;
    }
    .commissionRulesModal .centerBox .item .arrow{
        background-color: #ecae3d;
        border-radius: 5rem;
        width: 7rem;
        height: .4rem;
        position: relative;
    }
    .commissionRulesModal .centerBox .item .arrow::after{
        content: '';
        position: absolute;
        top: 50%;
        right: -14%;
        border-top: .6rem solid rgba(0, 0, 0, 0);
        border-bottom: .6rem solid rgba(0, 0, 0, 0);
        border-left: 1.3rem solid #ecae3d;
        border-radius: .2rem;
        transform: translate(0,-50%);
    }
    .commissionRulesModal .centerBox .item.item2 .arrow{
        transform: rotate(-90deg);
        width: 4.2rem;
        position: absolute;
        bottom: 3.5rem;
    }
    .commissionRulesModal .centerBox .item.item3 .arrow{
        transform: rotate(180deg);
    }
    .commissionRulesModal .centerBox .item .fundDesc{
        text-align: center;
        color: var(--fff);
        font-size: .8rem;
    }
    .commissionRulesModal .centerBox .item .fundDesc span{
        color: #ecae3d;
    }
    .commissionRulesModal .layer{
        color: #5d6578;
    }
    .commissionRulesModal .layer .layerItem{
        position: relative;
    }
    .commissionRulesModal .layer .layerItem::before{
        content: '';
        position: absolute;
        width: 86%;
        height: 82%;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        box-shadow: inset 0 0 0 1px #3c434c;
        border-radius: 0.5rem;
    }
    .commissionRulesModal .layer .headWrap{
        position: relative;
        width: 5.2rem;
        height: 5.2rem;
        margin: 0 auto;
    }
    .commissionRulesModal .layer .headWrap .headBox{
        border: 1px solid #1761e6;
        border-radius: 50%;
        overflow: hidden;
    }
    .commissionRulesModal .layer .headWrap .level{
        background-color: #1761e6;
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        bottom: 0;
        right: 0;
        color: #fff;
        font-size: .9rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .commissionRulesModal .layer .descTxt{
        text-align: center;
    }
    .commissionRulesModal .layer .descTxt span{
        color: #ecae3d;
    }
    .commissionRulesModal .layer .descFund{
        color: var(--fff);
        text-align: center;
    }
    .commissionRulesModal .arrowBox{
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 7rem;
    }
    .commissionRulesModal .arrowBox .arrow{
        position: relative;
        background-color: #ecae3d;
        border-radius: 5rem;
        height: .4rem;
    }
    .commissionRulesModal .arrowBox .arrow.arrow1{
        width: 3rem;
        transform: rotate(-90deg);
    }
    .commissionRulesModal .arrowBox .arrow.arrow2{
        width: 7rem;
        transform: rotate(208deg);
    }
    .commissionRulesModal .arrowBox .arrow.arrow3{
        width: 3rem;
        transform: rotate(-90deg);
    }
    .commissionRulesModal .arrowBox .arrow::after{
        content: '';
        position: absolute;
        top: 50%;
        right: -14%;
        border-top: .6rem solid rgba(0, 0, 0, 0);
        border-bottom: .6rem solid rgba(0, 0, 0, 0);
        border-left: 1.3rem solid #ecae3d;
        border-radius: .2rem;
        transform: translate(0,-50%);
    }
    .commissionRulesModal .fundLayer{
        color: var(--fff);
        text-align: center;
        font-size: .7rem;
    }
    .commissionRulesModal .fundLayer span{
        color: #ecae3d;
        font-size: .9rem;
    }
    .commissionRulesModal .ruleDesc{
        color: var(--fff);
    }
</style>