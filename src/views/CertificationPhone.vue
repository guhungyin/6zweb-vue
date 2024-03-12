<script>
    import CloseBtn from '../components/CloseBtn.vue';
    export default {
        components: {
            CloseBtn
        },
    }
</script>
<template>
  <div class="routerView">
    <div class="headerBack d-flex justify-content-between align-items-center px-2">
      <h2 class="title">Certificação</h2>
      <CloseBtn></CloseBtn>
    </div>
    <div class="container-fluid mt-3 certificationWindows">
      <div class="user mb-3">
        <img class="mb-2" src="https://vovo2000.com/images/9538.jpg" width="88" height="88" alt="">
        <span>Bem Vindo, XXX</span>
      </div>
      <div class="phone mb-4">
        <span>+55</span>
        <input class="form-control py-3" type="text" placeholder="Número de Celular">
      </div>
      <div class="certificationPhoneTip mb-5">
        <span class="tips">!</span>
        <span>O número do celular será usado para verificar se seu dinheiro está seguro quando você tentar sacar</span>
      </div>
      <button type="button" class="btn continueBtn w-100 mb-4">Continuar</button>
    </div>
  </div>
</template>
<style scoped>
  .certificationWindows{
    color: var(--fff);
  }
  .certificationWindows .user{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .certificationWindows .user img{
    border-radius: 50%;
  }
  .certificationWindows .phone{
    display: flex;
    align-items: center;
    padding: 0 2%;
    background: #494949;
    border-radius: 4px;
    color: #868686;
  }
  .certificationWindows .phone input{
    border: none;
    background: none;
    flex: 1;
    height: 100%;
    color: #868686;
  }
  .certificationWindows .phone input:focus{
    box-shadow: none;
  }
  .certificationWindows .certificationPhoneTip{
    display: flex;
    align-items: center;
    font-size: .9rem;
  }
  .certificationWindows .certificationPhoneTip .tips{
    background-color: #3b3b3b;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    min-width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    color: #bd271d;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .certificationWindows .continueBtn{
    background: var(--greenGradient);
    color: var(--fff);
    border: none;
    opacity: .4;
    border-radius: 2px;
    padding: 0.56rem 0;
  }
  .certificationWindows .continueBtn.active{
    opacity: 1;
  }
</style>