<script>
    import '@/assets/css/deposit.css'
    import CloseBtn from '../components/CloseBtn.vue';
    export default {
        components: {
            CloseBtn
        },
    }
</script>

<template>
    <div class="headerBack d-flex justify-content-between align-items-center px-2">
        <h2 class="title">Ajuda</h2>
        <CloseBtn></CloseBtn>
    </div>
    <div class="container-fluid mt-3 helpWindows pb-5">
        <div class="">
        <h2>Como criar uma Conta</h2>
        <ul>
            <li class="mb-2">
            Abra seu navegador e digite: 
            <span class="link">6z.com</span>
            </li>
            <li class="mb-2">
            Quando a página 6z abrir, clique em 
            <span class="link">“Cadastre-se”</span>
            </li>
            <li class="mb-2">
            Insira seu número e senha de seis ou mais caracteres e selecione "Criar Usuário" para receber um PIN por sms.
            </li>
            <li class="mb-2">
            Insira o PIN e sua conta será ativada.
            </li>
        </ul>
        <p>
            Obs.: Selecione uma senha que não vai esquecer, pois ela será utilizada para visitar
            <span class="link">6z.com</span>
        </p>
        </div>
        <hr>
        <div class="">
        <h2>Como fazer uma Aposta</h2>
        <h2>WEB</h2>
        <ul >
            <li class="mb-2">
            Abra seu navegador e digite: 
            <span class="link">6z.com</span>
            </li>
            <li class="mb-2">Quando a página 6z abrir, clique em login.</li>
            <li class="mb-2">Insira seu número e senha para entrar na sua conta.</li>
            <li class="mb-2">Selecione um jogo e clique no botão de jogar.</li>
            <li class="mb-2">Você verá a interface principal do jogo.</li>
            <li class="mb-2">Insira sua aposta desejada.</li>
            <li class="mb-2">Clique em 
            <b>“Fazer aposta”</b>
            </li>
        </ul>
        </div>
        <hr>
        <div class="">
        <h2>Como Verificar Minhas Apostas e Conta Declaração</h2>
        <ul>
            <li class="mb-2">
            Abra seu navegador e digite: 
            <span class="link">6z.com</span>
            </li>
            <li class="mb-2">Quando a página 6z abrir, clique em login.</li>
            <li class="mb-2">Digite seu número e senha para acessar sua conta.</li>
            <li class="mb-2">Clique em "Perfil" no menu abaixo.</li>
            <li class="mb-2">Clique em "Minhas Apostas"</li>
            <li class="mb-2">Quando a página aparecer, você verá o relatório</li>
        </ul>
        </div>
        <hr>
        <div>
        <h2>Esqueci minha senha</h2>
        <ul>
            <li class="mb-2">
            Abra seu navegador e digite: 
            <span class="link">6z.com</span>
            </li>
            <li class="mb-2">Quando a página 6z abrir, clique em login.</li>
            <li class="mb-2">Insira seu número de telefone e clique em "esqueci minha senha"</li>
            <li class="mb-2">Você receberá um sms com um PIN para resetar.</li>
            <li class="mb-2">Insira o PIN e escolha sua nova senha.</li>
        </ul>
        </div>
        <hr class="mb-5">
    </div>
</template>
<style scoped>
    .app{
        padding-top: 4rem;
    }
    .helpWindows{
        color: #c0c0c0;
    }
    .helpWindows h2{
        color: var(--primary);
        font-size: 1.1rem;
        font-weight: bold;
    }
    .helpWindows li{
        list-style-type:decimal;
    }
    .helpWindows .link{
        color: #7aaaf1;
    }
    .helpWindows p{
        font-weight: bold;
        font-size: .9rem;
    }
</style>