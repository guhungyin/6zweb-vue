<template>
    <div class="headerBack d-flex justify-content-between align-items-center px-2">
        <h2 class="title">Ajuda</h2>
        <div class="closeBtn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg>
        </div>
    </div>
    <div class="container-fluid mt-3 helpWindows">
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
        <div class="">
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
        <hr>
    </div>
</template>
<style>
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