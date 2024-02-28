
<script>
export default {
  data() {
    return {
      rotationAngle: 0,
    };
  },
  methods: {
    startRotation() {
      const angles = [0, 45, 90, 135, 180, 225, 270, 315];
      this.rotationAngle = angles[Math.floor(Math.random() * angles.length)];
      setTimeout(() => {
      }, Math.random() * 3000 + 3000); // 隨機秒數，範圍在 3 到 6 秒之間
    },
  },
};
</script>
<template>
    <section class="turntableWindows">
        <div class="content">
            <!-- 關閉按鈕 -->
            <img src="../assets/images/rou/close.png" class="closeBtn">
            <!-- 標題圖片 -->
            <img src="../assets/images/rou/title.png" alt="" class="titleImg">
            <!-- 內容 -->
            <div class="draw">
                <!-- 轉盤內容 -->
                <div class="drawContent" :style="{ transform: 'rotate(' + rotationAngle + 'deg)' }">
                    <div class="spinbox">
                        <div class="banknote1"></div>
                        <div class="coins"></div>
                        <div class="fail"></div>
                        <div class="sacar"></div>
                        <div class="banknote2"></div>
                        <div class="one">1</div>
                        <div class="fifty">50</div>
                        <div class="oneThousand">1000</div>
                    </div>
                </div>
                <!-- 轉盤背景 -->
                <img src="../assets/images/rou/d.png" alt="" class="lamp w-100">
                <!-- 燈光效果 -->
                <div class="light"></div>
                <!-- 裝飾 -->
                <img src="../assets/images/rou/pointer.png" alt="" class="pointer">
                <!-- 按鈕 -->
                <div class="drawImg" @click="startRotation">
                    <img src="../assets/images/rou/draw.png" alt="" class="w-100">
                </div>
                <!-- 顯示次數及金額 -->
                <div class="drawLen">
                    <div class="content">
                        <img src="../assets/images/rou/one.png" alt="">
                    </div>
                </div>
            </div>
            <!-- 人物裝飾 -->
            <img src="../assets/images/rou/decoration.png" class="decoration">
            <!-- 下方標題 -->
            <img src="../assets/images/rou/tip.png" alt="" class="tipImg">
        </div>
    </section>
</template>
<style scoped>

.turntableWindows{
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(0 0 0 / 70%);
    width: 100%;
    height: 100vh;
    z-index: 999;
}
.turntableWindows .content{
    position: relative;
    width: calc(100vw - 5rem);
    max-width: 20rem;
}
.turntableWindows .content .titleImg{
    width: 86%;
    margin: 0 auto 5%;
    display: block;
}
.turntableWindows .content .closeBtn{
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    right: 0;
}
.turntableWindows .draw{
    width: 100%;
}
.turntableWindows .light{
    position: absolute;
    transform: translate(-50%,0);
    left: 50%;
    top: 28.6%;
    width: 19rem;
    height: 19rem;
    animation: lightAnimation infinite .4s;
}
@keyframes lightAnimation{
    from {
        background: url('../assets/images/rou/light1.png') no-repeat center center / 100% 100%;
    }
    to{
        background: url('../assets/images/rou/light2.png') no-repeat center center / 100% 100%;
    }
}
.turntableWindows .pointer{
    position: absolute;
    transform: translate(-50%, 0);
    left: 50%;
    top: 27%;
    width: 5rem;
    height: 3rem;
}
.turntableWindows .drawImg{
    position: absolute;
    transform: translate(-50%,0);
    left: 50%;
    top: 49%;
    width: 5.3rem;
    height: 5rem;
}
.turntableWindows .drawLen{
    pointer-events: none;
    position: absolute;
    transform: translate(-50%,0);
    left: 50%;
    top: 49%;
    width: 5.3rem;
    height: 5rem;
    text-align: center;
    border-radius: 50%;
    color: var(--fff);
    font-weight: bold;
}
.turntableWindows .drawLen .content{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.turntableWindows .drawLen img{
    width: 1.2rem;
}
.turntableWindows .drawContent{
    position: absolute;
    left: 7.6%;
    top: 31.6%;
    width: 84.5%;
    height: 47.9%;
    border-radius: 50%;
    overflow: hidden;
    transition: transform 1s;
}
.turntableWindows .drawContent .spinbox{
    background: url('../assets/images/rou/spinBg.png') no-repeat center center / contain;
    transform: rotate(0deg);
    width: 100%;
    height: 100%;
}
.turntableWindows .drawContent .spinbox .banknote1{
    background: url('../assets/images/rou/spin-1.png') no-repeat center center / contain;
    position: absolute;
    top: 10%;
    left: 41.5%;
    width: 3rem;
    height: 2.5rem;
}
.turntableWindows .drawContent .spinbox .banknote2{
    background: url('../assets/images/rou/spin-1.png') no-repeat center center / contain;
    position: absolute;
    top: 76%;
    left: 41.5%;
    width: 3rem;
    height: 2.5rem;
    transform: rotate(180deg);
}
.turntableWindows .drawContent .spinbox .coins{
    background: url('../assets/images/rou/spin-2.png') no-repeat center center / contain;
    position: absolute;
    top: 43%;
    left: 9.5%;
    width: 2.5rem;
    height: 2.5rem;
    transform: rotate(-90deg);
}
.turntableWindows .drawContent .spinbox .fail{
    background: url('../assets/images/rou/spin-4.png') no-repeat center center / contain;
    position: absolute;
    top: 65%;
    left: 15.5%;
    width: 3rem;
    height: 3.5rem;
    transform: rotate(-135deg);
}
.turntableWindows .drawContent .spinbox .sacar{
    background: url('../assets/images/rou/spin-5.png') no-repeat center center / contain;
    position: absolute;
    top: 62%;
    left: 63.5%;
    width: 3rem;
    transform: rotate(135deg);
    height: 3.5rem;
}
.turntableWindows .drawContent .spinbox .one{
    position: absolute;
    top: 17%;
    left: 21.5%;
    transform: rotate(-45deg);
    font-weight: bold;
    font-size: 2rem;
    color: #ffd760;
}
.turntableWindows .drawContent .spinbox .fifty{
    position: absolute;
    top: 41%;
    left: 78.5%;
    transform: rotate(90deg);
    font-weight: bold;
    font-size: 2rem;
    color: #b90615;
}
.turntableWindows .drawContent .spinbox .oneThousand{
    position: absolute;
    top: 18%;
    left: 64.8%;
    transform: rotate(45deg);
    font-weight: bold;
    font-size: 1.5rem;
    color: #ffd760;
}
.turntableWindows .decoration{
    position: absolute;
    transform: translate(-50%, 0);
    left: 50%;
    top: 65.5%;
    width: 94%;
}
.turntableWindows .tipImg{
    width: 100%;
}
</style>
