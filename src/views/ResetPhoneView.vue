<script>
    import CloseBtn from '../components/CloseBtn.vue';
    export default {
        components: {
            CloseBtn
        },
    }
</script>
<template>
    <header class="headerBack d-flex justify-content-between align-items-center px-2">
        <h2 class="title">Reset Account</h2>
        <CloseBtn></CloseBtn>
    </header>
    <div class="main">
        <div class="container-fluid">
            <div class="resetPhoneTitle fw-bold mt-4 mb-3">Encontre sua conta</div>
            <div class="text mb-4">Insira seu número de celular para procurar a sua conta.</div>
            <div class="phoneInput position-relative mb-5">
                <input class="form-control py-2" type="text" placeholder="Número de Celular" required>
                <span>+55</span>
                <div class="invalid-feedback">
                    Please enter the correct phone number 
                </div>
            </div>
            <button type="submit" class="btn loginBtn w-100 mb-4">Continuar</button>
        </div>
    </div>
</template>
<style scoped>
    .app{
        background-color: var(--black2);
        height: 100vh;
        padding-top: 4rem;
    }
    .resetPhoneTitle{
        color: var(--primary);
        text-align: center;
        font-size: 1.2rem;
    }
    .text{
        color: var(--fff);
        text-align: center;
        font-size: .8rem;
    }
    .phoneInput input{
        color: #868686;
        text-indent: 3rem;
    }
    .phoneInput span{
        position: absolute;
        left: 1rem;
        top: 0.55rem;
        color: #4d565e;
    }
    .loginBtn{
        background: var(--greenGradient);
        color: var(--fff);
        border: none;
        opacity: .4;
        border-radius: 2px;
        padding: 0.56rem 0;
    }
    .loginBtn.active{
        opacity: 1;
    }
</style>