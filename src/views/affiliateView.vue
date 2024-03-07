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
        <h2 class="title">Afiliado - Ganhe R$10000 por mês</h2>
        <CloseBtn></CloseBtn>
    </div>
    <div class="container-fluid">
        <div class="tabs mb-2">
            <router-link to="/affiliate/summary" class="tabItem px-1 active">PAINEL</router-link>
            <router-link to="/affiliate/referrals" class="tabItem px-1">REFERÊNCIAS</router-link>
            <router-link to="/affiliate/report" class="tabItem px-1">RELATÓRIO</router-link>
            <router-link to="/affiliate/payments" class="tabItem px-1">PAGAMENTOS</router-link>
            <router-link to="/affiliate/faq" class="tabItem px-1">FAQ</router-link>
            <div class="tabItem px-1" data-bs-toggle="modal" data-bs-target="#commissionRulesModal">TUTORIAL</div>
        </div>
        <router-view></router-view>
      </div>
</template>
<style scoped>
    .app .headerBack{
        background-color: #009d80;
        z-index: 1;
    }
    .app .headerBack .title{
        color: #ffe800;
    }
    .container-fluid{
        max-width: 34rem;
        background-color: #ededed;
        padding-bottom: 5rem;
    }
    .tabs{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        overflow-x: auto;
        height: 2.2rem;
    }
    .tabs::-webkit-scrollbar{display: none;}
    .tabs .tabItem{
        font-size: .8rem;
        color: #808080;
        flex: 1;
        display: flex;
        align-items: center;
    }
    .tabs .tabItem.active{
        box-shadow: inset 0 -1px #009d80;
    }
</style>