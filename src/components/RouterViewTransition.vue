<template>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName" appear>
      <component :is="Component"></component>
    </transition>
  </router-view>
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
      } else if (to.meta.index < from.meta.index){
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  },
}
</script>
<style scoped>
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
