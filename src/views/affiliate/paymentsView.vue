<template>
    <div class="main px-2 paymentContent">
        <!-- 表單 -->
        <table class="table">
        <thead>
            <tr>
            <th class="align-middle py-2">Data</th>
            <th class="align-middle py-2">Detalhe</th>
            <th class="align-middle py-2">Comissão</th>
            <th class="align-middle py-2">Status</th>
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
            </tr> -->
        </tbody>
        </table>
    </div>
</template>
<style scoped>
    .paymentContent{
        background-color: var(--fff);
        height: calc(100vh - 12rem);
        border-radius: .3rem;
    }
    .paymentContent table{
        font-size: .9rem;
    }
    .paymentContent table th{
        color: #808080;
        font-weight: bold;
        font-size: .8rem;
        padding: 0;
    }
    .paymentContent .noData{
        text-align: center;
        font-size: .9rem;
        color: #969799;
        border: none;
        display: none;
    }
    .paymentContent .noData.active{display: table-cell;}
</style>