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
        <h2 class="title">Contate-nos</h2>
        <CloseBtn></CloseBtn>
    </div>
    <div class="container-fluid mt-3 contactWindows">
        <a href="mailto:xxx@6z.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="#8ea7bb" class="bi bi-envelope-fill me-2" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"></path>
            </svg>
            <span class="me-2">E-mail: </span>
            <span class="link">support@6z.com</span>
        </a>
    </div>
</template>
<style scoped>
    .app{
        padding-top: 4rem;
    }
    .contactWindows a{
        display: flex;
        align-items: center;
        font-size: .9rem;
        color: var(--fff);
    }
    .contactWindows .link{
        color: var(--primary);
    }
</style>