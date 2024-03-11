<template>
    <div class="main px-3 referContent">
        <div class="mb-2 pt-3">
        <div class="time px-2 border d-flex">
            <div class="dateTime">2024-03-01</div>
            <div class="iconBox">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#aaa" class="bi ms-1 bi-calendar4-week" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#aaa" class="bi ms-1 bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
            </div>
        </div>
        </div>
        <!-- 表單 -->
        <table class="table mb-3">
        <thead class="text-center">
            <tr>
            <th class="align-middle pb-2">#</th>
            <th class="align-middle pb-2">Conta</th>
            <th class="align-middle pb-2">Apostas(R$)</th>
            <th class="align-middle pb-2">Aposta equipe(R$)</th>
            <th class="align-middle pb-2">Comissão</th>
            </tr>
        </thead>
        <tbody>
            <!-- 無資料 -->
            <tr>
            <td class="noData pt-3 active" colspan="5">Opa! Ainda não há dados!</td>
            </tr>
            <!-- 有資料 -->
            <!-- <tr>
            <td>2024/03/06</td>
            <td>ccccc</td>
            <td>99,999</td>
            <td>ccccc</td>
            <td>ccccc</td>
            </tr> -->
        </tbody>
        </table>
        <div class="total">
        <div class="d-flex flex-column align-items-center">
            <div class="num">R$ 0</div>
            <span>Aposta válidas em equipe[0]</span>
        </div>
        <div class="d-flex flex-column align-items-center mx-3">
            <div class="num">R$ 0</div>
            <span>Comissão</span>
        </div>
        </div>
    </div>
</template>
<style scoped>
    .referContent{
        background-color: var(--fff);
        height: calc(100vh - 12.5rem);
        border-radius: .3rem;
    }
    .referContent .time{
        width: 43%;
        height: 1.9rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: .8rem;
    }
    .referContent .total{
        display: flex;
        justify-content: flex-end;
    }
    .referContent .total .num{
        font-size: 1.3rem;
        font-weight: bold;
    }
    .referContent .total span{
        color: grey;
        font-size: .8rem;
    }
    .referContent table{
        font-size: .9rem;
    }
    .referContent table th{
        color: #808080;
        font-weight: bold;
        font-size: .8rem;
        padding: 0;
    }
    .referContent .noData{
        text-align: center;
        font-size: .9rem;
        color: #969799;
        border: none;
        display: none;
    }
    .referContent .noData.active{display: table-cell;}
</style>