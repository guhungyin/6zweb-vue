<template>
  <router-view></router-view>
  <!-- 下方選單 -->
  <BottomMenu></BottomMenu>
  <!-- 主選單 -->
  <MainMenu></MainMenu>
  <!-- 個人選單 -->
  <ProfileWindow></ProfileWindow>
  <Turntable></Turntable>
</template>

<script>
import BottomMenu from './components/BottomMenu.vue'
import MainMenu from './components/MainMenu.vue'
import ProfileWindow from './components/ProfileWindow.vue'
export default {
  components: {
    BottomMenu,
    MainMenu,
    ProfileWindow,
  },
}
</script>
