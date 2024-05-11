<script>
import { useCommonStore } from '@/stores/modules/common'
export default {
  data() {
    return {
      gameList: [],
      searchKey: '',
      searchGameList: [],
      searchHistoryKey: []
    }
  },
  methods: {
    closeModal(gameInfo) {
      //   const modalBackdrop = document.querySelector('.modal-backdrop')

      //   if (modalBackdrop) {
      //     modalBackdrop.remove()
      //   }

      if (gameInfo) {
        this.commonStore.setPlayGame(gameInfo)
      }
    },
    deleteHistory(key) {
      if (key === 'all') {
        console.log('删除所有历史搜索记录')
        localStorage.removeItem('searchHistory')
        this.searchHistoryKey = []
      } else {
        this.searchHistoryKey = this.searchHistoryKey.filter((v) => v !== key)

        if (this.searchHistoryKey.length > 0) {
          localStorage.setItem('searchHistory', JSON.stringify(this.searchHistoryKey))
        } else {
          localStorage.removeItem('searchHistory')
        }
      }
    },
    searchGame(searchKey) {
      console.log('搜索游戏关键字:', searchKey)
      if (searchKey && typeof searchKey === 'string') {
        this.searchKey = searchKey
      }

      if (this.searchKey.length >= 3) {
        this.commonStore
          .searchGame(this.searchKey)
          .then((res) => {
            if (res.code === 0) {
              this.searchGameList = []
              res.data.forEach((v) => {
                if (v.cp === 'evo') {
                  v.cpSoft = 'Live'
                } else if (v.cp === 'tada') {
                  v.cpSoft = 'Tada Soft'
                } else if (v.cp === 'pg_electronic') {
                  v.cpSoft = 'PG Soft'
                } else if (v.cp === 'pgplus') {
                  v.cpSoft = 'PG Soft'
                }

                this.searchGameList.push(v)
              })

              let find = false

              for (const key in this.searchHistoryKey) {
                if (this.searchHistoryKey[key] === this.searchKey) {
                  find = true
                  break
                }
              }

              if (!find && res.data.length > 0) {
                this.searchHistoryKey.push(this.searchKey)
                localStorage.setItem('searchHistory', JSON.stringify(this.searchHistoryKey))
              }
            }
          })
          .catch((err) => console.log('搜索游戏 [', this.searchKey, '] 错误:', err.message))
      }
    }
  },
  created() {
    if (localStorage.getItem('searchHistory')) {
      this.searchHistoryKey = JSON.parse(localStorage.getItem('searchHistory'))
    }

    this.commonStore.hotList().then((res) => {
      if (res.code === 0) {
        res.data.forEach((v) => {
          if (v.cp === 'evo') {
            v.cpSoft = 'Live'
          } else if (v.cp === 'tada') {
            v.cpSoft = 'Tada Soft'
          } else if (v.cp === 'pg_electronic') {
            v.cpSoft = 'PG Soft'
          } else if (v.cp === 'pgplus') {
            v.cpSoft = 'PG Soft'
          }
          this.gameList.push(v)
        })
      }
    })
  },
  setup() {
    const commonStore = useCommonStore()
    return {
      commonStore
    }
  }
}
</script>
<template>
  <div
    class="modal fade gameListSearch"
    id="GameListSearchModal"
    tabindex="-1"
    aria-labelledby="GameListSearchModalLabel"
    aria-hidden="true"
    data-bs-backdrop="false"
  >
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
                type="text"
                class="form-control border-0 ps-5"
                aria-describedby="emailHelp"
                placeholder="Procure Jogos ou Provedores"
                v-model.trim="this.searchKey"
                @keyup.enter="searchGame"
              />
            </div>
            <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
              Cancelar
            </button>
          </section>
          <div class="characterNotice mb-3">A pesquisa requer pelo menos 3 caracteres</div>
          <!-- + active 顯示 -->
          <div class="searchHistory w-100" :class="{ active: this.searchHistoryKey.length > 0 }">
            <div class="d-flex justify-content-between align-items-center mb-2 title">
              <span>Histórico de busca</span>
              <!-- 刪除所有歷史紀錄  把 searchHistory的active刪除 並將 historyList 裡的資料清空-->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#FFF"
                class="bi bi-trash-fill"
                viewBox="0 0 16 16"
                @click="deleteHistory('all')"
              >
                <path
                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
                />
              </svg>
            </div>
            <div class="historyList py-2">
              <div
                class="historyItem me-2 mt-2"
                v-for="itemKey in this.searchHistoryKey"
                :key="itemKey"
              >
                <span class="me-3" @click="searchGame(itemKey)">{{ itemKey }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#8d8a8a"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                  @click="deleteHistory(itemKey)"
                >
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <!-- 輸入搜尋後 + active 顯示該搜尋遊戲列表 -->
          <div class="hisDisplay" :class="{ active: this.searchGameList.length > 0 }">
            <div class="gameTitle mb-2">gamesSearchCount</div>
            <div class="row row-cols-3 g-3">
              <router-link
                to="/play"
                class="col"
                v-for="item in this.searchGameList"
                :key="item"
                @click="closeModal(item)"
              >
                <img :src="item.iconName" class="w-100 rounded-2" alt="" />
              </router-link>
            </div>
            <hr class="hr">
          </div>
          <!-- 原先預設遊戲列表 -->
          <div class="gameMain">
            <div class="row row-cols-3 g-3">
              <router-link
                to="/play"
                class="col"
                v-for="item in this.gameList"
                :key="item"
                @click="closeModal(item)"
              >
                <img :src="item.iconName" class="w-100 rounded-2" alt="" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.gameListSearch {
  max-width: 34rem;
  transform: translate(-50%, 0);
  left: 50%;
}
.gameListSearch .modal-content {
  background-color: #1a1a1a;
}
.modal.show .modal-dialog {
  width: 100%;
}
.gameListSearch .modal-header {
  background-color: #000;

  flex-direction: column;
}
.gameListSearch .modal-header .searchBox {
  position: relative;
  color: #fff;
  background-color: #191919;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.gameListSearch .modal-header .searchBox:focus {
  box-shadow: 0 0 0 1px var(--primary);
}
.gameListSearch .searchInput input {
  color: var(--gray1);
  background-color: transparent;
  position: absolute;
}
.gameListSearch .modal-header .searchBox input::placeholder {
  color: #6e6e6e;
}
.gameListSearch .modal-header .searchBox button {
  z-index: 1;
  color: var(--fff);
}
.gameListSearch .characterNotice {
  color: #6e6e6e;
  font-size: 0.9rem;
  text-align: center;
}
.searchHistory {
  display: none;
}
.searchHistory.active {
  display: block;
}
.searchHistory .title span {
  color: var(--fff);
  font-size: 0.9rem;
}
.searchHistory .historyList {
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 5.5rem;
}
.searchHistory .historyList .historyItem {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  padding: 0.3rem 0.7rem;
  border-radius: 0.3rem;
}
.searchHistory .historyList .historyItem span {
  font-size: 1rem;
  color: #b3b3b3;
}
.searchHistory .historyList::-webkit-scrollbar {
  display: none;
}
.modal-fullscreen .modal-body::-webkit-scrollbar {
  display: none;
}
.hisDisplay {
  display: none;
  margin-bottom: 1rem;
}
.hisDisplay.active {
  display: block;
}
.hisDisplay .gameTitle {
  color: var(--fff);
}
.hr{
  opacity: 1;
  border-color: #4f4f4f;
}
</style>
