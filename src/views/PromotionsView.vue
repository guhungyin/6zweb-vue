<script>
  import CloseBtn from '@/components/CloseBtn.vue'
  import BottomMenu from '@/components/BottomMenu.vue'
  export default {
    data() {
      return {
        imgData: [
          { imgUrl: 'src/assets/images/banner/banner_01.jpg',
            link: '/deposit'
          },
          { imgUrl: 'src/assets/images/banner/banner_02.jpg',
            link: '/'
          },
          { imgUrl: 'src/assets/images/banner/banner_03.jpg',
            link: '/'
          },
          { imgUrl: 'src/assets/images/banner/banner_04.jpg',
            link: '/cashwheel'
          },
          { imgUrl: 'src/assets/images/banner/banner_05.jpg',
            link: '/'
          },
          { imgUrl: 'src/assets/images/banner/banner_06.jpg',
            link: '/'
          },
          { imgUrl: 'src/assets/images/banner/banner_07.jpg',
            link: '/'
          },
          { imgUrl: 'src/assets/images/banner/banner_08.jpg',
            link: '/downloadApp'
          }
        ]
      }
    },
    components: {
      CloseBtn,
      BottomMenu,
    }
  }
</script>
<template>
  <div class="routerView">
    <header class="headerBack d-flex justify-content-between align-items-center px-2">
      <h2 class="title">Promoções</h2>
      <CloseBtn></CloseBtn>
    </header>
    <div class="promotionsWindows container-fluid">
      <ul class="px-0">
        <li v-for="item in imgData" :key="item" class="mt-4">
          <router-link :to="item.link">
            <img :src="item.imgUrl" alt="" class="w-100" />
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 下方選單 -->
    <BottomMenu></BottomMenu>
  </div>
</template>
<style scoped>
.promotionsWindows{
  margin-top: 4rem;
}
.promotionsWindows ul {
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  overflow-y: auto;
  padding-bottom: 5rem;
}
</style>
