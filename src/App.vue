<template>
  <div class="vuxDrawer">
    <transition :name="transitionName">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route(to,from) {
      if(to.meta.index > from.meta.index){
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
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
 transition: all .05s;
 position: absolute;
}
.slide-right-enter-active {
 opacity: 0;
 transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
 opacity: 0;
 transform: translate3d(100%, 0, 0);
}
.slide-left-enter-active {
 opacity: 0;
 transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
 opacity: 0;
 transform: translate3d(-100%, 0, 0);
}
</style>
