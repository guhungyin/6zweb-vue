<template>
  <div class="vuxDrawer">
    <div class="vuxDrawerBody">
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
.vuxDrawer {
    display: block;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.vuxDrawerBody{
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
