<template>
  <div
    class="modal fade committeeModal"
    id="committeeModal"
    tabindex="-1"
    aria-labelledby="committeeModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h5 class="modal-title" id="totalModalLabel">Regras de recompensas por comissão</h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#98a7b5"
            class="bi bi-x closeBtn"
            viewBox="0 0 16 16"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
            ></path>
          </svg>
        </div>
        <div class="modal-body">
          <table class="table table-dark table-striped table-borderless text-center">
            <thead>
              <tr>
                <th>Nivel Agente</th>
                <th>LApostas Validasast</th>
                <th>Comissão</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>0+</td>
                <td>1.6%</td>
              </tr>
              <tr>
                <td>2</td>
                <td>100 mil+</td>
                <td>1.7%</td>
              </tr>
              <tr>
                <td>3</td>
                <td>300 mil+</td>
                <td>1.8%</td>
              </tr>
              <tr>
                <td>4</td>
                <td>500 mil+</td>
                <td>1.9%</td>
              </tr>
              <tr>
                <td>5</td>
                <td>1 milhão+</td>
                <td>2.0%</td>
              </tr>
              <tr>
                <td>6</td>
                <td>3 milhão+</td>
                <td>2.1%</td>
              </tr>
              <tr>
                <td>7</td>
                <td>5 milhão+</td>
                <td>2.2%</td>
              </tr>
              <tr>
                <td>8</td>
                <td>10 milhão+</td>
                <td>2.3%</td>
              </tr>
              <tr>
                <td>9</td>
                <td>30 milhão+</td>
                <td>2.4%</td>
              </tr>
              <tr>
                <td>10</td>
                <td>50 milhão+</td>
                <td>2.5%</td>
              </tr>
              <tr>
                <td>11</td>
                <td>100 milhão+</td>
                <td>2.6%</td>
              </tr>
            </tbody>
          </table>
          <div class="text-center mb-2">• A apostas válidas depende dos diferentes jogos:</div>
          <div class="wagerBlock py-3 px-3 mb-3 align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#98a7b5"
              class="bi bi-exclamation-circle-fill me-3"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
              />
            </svg>
            Os tipos de crash e os jogos virtuais não serão considerados apostas válidas
          </div>
          <div class="wagerBlock py-3 px-3 flex-column mb-3">
            <div class="d-flex align-items-center">
              <span class="wagerPercent me-2">100%</span>
              De aposta
            </div>
            <div class="d-flex">
              Jogos：
              <span class="ms-2">Live Casino, 3rd Party</span>
            </div>
          </div>
          <div class="wagerBlock py-3 px-3 flex-column mb-3">
            <div class="d-flex align-items-center">
              <span class="wagerPercent me-2">100%</span>
              De aposta
            </div>
            <div class="d-flex">
              Jogos：
              <span class="ms-2">Os outros jogos originais</span>
            </div>
          </div>
          <div
            class="wagerBlock py-2 px-3 mb-3 justify-content-between"
            data-bs-toggle="modal"
            data-bs-target="#commissionRulesModal"
          >
            Regras de cálculo de comissão
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#98a7b5"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
          <ul class="ruleList">
            <li class="mb-3">
              As comissões podem ser retiradas em nossa carteira wins888 do painel a qualquer
              momento.
            </li>
            <li class="mb-3">O sistema calcula a comissão a cada 24 horas.</li>
            <li class="mb-3">Comissão máxima diária : 10000 BRL</li>
            <li class="mb-3">
              A comissão não será creditada para o mesmo IP ou dispositivo, e a inflação intencional
              do volume de negócios não será creditada para a comissão.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.committeeModal {
  position: absolute;
}
.modal-fullscreen {
  max-width: 34rem;
}
.modal-body::-webkit-scrollbar {
  display: none;
}
.committeeModal .modal-content {
  background-color: #1f2024;
  color: #98a7b5;
}
.committeeModal .modal-content .modal-header {
  background-color: #17181c;
}
.committeeModal .modal-content .modal-title {
  color: #98a7b5;
  font-size: 0.95rem;
}
.committeeModal .table {
  background-color: #0e1319;
}
.committeeModal .table th,
.committeeModal .table td {
  color: #98a7b5;
  font-size: 0.9rem;
}
.committeeModal .table tbody td:nth-child(3) {
  color: #db922b;
}
.committeeModal .wagerBlock {
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;
  background-color: #25262b;
}
.committeeModal .wagerBlock .wagerPercent {
  font-size: 2rem;
  color: var(--fff);
}
.committeeModal .ruleList {
  font-size: 0.9rem;
  list-style-type: disc;
}
</style>
