<template>
  <div
    class="modal fade alertsModal"
    id="alertsModal"
    tabindex="-1"
    aria-labelledby="alertsModalLabel"
    aria-hidden="true"
    data-bs-backdrop="false"
  >
    <div class="modal-dialog modal-dialog-centered px-4">
      <div class="modal-content py-2">
        <div class="modal-body text-center py-3" id="errorTips"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.alertsModal .modal-content {
  background-color: #1c1c1c;
  color: var(--fff);
  width: 80%;
  margin: auto;
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
