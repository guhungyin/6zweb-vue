<script>
    import CommitteeModal from '../../components/affiliate/CommitteeModal.vue'
    export default {
        components:{
            CommitteeModal
        }
    }
</script>
<template>
    <div class="fqaContent p-2 mb-3">
        <div class="content mb-3">
        <h2 class="mb-2 pb-2">
            O que é o programa de afiliados 6Z?
        </h2>
        <div class="text mb-2">6Z Afiliados é um programa onde oferecemos a você a oportunidade de ganhar dinheiro todos os dias, simplesmente nos dando a chance de receber mais jogadores.</div>
        </div>
        <div class="content mb-3">
        <h2 class="mb-2 pb-2">
            QUANTO CUSTA PARA PARTICIPAR?
        </h2>
        <div class="text mb-2">Absolutamente nada. É totalmente gratuito.</div>
        </div>
        <div class="content mb-3">
        <h2 class="mb-2 pb-2">
            Posso obter benefícios mesmo se não tiver um site? 
        </h2>
        <div class="text mb-2">Claro que pode. Podemos fornecer todas as ferramentas de marketing de que você precisa para promover a 6Z offline nas mídias sociais ou por e-mail.</div>
        </div>
        <div class="content mb-3">
        <h2 class="mb-2 pb-2">
            QUANTO EU GANHO? 
        </h2>
        <div class="text mb-2">Ganhe dinheiro indicando amigos para a 6z, você ganha sempre que um convidado seu realiza uma aposta!</div>
        <div class="linkBtn mb-1" data-bs-toggle="modal" data-bs-target="#committeeModal">Regras de recompensa da comissão</div>
        <div class="linkBtn mb-1" data-bs-toggle="modal" data-bs-target="#commissionRulesModal">Regras de cálculo de comissão</div>
        </div>
        <div class="hintTitle mb-3">Ganhe dinheiro indicando amigos para a 6z, você ganha sempre que um convidado seu realiza uma aposta!</div>
        <div class="imgContent mb-3">
        <img src="../../assets/images/icon/money2.png" width="73" alt="">
        <span>Comissão pode ser</span>
        <input type="range" class="rangeBar ms-auto">
        </div>
        <div class="relationSchema">
        <div class="mb-2 text-center fw-bold">Desenvolvimento ilimitado de indicados</div>
        <img src="../../assets/images/icon/group.png" alt="" class="w-100 mb-5">
        <ul>
            <li class="mb-2">Você receberá uma porcentagem de comissão diferente toda vez que um jogador indicado por você fizer uma aposta, 
            <span>ganhar ou perder</span>.
            </li>
            <li>O sistema calcula a comissão a cada 24 horas.</li>
        </ul>
        </div>
        <div class="content mb-3">
        <h2 class="mb-2 pb-2">
            Definição
        </h2>
        <div class="text mb-2">Inscrições - Número de usuários registrados</div>
        <div class="text mb-2">Novos Jogadores - Novos jogadores pagantes entre os usuários registrados de hoje</div>
        <div class="text mb-2"> Aposta válidas em equiper[num] - Total de valor de apostas válidas provenientes de indicações e contribuições de suas equipes. num - Número total de indicações e membros de suas equipes que contribuíram com apostas válidas.</div>
        </div>
    </div>
    <CommitteeModal></CommitteeModal>
</template>
<style scoped>
    .fqaContent{
        background-color: var(--fff);
        border-radius: .5rem;
        font-size: .9rem;
        overflow-y: auto;
        height: calc(100vh - 7.5rem);
    }
    .fqaContent::-webkit-scrollbar{display: none;}
    .fqaContent h2{
        color: #383838;
        font-size: 1.2rem;
        font-weight: bold;
        border-bottom: 1px solid #bdbdbd;
    }
    .fqaContent .text{
        color: grey;
    }
    .fqaContent .linkBtn{
        color: #009d80;
    }
    .fqaContent .imgContent{
        display: flex;
        align-items: center;
    }
    .fqaContent .imgContent span{
        color: red;
    }
    .fqaContent .relationSchema ul{
        list-style: decimal ;
    }
    .fqaContent .relationSchema li span{
        color: red;
    }
</style>