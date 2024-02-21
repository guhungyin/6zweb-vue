<script>
    import CloseBtn from '../components/CloseBtn.vue';
    export default {
        data() {
            return {
                depositData:[
                    {
                        title: 'PIX',
                        chip: '20',
                        time: '21/02/2024 00:02',
                        state: 'Cancelado',
                    },
                    {
                        title: 'PIX',
                        chip: '20',
                        time: '21/02/2024 00:02',
                        state: 'Finish',
                    },
                    {
                        title: 'PIX',
                        chip: '20',
                        time: '21/02/2024 00:02',
                        state: 'Cancelado',
                    },
                    {
                        title: 'PIX',
                        chip: '20',
                        time: '21/02/2024 00:02',
                        state: 'Finish',
                    },
                    {
                        title: 'PIX',
                        chip: '20',
                        time: '21/02/2024 00:02',
                        state: 'Cancelado',
                    },
                    {
                        title: 'PIX',
                        chip: '20',
                        time: '21/02/2024 00:02',
                        state: 'Finish',
                    },
                    {
                        title: 'PIX',
                        chip: '20',
                        time: '21/02/2024 00:02',
                        state: 'Cancelado',
                    },
                    {
                        title: 'PIX',
                        chip: '20',
                        time: '21/02/2024 00:02',
                        state: 'Cancelado',
                    },
                ]
            }
        },
        components: {
            CloseBtn
        },
    }
</script>
<template>
    <header class="headerBack d-flex justify-content-between align-items-center px-2">
        <h2 class="title">Transações</h2>
        <CloseBtn></CloseBtn>
    </header>
    <div class="main transactionsWindows">
        <div class="container-fluid">
            <div class="row flex-column">
                <div class="col py-2">
                    <div class="tab d-flex" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action active" id="list-deposit-list" data-bs-toggle="list" href="#list-deposit" role="tab" aria-controls="list-deposit">
                            <span class="pb-2">Depósitos</span>
                        </a>
                        <a class="list-group-item list-group-item-action" id="list-Saques-list" data-bs-toggle="list" href="#list-Saques" role="tab" aria-controls="list-Saques">
                            <span class="pb-2">Saques</span>
                        </a>
                        <a class="list-group-item list-group-item-action" id="list-bonus-list" data-bs-toggle="list" href="#list-bonus" role="tab" aria-controls="list-bonus">
                            <span class="pb-2">Bônus</span>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane vanList fade show active" id="list-deposit" role="tabpanel" aria-labelledby="list-deposit-list">
                            <ul class="p-0">
                                <li v-for="item in depositData" :key="item" class="py-3">
                                    <div class="vanListMain d-flex justify-content-between align-items-center mb-3">
                                        <span class="mainTitle">{{item.title}}</span>
                                        <span class="mainChip">{{item.chip}}</span>
                                    </div>
                                    <div class="vanListFooter d-flex justify-content-between align-items-center">
                                        <span class="time">{{item.time}}</span>
                                        <span class="state">{{item.state}}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="list-Saques" role="tabpanel" aria-labelledby="list-Saques-list">
                            <div class="noData">
                                <img src="https://6z.com/img/no.be12751c.svg" alt="">
                                <span>Sem Transações</span>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="list-bonus" role="tabpanel" aria-labelledby="list-bonus-list">
                            <div class="noData">
                                <img src="https://6z.com/img/no.be12751c.svg" alt="">
                                <span>Sem Transações</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .tab .list-group-item{
        color: var(--fff);
        text-align: center;
    }
    .tab .list-group-item.active span{
        color: #56b83f;
        box-shadow: inset 0 -2px 0 0px #56b83f;
    }
    .tab-content{
        height: 74vh;
        overflow-y: auto;
    }
    .tab-pane{
        color: #999;
        font-size: .9rem;
    }
    .tab-pane li{
        box-shadow: inset 0 -1px 0 0px #3f3f3f;
    }
    .tab-pane .vanListMain .mainTitle{
        color: var(--fff);
    }
    .tab-pane .vanListMain .mainChip.green{
        color: #33d100;
    }
    .tab-pane .vanListMain .mainChip.red{
        color: red;
    }
    .noData{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #787878;
        margin-top: 5rem;
    }
    .noData img{
        width: 3.2rem;
        margin-bottom: 1rem;
    }
</style>