<script>
    import CloseBtn from '../components/CloseBtn.vue';
    export default {
        data() {
            return {
                imgData:[
                    {imgUrl:'https://images.hibigwin.com/6z/202402/EZpgEYGszUcfSow.jpg'},
                    {imgUrl:'https://images.hibigwin.com/6z/202402/eJgaWAAVMNpKFJE.jpg'},
                    {imgUrl:'https://images.hibigwin.com/6z/202402/wuDqhIlnpLYYTsg.jpg'},
                    {imgUrl:'https://images.hibigwin.com/6z/202402/XxBnOQgbgJuYyXH.jpg'},
                    {imgUrl:'https://images.hibigwin.com/6z/202402/scVxQMhvQApGWHQ.jpg'},
                    {imgUrl:'https://images.hibigwin.com/6z/202402/HcPYcesCOPOrSDy.jpg'},
                    {imgUrl:'https://images.hibigwin.com/6z/202402/rvnogttVsNKHRIk.jpg'},
                    {imgUrl:'https://images.hibigwin.com/6z/202402/OcPxQWbYrylUfit.jpg'},
                ]
            }
        },
        components: {
            CloseBtn
        },
    }
</script>
<template>
    <header class="headerBack d-flex justify-content-between align-items-center px-2">
        <h2 class="title">Promoções</h2>
        <CloseBtn></CloseBtn>
    </header>
    <div class="promotionsWindows container-fluid">
        <ul class="px-0">
            <li v-for="item in imgData" :key="item" class="mt-4">
                <router-link to="/">
                    <img :src="item.imgUrl" alt="" class="w-100">
                </router-link>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .app{
        background-color: var(--black2);
        height: 100vh;
        padding-top: 4rem;
    }
    .promotionsWindows ul{
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        overflow-y: auto;
        padding-bottom: 5rem;
    }
</style>