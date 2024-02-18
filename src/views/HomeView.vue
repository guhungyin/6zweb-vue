<template>
  <!-- 上方選單 -->
  <header class="position-fixed">
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <a class="navbar-brand logo" href="#">
          <img src="../assets/images/logo.png" class="img-fluid" alt="">
        </a>
        <!-- 登出顯示登入按鈕 -->
        <a href="./login.html" class="btn loginBtn fw-bold">Login</a>
        <!-- 登入顯示金額 + 儲值 + 個人選單按鈕 -->
        <!-- <div class="right">
          <div class="userMoney me-2">
            <img class="me-1" src="./images/icon/rmoney.svg" alt="">
            0.00
          </div>
          <a class="depositBtn me-2" href="./deposit.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" class="bi bi-wallet-fill me-2" viewBox="0 0 16 16">
              <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z"></path>
              <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z"></path>
            </svg>
            Depósito
          </a>
          <button class="btn userBtn d-flex flex-column justify-content-center align-items-center p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#profileWindow" aria-controls="profileWindow">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" class="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
          </button>
        </div> -->
      </div>
    </nav>
  </header>
  <!-- banner -->
  <div class="banner">
    <swiper-container 
    loop="true"
    spaceBetween="30"
    centeredSlides="true"
    autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    pagination="{
      clickable: true,
    }"
    modules="modules"
    class="bannerSwiper">
      <swiper-slide>
        <img class="img-fluid" src="https://images.hibigwin.com/wildbet777/202312/mzrqWIEAPFiZzqF.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="img-fluid" src="https://images.hibigwin.com/wildbet777/202312/tXjavEotaEosfJt.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="img-fluid" src="https://images.hibigwin.com/wildbet777/202312/IiLcNgsERhzevtg.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="img-fluid" src="https://images.hibigwin.com/wildbet777/202312/MDspeLyExVBrDMK.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="img-fluid" src="https://images.hibigwin.com/wildbet777/202312/UkdfGNnCHEVhPRD.jpg" alt="">
      </swiper-slide>
    </swiper-container>
  </div>
  <!-- 跑馬燈 -->
  <section class="container d-flex marquee mb-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#3bc117" class="bi bi-volume-down-fill" viewBox="0 0 16 16">
      <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12zm3.025 4a4.5 4.5 0 0 1-1.318 3.182L10 10.475A3.5 3.5 0 0 0 11.025 8 3.5 3.5 0 0 0 10 5.525l.707-.707A4.5 4.5 0 0 1 12.025 8"/>
    </svg>
    <div class="marqueeContent">
      <span>1*****48 acabou de retirar 10000.0 BRL</span>
    </div>
  </section>
  <!-- 搜尋框 -->
  <section class="container-fluid mb-3">
    <div class="searchBox rounded-1 d-flex align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6e6e6e" class="bi bi-search searchIcon" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
      </svg>
      <input type="email" class="form-control border-0 ps-5" aria-describedby="emailHelp">
    </div>
  </section>
  <!-- 遊戲內容 -->
  <section class="container-fluid mb-4">
    <div class="recentListTitle title">Recent Grand Prize</div>
    <swiper-container 
    loop="true"
    slidesPerView="3"
    spaceBetween="10"
    autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    class="recentListSwiper mt-2">
      <swiper-slide v-for="item in recentListWinData" :key="item" class="main">
          <div class="img">
            <img :src="item.imgUrl" class="w-100">
          </div>
          <div class="container py-1">
            <div class="name mb-1">{{ item.userName }}</div>
            <div class="money">{{ item.winMoney }}</div>
          </div>
      </swiper-slide>
    </swiper-container>
    <div class="tabHome my-3">
      <ul class="p-0">
        <li class="px-3 py-2 me-2">
          <span>Promoções</span>
        </li>
        <li class="px-3 py-2 me-2">
          <span>6z Originals</span>
        </li>
        <li class="px-3 py-2 me-2">
          <span>Slots</span>
        </li>
        <li class="px-3 py-2 me-2">
          <span>APP</span>
        </li>
        <li class="px-3 py-2 me-2">
          <span>HOT</span>
        </li>
      </ul>
    </div>
    <!-- Quente  -->
    <div class="gameMain mb-3">
      <div class="topContent d-flex justify-content-between align-items-center">
        <div class="title">Quente</div>
        <div class="right d-flex ">
          <div class="total px-3 py-1 fw-bold me-2">ALL 18</div>
          <div part="button-prev" class="quenteGameListSwiper-button-prev swiper-button-prev px-2 button-prev me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#c4c4c4" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
          </div>
          <div part="button-next" class="quenteGameListSwiper-button-next swiper-button-next px-2 button-next">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#c4c4c4" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </div>
        </div>
      </div>
      <swiper-container 
      loop= "true"
      navigation="true"
      class="quenteGameListSwiper mt-2">
        <swiper-slide>
          <div class="row row-cols-3 g-2">
            <div class="col" v-for="item in quenteImgData" :key="item">
              <div class="img">
                  <img :src="item.imgUrl" class="w-100">
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="row row-cols-3 g-2">
            <div class="col" v-for="item in quenteImgData" :key="item">
              <div class="img">
                  <img :src="item.imgUrl" class="w-100">
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
    <!-- pg game -->
    <div class="gameMain mb-3">
      <div class="topContent d-flex justify-content-between align-items-center">
        <div class="title">PG Soft</div>
        <div class="right d-flex ">
          <div class="total px-3 py-1 fw-bold me-2">ALL 102</div>
          <div class="pgGameListSwiper-button-prev px-2 button-prev me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#c4c4c4" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
          </div>
          <div class="pgGameListSwiper-button-next px-2 button-next">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#c4c4c4" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="swiper pgGameListSwiper mt-3">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="row row-cols-3 g-2">
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551931.jpg" class="w-100">
                </div>
              </div>
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551932.jpg" class="w-100">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551934.jpg" class="w-100">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551933.jpg" class="w-100">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551936.jpg" class="w-100">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551935.jpg" class="w-100">
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="row row-cols-3  g-2">
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551937.jpg" class="w-100">
                </div>
              </div>
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551938.jpg" class="w-100">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551940.jpg" class="w-100">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551941.jpg" class="w-100">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551942.jpg" class="w-100">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551943.jpg" class="w-100">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 6z game -->
    <div class="gameMain mb-3">
      <div class="topContent d-flex justify-content-between align-items-center">
        <div class="title"> 6z Originals </div>
        <div class="right d-flex ">
          <div class="total px-3 py-1 fw-bold me-2">ALL 41</div>
          <div class="sixzGameListSwiper-button-prev px-2 button-prev me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#c4c4c4" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
          </div>
          <div class="sixzGameListSwiper-button-next px-2 button-next">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#c4c4c4" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="swiper sixzGameListSwiper mt-3">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="row row-cols-3 g-2">
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/PIC_Mines.jpg" class="w-100">
                </div>
              </div>
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551032.jpg" class="w-100">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551008.jpg" class="w-100">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551031.jpg" class="w-100">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551010.jpg" class="w-100">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551009.jpg" class="w-100">
                </div>
              </div>
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551037.jpg" class="w-100">
                </div>
              </div>
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551006.jpg" class="w-100">
                </div>
              </div>
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/PIC_Tower.jpg" class="w-100">
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="row row-cols-3 g-2">
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551025.jpg" class="w-100">
                </div>
              </div>
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551034.jpg" class="w-100">
                </div>
              </div>
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551012.jpg" class="w-100">
                </div>
              </div>
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551004.jpg" class="w-100">
                </div>
              </div>
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551028.jpg" class="w-100">
                </div>
              </div>
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551011.jpg" class="w-100">
                </div>
              </div>
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551019.jpg" class="w-100">
                </div>
              </div>
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551024.jpg" class="w-100">
                </div>
              </div>
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551016.jpg" class="w-100">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Provedor -->
    <div class="gameMain mb-3">
      <div class="topContent">
        <div class="title"> 6z Originals </div>
      </div>
      <div class="row row-cols-2 g-2 mt-3">
        <div class="col">
          <img src="https://6z.com/images/homePage/provider/link_PG.jpg" class="w-100" alt="">
        </div>
        <div class="col">
          <img src="https://6z.com/images/homePage/provider/link_TD.jpg" class="w-100" alt="">
        </div>
        <div class="col">
          <img src="https://6z.com/images/homePage/provider/link_pp.jpg" class="w-100" alt="">
        </div>
        <div class="col">
          <img src="https://6z.com/images/homePage/provider/link_EG.jpg" class="w-100" alt="">
        </div>
        <div class="col">
          <img src="https://6z.com/images/homePage/provider/link_6z.jpg" class="w-100" alt="">
        </div>
      </div>
    </div>
    <!-- LIVE game -->
    <div class="gameMain mb-3">
      <div class="topContent d-flex justify-content-between align-items-center">
        <div class="title"> Live Casino </div>
        <div class="right d-flex ">
          <div class="total px-3 py-1 fw-bold me-2">ALL 55</div>
          <div class="liveGameListSwiper-button-prev px-2 button-prev me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#c4c4c4" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
          </div>
          <div class="liveGameListSwiper-button-next px-2 button-next">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#c4c4c4" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="swiper liveGameListSwiper mt-3">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="row row-cols-3 g-2">
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551914.jpg" class="w-100">
                </div>
              </div>
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551909.jpg" class="w-100">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551910.jpg" class="w-100">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551912.jpg" class="w-100">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551911.jpg" class="w-100">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551913.jpg" class="w-100">
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="row row-cols-3 g-2">
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551908.jpg" class="img-fluid">
                </div>
              </div>
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551851.jpg" class="img-fluid">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551879.jpg" class="img-fluid">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551863.jpg" class="img-fluid">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551859.jpg" class="img-fluid">
                </div>
              </div>                
              <div class="col">
                <div class="img">
                  <img src="https://6z.com/images/game/551857.jpg" class="img-fluid">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  #app{
      padding-top: 4rem;
  }
  header{
      width: 100%;
      max-width: 34rem;
      top: 0;
      background-color: var(--black1);
      z-index: 2;
      height: 4rem;
  }
  header .logo img{
      height: 2.5rem;
  }
  header .loginBtn{
      border: none;
      color: var(--fff);
      background: var(--greenGradient);
  }
  header .right{
      display: flex;
      align-items: center;
  }
  header .right .userMoney{
      display: flex;
      align-items: center;
      color: var(--blue);
  }
  header .right .userMoney img{
      width: 1.5rem;
  }
  header .right .depositBtn{
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(180deg,#5519cd,#9449ff);
      color: var(--fff);
      font-size: .8rem;
      height: 2rem;
      width: 6rem;
      border-radius: .2rem;
  }
  header .right .userBtn{
      border: none;
      background-color: #1f1f1f;
      width: 2rem;
      height: 2rem;
  }
  .banner{
      position: relative;
      padding-bottom: 2.5rem;
  }
  .swiper-pagination-bullet{background-color: #979797 !important;}
  .swiper-pagination-bullet-active{background-color: var(--fff) !important;}
  .marquee .marqueeContent{
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      box-sizing: border-box;
  }
  .marquee .marqueeContent span{
      color: var(--primary);
      display: inline-block;
      padding-left: 100%;
      animation: marquee 15s linear infinite;
  }
  @keyframes marquee {
      0%   { transform: translate(0, 0); }
      100% { transform: translate(-100%, 0); }
  }
  .searchBox{
      position: relative;
      background-color: #191919;
  }
  .searchBox .searchIcon{
      position: absolute;
      left: 3%;
      top: 50%;
      transform: translate(0,-50%);
  }
  .searchBox input{
      color: var(--gray1);
      background-color: transparent;
  }
  .title{
      color: var(--fff);
  }
  .recentListSwiper .main{
      background-color: var(--black2);
  }
  .recentListSwiper .main .name{
      font-size: .8rem;
      color: var(--gray1);}
  .recentListSwiper .main .money{
      font-size: .8rem;
      color: var(--primary);}
  .tabHome{
      overflow-x: auto;
  }
  .tabHome::-webkit-scrollbar{display: none;}
  .tabHome ul{
      display: flex;
  }
  .tabHome li{background-color: var(--black2);}
  .tabHome li span{
      font-size: .8rem;
      white-space: nowrap;
      color: var(--gray1);
  }
  .gameMain .topContent .total{
      color: var(--fff);
      background-color: var(--black2);
      font-size: .8rem;
  }
  .gameMain .button-prev,
  .gameMain .button-next{
      background-color: var(--black2);
  }
  .footer{
      background-color: var(--black3);
      padding-bottom: 8rem;
  }
  .footer .bottomLogo{
      display: flex;
      justify-content: center;
  }
  .footer .bottomLogo img{
      height: 2.5rem;
  }
  .footer .customerService{
      display: flex;
      justify-content: center;
  }
  .footer .customerService img{
      width: 2.5rem;
      height: 2.5rem;
  }
  .footer .share span{
      color: var(--gray1);
      font-size: .6rem;
      text-align: center;
  }
  .footer .share img{
      width: 2.5rem;
      height: 2.5rem;
  }
  .footerBottom a{
      font-size: .8rem;
      color: var(--gray1);
  }
  .footerBottom .license{
      text-align: center;
      font-size: .8rem;
      color: var(--gray1);
  }
  .footerBottom .license a{
      color: var(--fff);
  }
  .footerBottom .warnContent{
      font-size: .8rem;
      color: var(--gray1);
  }
  .footerBottom .support{
      position: relative;
      font-size: .8rem;
  }
  .footerBottom .support .text{color: var(--gray1);}
  .footerBottom .support .email{color: var(--fff);}
  .footerBottom .favorite{
      line-height: .45rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      position: absolute;
      right: 0.2rem;
      bottom: 0.34rem;
      font-size: .2rem;
      color: #fff;
      background: #da2d4b;
  }
  .footerBottom .message{
      line-height: .45rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      position: fixed;
      right: 1rem;
      bottom: 8rem;
      font-size: .2rem;
      color: #fff;
      background: #2f7dea;
      z-index: 3;
  }
  .footerBottom .topBtn{
      width: 4rem;
      height: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: var(--black1);
      color: var(--fff);
      font-size: .8rem;
  }

  .addHomeWindow{
      width: 100%;
      max-width: 34rem;
      background-color: var(--black2);
      color: var(--gray1);
      z-index: 3;
      bottom: 0;
      margin: 0;
      border-radius: 0;
      border: none;
  }
  .addHomeWindow img{
      width: 4rem;
      height: 4rem;
  }
  .addHomeWindow .continueBtn{
      border: none;
      color: var(--fff);
      background: var(--greenGradient);
  }
</style>
<script>
export default {
  data(){
    return {
      recentListWinData: [
        {
          userName: '6799*****14',
          winMoney: 'R$ 5700',
          imgUrl: 'https://6z.com/images/game/551032.jpg',
        },
        {
          userName: '6799*****75',
          winMoney: 'R$ 4900',
          imgUrl: 'https://6z.com/images/game/551458.jpg',
        },
        {
          userName: '6799*****43',
          winMoney: 'R$ 3400',
          imgUrl: 'https://6z.com/images/game/551031.jpg',
        },
        {
          userName: '6799*****96',
          winMoney: 'R$ 1100',
          imgUrl: 'https://6z.com/images/game/551932.jpg',
        },
        {
          userName: '6722*****75',
          winMoney: 'R$ 8300',
          imgUrl: 'https://6z.com/images/game/551008.jpg',
        },
        {
          userName: '604*****98',
          winMoney: 'R$ 9600',
          imgUrl: 'https://6z.com/images/game/551934.jpg',
        },
        {
          userName: '6764*****65',
          winMoney: 'R$ 10000',
          imgUrl: 'https://pg61.vip/images/game/551037.jpg',
        },
        {
          userName: '6176*****41',
          winMoney: 'R$ 8800',
          imgUrl: 'https://pg61.vip/images/game/551204.jpg',
        },
        {
          userName: '6756*****32',
          winMoney: 'R$ 4400',
          imgUrl: 'https://pg61.vip/images/game/551476.jpg',
        },
        {
          userName: '6142*****11',
          winMoney: 'R$ 2300',
          imgUrl: 'https://pg61.vip/images/game/551936.jpg',
        },
      ],
      quenteImgData:[
        {
          imgUrl: 'https://6z.com/images/game/551931.jpg'
        },
        {
          imgUrl: 'https://images.hibigwin.com/wildbet777/202401/FhsZfhemCibKnvX.jpg'
        },
        {
          imgUrl: 'https://images.hibigwin.com/wildbet777/202401/VbIBbstdlEVdOgG.jpg'
        },
        {
          imgUrl: 'https://6z.com/images/game/551476.jpg'
        },
        {
          imgUrl: 'https://6z.com/images/game/551031.jpg'
        },
        {
          imgUrl: 'https://6z.com/images/game/PIC_Mines.jpg'
        },
        {
          imgUrl: 'https://6z.com/images/game/551010.jpg'
        },
        {
          imgUrl: 'https://images.hibigwin.com/wildbet777/202401/mLLqbYLHTFbRPFQ.jpg'
        },
        {
          imgUrl: 'https://6z.com/images/game/551458.jpg'
        },
      ]
    }
  }
}
</script>