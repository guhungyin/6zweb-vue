<template>
  <div class="vuxDrawer">
    <transition :name="transitionName">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
    <!-- 主選單 -->
    <MainMenu></MainMenu>
    <!-- 個人選單 -->
    <ProfileWindow></ProfileWindow>
  </div>
</template>
<script>
import MainMenu from '@/components/MainMenu.vue'
import ProfileWindow from '@/components/ProfileWindow.vue'
export default {
  data() {
    return {
      transitionName: ''
    }
  },
  components: {
    MainMenu,
    ProfileWindow,
  },
  watch: {
    $route(to,from) {
      if(to.meta.index > from.meta.index){
        this.transitionName = 'slide-left'
      } else if (to.meta.index < from.meta.index){
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      console.log(to.meta.index);
      console.log(from.meta.index);
    }
  },
}
</script>
<style scoped>
.vuxDrawer {
  overflow: hidden;
  display: block;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
 will-change: transform;
 transition: all .5s;
 position: absolute;
}

.slide-left-enter-from{
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter-to{
  transform: translate3d(0%, 0, 0);
}

.slide-left-leave-from{
  transform: translate3d(0%, 0, 0);
}
.slide-left-leave-to{
  transform: translate3d(-100%, 0, 0);
}

.slide-right-enter-from{
  transform: translate3d(-100%, 0, 0);
}
.slide-right-enter-to{
  transform: translate3d(0%, 0, 0);
}
.slide-right-leave-from{
  transform: translate3d(0%, 0, 0);
}
.slide-right-leave-to{
  transform: translate3d(100%, 0, 0);
}
</style>
