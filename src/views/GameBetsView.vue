<template>
    <div class="headerBack d-flex justify-content-between align-items-center px-2">
        <h2 class="title">Minhas Apostas de Jogo</h2>
        <div class="closeBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
        </div>
    </div>
    <div class="container-fluid betsWindows">
        <div class="noData">
            <img src="./images/icon/nodata.svg" alt="">
            <span class="mt-3">Sem apostas</span>
        </div>
    </div>
</template>
<style>
#app{
    padding-top: 4rem;
    background-color: #1f1f1f;
    height: 100vh;
}
.noData{
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #787878;
}
.noData img{
    width: 3.5rem;
}
</style>