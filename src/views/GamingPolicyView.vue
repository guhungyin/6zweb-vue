<script>
    import CloseBtn from '../components/CloseBtn.vue';
    export default {
        components: {
            CloseBtn
        },
    }
</script>
<template>
    <header class="headerBack d-flex justify-content-between align-items-center px-2">
        <h2 class="title">Underage Gaming Policy (18+ to play clause)</h2>
        <CloseBtn></CloseBtn>
    </header>
    <div class="gamingPolicyWindows container-fluid mt-2">
        <h1 class="fw-bold">Self-Exclusion</h1>
        <p>Please read this information carefully for your own benefit.</p>
        <p>6z is operated by Dubet N.V. having its office at Zuikertuintjeweg Z/N, Zuikertuin Tower, Curacao and with Company Registration number 160628.</p>
        <div>
            <p>6z realizes that for some customers gambling might be a serious problem. In this respect, you can send an email to Customer Support Department requesting to:</p>
            <ul>
                <li>• set a limit on the amount you may wager within a specified period of time,</li>
                <li>• set a limit on the amount you may lose within a specified period of time,</li>
                <li>• set a limit on the amount of time you may play during one session,</li>
                <li>• set a limit on self-exclusion time, • set a limit on the time spent on the website.</li>
            </ul>
        </div>
        <p>If you feel that you may have lost control of your gambling, we offer a self-exclusion option. Self-Exclusion means, that you exclude yourself, out of your own choice, from all gambling services. This exclusion cannot be undone for a set amount of time.</p>
        <p>If you wish to self-exclude yourself from gambling, just send a message to our Customer Support Department at support@6z using your Registered Email Address that you wish to SELF-EXCLUDE and give them a time span between 6 months and 5 years. This request will take effect within 24 hours from the moment of its receipt. In this case your account will be disabled, and you won’t be able to login to it.</p>
        <p>During the applicable self-exclusion period, if you succeed in opening an account, depositing, and playing, all your bets shall be voided by 6z, and all your deposits will be returned back to you, with an applied deduction equivalent of the transaction processing fees. This will occur immediately upon detection, and you agree to waive all claims relating to the respective accounts.</p>
        <p>Reasonable endeavors will be used to enforce your self-exclusion. However, you acknowledge that the primary responsibility for controlling your behavior lies with you, thus you accept that we will not be liable if you continue gambling and/or seek to use the Website and we fail to recognize or determine that.</p>
    </div>
</template>
<style scoped>
.gamingPolicyWindows{
padding-bottom: 6rem;
    color: var(--fff);}
.gamingPolicyWindows h1{color: #fcde26;}
.gamingPolicyWindows div{
    border-bottom: 1px solid #3f3f3f;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
}
</style>