<template>
    <header class="headerBack d-flex justify-content-between align-items-center px-2">
        <h2 class="title">Promoções</h2>
        <div class="closeBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
        </div>
    </header>
    <div class="main container-fluid">
        <ul class="px-0">
            <li class="mt-4">
                <a href="#">
                    <img class="w-100" src="./images/promotions/promotions_01.jpg" alt="">
                </a>
            </li>
            <li class="mt-4">
                <a href="#">
                    <img class="w-100" src="./images/promotions/promotions_02.jpg" alt="">
                </a>
            </li>
            <li class="mt-4">
                <a href="#">
                    <img class="w-100" src="./images/promotions/promotions_03.jpg" alt="">
                </a>
            </li>
            <li class="mt-4">
                <a href="#">
                    <img class="w-100" src="./images/promotions/promotions_04.jpg" alt="">
                </a>
            </li>
            <li class="mt-4">
                <a href="#">
                    <img class="w-100" src="./images/promotions/promotions_05.jpg" alt="">
                </a>
            </li>
            <li class="mt-4">
                <a href="#">
                    <img class="w-100" src="./images/promotions/promotions_06.jpg" alt="">
                </a>
            </li>
            <li class="mt-4">
                <a href="#">
                    <img class="w-100" src="./images/promotions/promotions_07.jpg" alt="">
                </a>
            </li>
            <li class="mt-4">
                <a href="#">
                    <img class="w-100" src="./images/promotions/promotions_08.jpg" alt="">
                </a>
            </li>
            <li class="mt-4">
                <a href="#">
                    <img class="w-100" src="./images/promotions/promotions_09.jpg" alt="">
                </a>
            </li>
        </ul>
    </div>
</template>

<style>
    .app{
        background-color: var(--black2);
        height: 100vh;
        padding-top: 4rem;
    }
    .main ul{
        height: 100vh;
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        overflow-y: auto;
        padding-bottom: 11rem;
    }
</style>