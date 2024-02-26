<template>
  <div class="addHomeWindow alert position-fixed w-100 fade show" role="alert">
    <div class="addHomeWindowTop d-flex align-items-center mb-2">
      <img src="https://6z.com/img/logo_pwa.2b1da7fa.png" class="img-fluid me-3" alt="" />
      <p class="m-0">
        Gostaríamos de adicionar o 6Z à sua tela inicial para as últimas apostas grátis e
        atualizações de bônus.
      </p>
    </div>
    <div class="addHomeWindowBottom d-flex justify-content-end align-items-center">
      <span type="button" data-bs-dismiss="alert">Cancelar</span>
      <button type="button" class="btn continueBtn ms-4" data-bs-dismiss="alert">Continuar</button>
    </div>
  </div>
</template>
<style scoped>
.addHomeWindow {
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
.addHomeWindow img {
  width: 4rem;
  height: 4rem;
}
.addHomeWindow .continueBtn {
  border: none;
  color: var(--fff);
  background: var(--greenGradient);
}
</style>
