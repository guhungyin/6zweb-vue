<script>
import commissionRulesModal from '@/components/affiliate/commissionRulesModal.vue'
import FaqView from '@/components/affiliate/page/FaqView.vue'
import PaymentsView from '@/components/affiliate/page/PaymentsView.vue'
import ReferralsView from '@/components/affiliate/page/ReferralsView.vue'
import ReportView from '@/components/affiliate/page/ReportView.vue'
import SummaryView from '@/components/affiliate/page/SummaryView.vue'
export default {
  components: {
    commissionRulesModal,
    FaqView,
    PaymentsView,
    ReferralsView,
    ReportView,
    SummaryView
  }
}
</script>
<template>
  <div class="routerView">
    <div class="headerBack d-flex justify-content-between align-items-center px-2">
      <h2 class="title">Afiliado - Ganhe R$10000 por mês</h2>
      <router-link to="/" class="closeBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#FFFFFF"
          class="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </router-link>
    </div>
    <div class="container-fluid affiliateWindow">
      <div class="tabs mb-2" id="list-tab" role="tablist">
        <div
          class="list-group-item list-group-item-action tabItem px-1 active"
          id="list-summary-list"
          data-bs-toggle="list"
          href="#list-summary"
          role="tab"
          aria-controls="list-summary"
        >
          PAINEL
        </div>
        <div
          class="list-group-item list-group-item-action tabItem px-1"
          id="list-referrals-list"
          data-bs-toggle="list"
          href="#list-referrals"
          role="tab"
          aria-controls="list-referrals"
        >
          REFERÊNCIAS
        </div>
        <div
          class="list-group-item list-group-item-action tabItem px-1"
          id="list-report-list"
          data-bs-toggle="list"
          href="#list-report"
          role="tab"
          aria-controls="list-report"
        >
          RELATÓRIO
        </div>
        <div
          class="list-group-item list-group-item-action tabItem px-1"
          id="list-payments-list"
          data-bs-toggle="list"
          href="#list-payments"
          role="tab"
          aria-controls="list-payments"
        >
          PAGAMENTOS
        </div>
        <div
          class="list-group-item list-group-item-action tabItem px-1"
          id="list-faq-list"
          data-bs-toggle="list"
          href="#list-faq"
          role="tab"
          aria-controls="list-faq"
        >
          FAQ
        </div>
        <div class="tabItem px-1" data-bs-toggle="modal" data-bs-target="#commissionRulesModal">
          TUTORIAL
        </div>
      </div>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="list-summary"
          role="tabpanel"
          aria-labelledby="list-summary-list"
        >
          <SummaryView></SummaryView>
        </div>
        <div
          class="tab-pane fade"
          id="list-referrals"
          role="tabpanel"
          aria-labelledby="list-referrals-list"
        >
          <ReferralsView></ReferralsView>
        </div>
        <div
          class="tab-pane fade"
          id="list-report"
          role="tabpanel"
          aria-labelledby="list-report-list"
        >
          <ReportView></ReportView>
        </div>
        <div
          class="tab-pane fade"
          id="list-payments"
          role="tabpanel"
          aria-labelledby="list-payments-list"
        >
          <PaymentsView></PaymentsView>
        </div>
        <div class="tab-pane fade" id="list-faq" role="tabpanel" aria-labelledby="list-faq-list">
          <FaqView></FaqView>
        </div>
      </div>
    </div>
    <commissionRulesModal></commissionRulesModal>
  </div>
</template>
<style scoped>
.app .headerBack {
  background-color: #009d80;
  z-index: 1;
}
.app .headerBack .title {
  color: #ffe800;
}
.affiliateWindow {
  margin-top: 4rem;
  max-width: 34rem;
  background-color: #ededed;
  height: calc(100vh - 4rem);
  padding-bottom: 1.5rem;
}
.tabs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.2rem;
}
.tabs::-webkit-scrollbar {
  display: none;
}
.tabs a {
  flex: 1;
}
.list-group-item.active {
  box-shadow: inset 0 -1px #009d80;
}
.tabs .tabItem {
  cursor: pointer;
  font-size: 0.8rem;
  color: #808080;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: auto;
}
</style>
