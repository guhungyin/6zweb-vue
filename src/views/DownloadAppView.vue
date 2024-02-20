<script>
    import CloseBtn from '../components/CloseBtn.vue';
    export default {
        components: {
            CloseBtn
        },
    }
</script>
<template>
    <div class="headerBack d-flex justify-content-between align-items-center px-2">
        <h2 class="title">6Z APP</h2>
        <CloseBtn></CloseBtn>
    </div>
    <div class="container-fluid mt-3 downloadApp">
        <div class="downloadContent mb-3">
        Este jogo é destinado a adultos maiores de 18 anos e é destinado apenas para fins de entretenimento. Não há nenhuma conexão necessária entre os resultados no jogo social e os resultados na vida real. Você pode se divertir jogando de graça, com compras opcionais incluídas no jogo. Faça o download do jogo e comece agora! 
        </div>
        <div class="downloadTitle mb-4">
        ¡Descárgate el juego
        <br>
        y empieza ya!
        </div>
        <a class="downloadBtn mx-auto mb-3" download="/6Z_v1.apk">BAIXAR AGORA (3.7MB)</a>
        <div class="tip_b mb-3">Requer Android 4.4 ou acima</div>
        <div class="upIcon text-center mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ffffff66" class="bi bi-chevron-double-up " viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"/>
            <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
        </svg>
        </div>
    </div>
    <img src="../assets/images/download/downloadBtn.png" class="w-100 mb-5" alt="">
</template>
<style scoped>
    .app{
        padding-top: 4rem;
    }
    .downloadApp{
        background: repeating-linear-gradient(-45deg,#2a2a2a,#2a2a2a .02rem,rgba(0,0,0,0) 0,rgba(0,0,0,0) .08rem);
    }
    .downloadContent{
        font-weight: 700;
        color: #fcde26;
        font-size: 1.2rem;
    }
    .downloadTitle{
        color: var(--primary);
        text-align: center;
        font-size: 1.2rem;
        font-weight: 700;
    }
    .downloadBtn{
        border-radius: .2rem;
        height: 3rem;
        width: 20rem;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: var(--fff);
        background: linear-gradient(180deg,#5519cd,#9449ff);
    }
    .tip_b{
        text-align: center;
        font-size: .8rem;
        font-weight: 700;
        color: #919191;
    }
    .upIcon{
        
    }
</style>