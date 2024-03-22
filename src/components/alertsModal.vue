<template>
  <div
    class="modal fade alertsModal"
    id="alertsModal"
    tabindex="-1"
    aria-labelledby="alertsModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered px-4">
      <div class="modal-content py-2">
        <div class="modal-body text-center py-5" id="errorTips"></div>
        <!-- <div class="modal-footer justify-content-around border-0">
                    <button type="button" class="btn px-4 py-2 m-0 border-0 cancel" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn px-4 py-2 m-0 border-0 continue">Continuar</button>
                </div> -->
      </div>
    </div>
  </div>
</template>
<style scoped>
.alertsModal .modal-content {
  background-color: #1c1c1c;
  color: var(--fff);
}
.alertsModal .modal-content .cancel {
  color: var(--fff);
  background: linear-gradient(180deg, #303030, #494949);
  font-size: 0.85rem;
}
.alertsModal .modal-content .continue {
  color: var(--fff);
  background: linear-gradient(180deg, #5519cd, #9449ff);
  font-size: 0.85rem;
}
</style>
