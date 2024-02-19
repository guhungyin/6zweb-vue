<template>
    <header class="headerBack d-flex justify-content-between align-items-center px-2">
        <h2 class="title d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffe800" class="bi bi-chevron-left me-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
            Cashback 25%
        </h2>
        <div class="moneyBox">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFF" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
            <span>0.00</span>
            BRL
        </div>
    </header>
    <div class="main container-fluid">
        <div class="vipCard mb-3 p-3">
            <div class="main">
                <div class="cashMain">
                    <img src="" alt="">
                    <span class="current">13% Cashback</span>
                    <span class="max">Max:25%</span>
                </div>
                <div class="vipMaim vip1">
                    <span class="iconfont icon-vip"></span>
                    <span class="vipNum">v1</span>
                </div>
            </div>
            <div class="progress van-progress">
                <span class="van-progress__portion"></span>
            </div>
            <div class="progressTips"> 5000 Apostas to VIP2 </div>
        </div>
        <div class="vipCash mb-3 p-3">
            <div class="img">
                <img src="/img/M-4.328863a6.png" alt="" class="cashImg">
                <img src="/img/free.b8fcf912.png" alt="" class="free">
            </div>
            <div class="main">
                <div class="title">Seu Cashback Semanal</div>
                <p>Você ganhará ??? BRL em cashback jogando esta semana.</p>
                <div class="time">Periodo 2024-02-12 00:00:00~2024-02-18 23:59:59</div>
                <div class="button"> Reivindicar Agora </div>
                <div class="extTime">Tempo de reivindicação 2024-02-19 06:00:00~2024-02-23 23:59:59</div>
            </div>
        </div>
        <div class="vipList mb-3 p-3">
            <h3> Status VIP Cashback </h3>
            <table>
                <thead>
                    <tr>
                        <th>VIP</th>
                        <th>APOSTA</th>
                        <th>CASHBACK</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>0+ BRL</td>
                        <td>13%</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>5000+ BRL</td>
                        <td>14%</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>20000+ BRL</td>
                        <td>15%</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>80000+ BRL</td>
                        <td>16%</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>400000+ BRL</td>
                        <td>17%</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>1200000+ BRL</td>
                        <td>18%</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>5000000+ BRL</td>
                        <td>19%</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>15000000+ BRL</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>30000000+ BRL</td>
                        <td>21%</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>60000000+ BRL</td>
                        <td>25%</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="vipRules">
            <h3>TERMOS E REGRAS</h3>
            <ul class="p-0">
                <li>1. O cashback semanal é dado como recompensa todas as semanas. </li>
                <li>2. O período sobre o qual é calculado o cashback semanal vai de segunda-feira às 00:00 a domingo às 23:59. </li>
                <li>3. Horário de solicitação do cashback: De segunda-feira da próxima semana 06:00 a sexta-feira 23:59, expirará se não for resgatado.</li>
                <li>4. O número de Perdas de dinheiro real multiplicado pela % de reembolso é o reembolso/cashback da semana.</li>
                <li>5. Caso você não tenha apostado durante o período em que o cashback estava ativo ou se seus ganhos da última semana ou ganhos totais são maiores que suas perdas, você não receberá cashback.</li>
                <li>6. Limite máximo de recompensa de cashback por pessoa por semana: 10000 BRL</li>
                <li>7. O valor do cashback pode ser sacar diretamente ou utilizado para continuar jogando</li>
            </ul>
        </div>
    </div>
</template>
<style>
    .app{
        padding-top: 4rem;
        background-color: #ededed ;
    }
    .headerBack{background-color: var(--greenBg);}
    .headerBack .title{color: var(--yellow);}
    .headerBack .moneyBox{color: var(--fff);}
    .vipCard{background-color: var(--yellow);}
    .vipCash{background-color: var(--fff);}
    .vipList{background-color: var(--fff);}
</style>