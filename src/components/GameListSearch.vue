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
    <div class="modal fade gameListSearch" id="GameListSearchModal" tabindex="-1" aria-labelledby="GameListSearchModalLabel" aria-hidden="true">
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
                    <div class="characterNotice mb-3">A pesquisa requer pelo menos 3 caracteres</div>
                    <!-- + active 顯示 -->
                    <div class="searchHistory w-100">
                        <div class="d-flex justify-content-between align-items-center mb-2 title">
                            <span>Histórico de busca</span>
                            <!-- 刪除所有歷史紀錄  把 searchHistory的active刪除 並將 historyList 裡的資料清空-->
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                            </svg>
                        </div>
                        <div class="historyList py-2">
                            <div class="historyItem me-2 mt-2">
                                <span class="me-3">cash</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#8d8a8a" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </div>
                            <div class="historyItem me-2 mt-2">
                                <span class="me-3">cash or</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#8d8a8a" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </div>
                            <div class="historyItem me-2 mt-2">
                                <span class="me-3">sadj mdwsk</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#8d8a8a" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </div>
                            <div class="historyItem me-2 mt-2">
                                <span class="me-3">sadj</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#8d8a8a" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </div>
                            <div class="historyItem me-2 mt-2">
                                <span class="me-3">mdwsk</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#8d8a8a" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </div>
                            <div class="historyItem me-2 mt-2">
                                <span class="me-3">aaaaa</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#8d8a8a" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </div>
                            <div class="historyItem me-2 mt-2">
                                <span class="me-3">bbbbbb</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#8d8a8a" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <!-- 輸入搜尋後 + active 顯示該搜尋遊戲列表 -->
                    <div class="hisDisplay">
                        <div class="gameTitle mb-2">gamesSearchCount</div>
                        <div class="row row-cols-3 g-3">
                            <router-link to="/play" class="col" @click="closeModal">
                                <img src="https://6z.com/images/game/551031.jpg" class="w-100 rounded-2" alt="">
                            </router-link>
                            <router-link to="/play" class="col" @click="closeModal">
                                <img src="https://6z.com/images/game/551250.jpg" class="w-100 rounded-2" alt="">
                            </router-link>
                            <router-link to="/play" class="col" @click="closeModal">
                                <img src="https://6z.com/images/game/551256.png" class="w-100 rounded-2" alt="">
                            </router-link>
                            <router-link to="/play" class="col" @click="closeModal">
                                <img src="https://6z.com/images/game/551511.jpg" class="w-100 rounded-2" alt="">
                            </router-link>
                            <router-link to="/play" class="col" @click="closeModal">
                                <img src="https://6z.com/images/game/551600.jpg" class="w-100 rounded-2" alt="">
                            </router-link>
                            <router-link to="/play" class="col" @click="closeModal">
                                <img src="https://6z.com/images/game/551618.jpg" class="w-100 rounded-2" alt="">
                            </router-link>
                            <router-link to="/play" class="col" @click="closeModal">
                                <img src="https://6z.com/images/game/551662.jpg" class="w-100 rounded-2" alt="">
                            </router-link>
                        </div>
                    </div>
                    <!-- 原先預設遊戲列表 -->
                    <div class="gameMain">
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
</template>
<style scoped>
    .gameListSearch{
        max-width: 34rem;
        transform: translate(-50%,0);
        left: 50%;
    }
    .gameListSearch .modal-content{
        background-color: #1a1a1a;
    }
    .modal.show .modal-dialog{
        width: 100%;
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
    .gameListSearch .modal-header .searchBox input::placeholder{
        color: #6e6e6e;
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
    .searchHistory{display: none;}
    .searchHistory.active{display: block;}
    .searchHistory .title span{
        color: var(--fff);
        font-size: .9rem;
    }
    .searchHistory .historyList{
        overflow-y: auto;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        height: 5.5rem;
    }
    .searchHistory .historyList .historyItem{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #1a1a1a;
        padding: .3rem .7rem;
        border-radius: .3rem;
    }
    .searchHistory .historyList .historyItem span{
        font-size: 1rem;
        color: #b3b3b3;
    }
    .searchHistory .historyList::-webkit-scrollbar{display: none;}
    .modal-fullscreen .modal-body::-webkit-scrollbar{display: none;}
    .hisDisplay{
        display: none;
        margin-bottom: 1rem;
    }
    .hisDisplay.active{
        display: block;
    }
    .hisDisplay .gameTitle{
        color: var(--fff);
    }
</style>