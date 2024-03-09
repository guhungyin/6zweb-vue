
<template>
  <loading v-model:active="isLoading"
            :can-cancel="true"
            :on-cancel="onCancel"
            :is-full-page="fullPage">
            <div class="loadingio-spinner-spin-7bcnrmrch3m">
              <div class="ldio-hsqjr1ih6dd">
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
</loading>
</template>

<script>
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/css/index.css';

  export default {
      data() {
          return {
              isLoading: false,
              fullPage: true //依照需求看是否全屏
          }
      },
      components: {
          Loading
      },
      methods: {
          doAjax() { // 可以用來載入資料時去顯示loading
              this.isLoading = true;
              // simulate AJAX
              setTimeout(() => {
                  this.isLoading = false
              }, 5000)
          },
          onCancel() {
              console.log('User cancelled the loader.')
          }
      },

      }
</script>

<style scoped>
@keyframes ldio-hsqjr1ih6dd {
  0% {
    opacity: 1;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1.5,1.5);
  } 100% {
    opacity: 0;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1,1);
  }
}
.ldio-hsqjr1ih6dd div > div {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #56b83f;
  animation: ldio-hsqjr1ih6dd 1s linear infinite;
}.ldio-hsqjr1ih6dd div:nth-child(1) > div {
  left: 74px;
  top: 44px;
  animation-delay: -0.875s;
}
.ldio-hsqjr1ih6dd > div:nth-child(1) {
  transform: rotate(0deg);
  transform-origin: 80px 50px;
}.ldio-hsqjr1ih6dd div:nth-child(2) > div {
  left: 65px;
  top: 65px;
  animation-delay: -0.75s;
}
.ldio-hsqjr1ih6dd > div:nth-child(2) {
  transform: rotate(45deg);
  transform-origin: 71px 71px;
}.ldio-hsqjr1ih6dd div:nth-child(3) > div {
  left: 44px;
  top: 74px;
  animation-delay: -0.625s;
}
.ldio-hsqjr1ih6dd > div:nth-child(3) {
  transform: rotate(90deg);
  transform-origin: 50px 80px;
}.ldio-hsqjr1ih6dd div:nth-child(4) > div {
  left: 23px;
  top: 65px;
  animation-delay: -0.5s;
}
.ldio-hsqjr1ih6dd > div:nth-child(4) {
  transform: rotate(135deg);
  transform-origin: 29px 71px;
}.ldio-hsqjr1ih6dd div:nth-child(5) > div {
  left: 14px;
  top: 44px;
  animation-delay: -0.375s;
}
.ldio-hsqjr1ih6dd > div:nth-child(5) {
  transform: rotate(180deg);
  transform-origin: 20px 50px;
}.ldio-hsqjr1ih6dd div:nth-child(6) > div {
  left: 23px;
  top: 23px;
  animation-delay: -0.25s;
}
.ldio-hsqjr1ih6dd > div:nth-child(6) {
  transform: rotate(225deg);
  transform-origin: 29px 29px;
}.ldio-hsqjr1ih6dd div:nth-child(7) > div {
  left: 44px;
  top: 14px;
  animation-delay: -0.125s;
}
.ldio-hsqjr1ih6dd > div:nth-child(7) {
  transform: rotate(270deg);
  transform-origin: 50px 20px;
}.ldio-hsqjr1ih6dd div:nth-child(8) > div {
  left: 65px;
  top: 23px;
  animation-delay: 0s;
}
.ldio-hsqjr1ih6dd > div:nth-child(8) {
  transform: rotate(315deg);
  transform-origin: 71px 29px;
}
.loadingio-spinner-spin-7bcnrmrch3m {
  width: 100px;
  height: 100px;
  display: inline-block;
  overflow: hidden;
  background: rgba(255, 255, 255, 0);
}
.ldio-hsqjr1ih6dd {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-hsqjr1ih6dd div { box-sizing: content-box; }
</style>