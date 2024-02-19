<template>
  <router-view></router-view>
  <!-- 下方選單 -->
  <BottomMenu></BottomMenu>
  <!-- 下方選單 -->
  <AddHomeWindow></AddHomeWindow>
  <!-- 下方選單 -->
  <MainMenu></MainMenu>
  <!-- 下方選單 -->
  <ProfileWindow></ProfileWindow>
</template>

<script>
  import BottomMenu from './components/BottomMenu.vue';
  import AddHomeWindow from './components/AddHomeWindow.vue';
  import MainMenu from './components/MainMenu.vue';
  import ProfileWindow from './components/ProfileWindow.vue';

  export default {
    components: {
      BottomMenu,
      AddHomeWindow,
      MainMenu,
      ProfileWindow
    },
  }
</script>