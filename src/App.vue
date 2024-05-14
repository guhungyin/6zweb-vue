<template>
  <div class="vuxDrawer">
    <div class="vux-drawer-body" style="transform: translate3d(0px, 0px, 0px);">
      <RouterViewTransition></RouterViewTransition>
      <!-- 主選單 -->
      <MainMenu></MainMenu>
      <!-- 個人選單 -->
      <ProfileWindow></ProfileWindow>
      <!-- 弹窗 -->
      <AlertsModal></AlertsModal>
      <!-- 是否登出 -->
      <LogOutModal></LogOutModal>
    </div>
  </div>
</template>
<script>
import LogOutModal from '@/components/LogOutModal.vue'
import MainMenu from '@/components/MainMenu.vue'
import ProfileWindow from '@/components/ProfileWindow.vue'
import RouterViewTransition from '@/components/RouterViewTransition.vue'
import AlertsModal from '@/components/alertsModal.vue'
export default {
  components: {
    MainMenu,
    ProfileWindow,
    RouterViewTransition,
    AlertsModal,
    LogOutModal
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
.vux-drawer-body{
  height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: visibility .38s, -webkit-transform .38s ease-in-out;
    transition: visibility .38s, -webkit-transform .38s ease-in-out;
    -o-transition: transform ease-in-out .38s, visibility .38s;
    transition: transform .38s ease-in-out, visibility .38s;
    transition: transform .38s ease-in-out, visibility .38s, -webkit-transform .38s ease-in-out;
}
</style>
