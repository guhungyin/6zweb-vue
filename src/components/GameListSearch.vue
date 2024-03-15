<script>
export default {
    methods: {
        closeModal(){
            const modalBackdrop = document.querySelector('.modal-backdrop');
            modalBackdrop.remove();
        }
    },
}
</script>
<template>
    <div class="routerView gameListSearch">
        <div class="modal fade" id="GameListSearchModal" tabindex="-1" aria-labelledby="GameListSearchModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header border-0">
                        <!-- 搜尋框 -->
                        <section class="container-fluid mb-3 searchBox p-0">
                            <div class="searchInput rounded-1 d-flex align-items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#6e6e6e"
                                    class="bi bi-search searchIcon ms-3"
                                    viewBox="0 0 16 16"
                                >
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                                />
                                </svg>
                                <input
                                    type="email"
                                    class="form-control border-0 ps-5"
                                    aria-describedby="emailHelp"
                                    placeholder="Procure Jogos ou Provedores"
                                />
                            </div>
                            <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
                        </section>
                        <div class="characterNotice">A pesquisa requer pelo menos 3 caracteres</div>
                    </div>
                    <div class="modal-body">
                        <div class="container gameMain">
                            <div class="row row-cols-3 g-3">
                                <router-link to="/play" class="col" @click="closeModal">
                                    <img src="https://6z.com/images/game/551031.jpg" class="w-100 rounded-2" alt="">
                                </router-link>
                                <router-link to="/play" class="col" @click="closeModal">
                                    <img src="https://6z.com/images/game/551031.jpg" class="w-100 rounded-2" alt="">
                                </router-link>
                                <router-link to="/play" class="col" @click="closeModal">
                                    <img src="https://6z.com/images/game/551031.jpg" class="w-100 rounded-2" alt="">
                                </router-link>
                                <router-link to="/play" class="col" @click="closeModal">
                                    <img src="https://6z.com/images/game/551031.jpg" class="w-100 rounded-2" alt="">
                                </router-link>
                                <router-link to="/play" class="col" @click="closeModal">
                                    <img src="https://6z.com/images/game/551031.jpg" class="w-100 rounded-2" alt="">
                                </router-link>
                                <router-link to="/play" class="col" @click="closeModal">
                                    <img src="https://6z.com/images/game/551031.jpg" class="w-100 rounded-2" alt="">
                                </router-link>
                                <router-link to="/play" class="col" @click="closeModal">
                                    <img src="https://6z.com/images/game/551031.jpg" class="w-100 rounded-2" alt="">
                                </router-link>
                                <router-link to="/play" class="col" @click="closeModal">
                                    <img src="https://6z.com/images/game/551031.jpg" class="w-100 rounded-2" alt="">
                                </router-link>
                                <router-link to="/play" class="col" @click="closeModal">
                                    <img src="https://6z.com/images/game/551031.jpg" class="w-100 rounded-2" alt="">
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .gameListSearch{
        position: absolute;
    }
    .gameListSearch .modal-content{
        background-color: #1a1a1a;
    }
    .gameListSearch .modal-header{
        background-color: #000;

        flex-direction: column;
    }
    .gameListSearch .modal-header .searchBox{
        position: relative;
        color: #fff;
        background-color: #191919;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .gameListSearch .modal-header .searchBox:focus{
        box-shadow: 0 0 0 1px var(--primary);
    }
    .gameListSearch .searchInput input {
        color: var(--gray1);
        background-color: transparent;
        position: absolute;
    }
    .gameListSearch .modal-header .searchBox button{
        z-index: 1;
        color: var(--fff);
    }
    .gameListSearch .characterNotice{
        color: #6e6e6e;
        font-size: .9rem;
        text-align: center;

    }
    .gameMain{
        overflow-y: auto;
    }
    .gameMain::-webkit-scrollbar{display: none;}
</style>