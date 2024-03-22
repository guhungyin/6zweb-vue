<template>
  <div class="vuxDrawer">
    <RouterViewTransition></RouterViewTransition>
    <!-- 主選單 -->
    <MainMenu></MainMenu>
    <!-- 個人選單 -->
    <ProfileWindow></ProfileWindow>

    <!-- 弹窗 -->
    <AlertsModal></AlertsModal>
  </div>
</template>
<script>
import MainMenu from '@/components/MainMenu.vue'
import ProfileWindow from '@/components/ProfileWindow.vue'
import RouterViewTransition from '@/components/RouterViewTransition.vue'
import AlertsModal from '@/components/alertsModal.vue'
export default {
  components: {
    MainMenu,
    ProfileWindow,
    RouterViewTransition,
    AlertsModal
  }
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
</style>
