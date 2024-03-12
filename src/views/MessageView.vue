<script>
import CloseBtn from '../components/CloseBtn.vue'
export default {
  components: {
    CloseBtn
  }
}
</script>
<template>
  <div class="routerView">
    <div class="headerBack d-flex justify-content-between align-items-center px-2">
      <h2 class="title">Mensagem</h2>
      <CloseBtn></CloseBtn>
    </div>
    <div class="container-fluid messageWindows">
      <div class="noData">
        <img src="../assets/images/icon/noMessage.png" alt="" />
        <span class="mt-3">Sem Mensagem</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.app {
  padding-top: 4rem;
  background-color: #1f1f1f;
  height: 100vh;
}
.noData {
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #787878;
}
.noData img {
  width: 3.5rem;
}
</style>
