<template>
  <!-- 是否登出 -->
  <div
    class="modal fade LogOutModal"
    id="LogOutModal"
    tabindex="-1"
    aria-labelledby="LogOutModalLabel"
    aria-hidden="true"
    data-bs-backdrop="false"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body p-4">
          Do you want log out ?
          <div class="d-flex justify-content-evenly mt-5">
            <button type="button" class="btn cancel" @click="closeProfileWindow" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn continue" @click="logout" data-bs-dismiss="modal">Continuar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Offcanvas } from 'bootstrap'
export default {
  data() {
    return {
      profileWindow: null,
    }
  },
  mounted(){
    // 個人選單
    const profileWindow = document.getElementById('profileWindow');
    this.profileWindow = new Offcanvas(profileWindow);

  },
  methods: {
    // 關閉個人選單方法
    closeProfileWindow(){
      this.profileWindow.hide()
    },
    // 登出方法
    logout() {
      this.closeProfileWindow()
      if (this.$route.name === 'home') {
        // 如果当前页面已经是 home，则刷新页面
        window.location.reload();
      } else {
        // 否则跳转到 home 页面
        this.$router.push({ name: 'home' });
      }
    },

  }
}
</script>
<style scoped>
  .LogOutModal .modal-content {
    background-color: #1c1c1c;
    color: var(--fff);
    width: 80%;
    margin: auto;
    text-align: center;
    font-size: 1.2rem;
  }
  .LogOutModal .modal-content .cancel {
    border: none;
    padding: 0.5rem 1.5rem;
    color: var(--fff);
    background: linear-gradient(180deg, #303030, #494949);
    font-size: 1.2rem;
  }
  .LogOutModal .modal-content .continue {
    border: none;
    padding: 0.5rem 1.5rem;
    color: var(--fff);
    background: linear-gradient(180deg, #5519cd, #9449ff);
    font-size: 1.2rem;
  }
</style>