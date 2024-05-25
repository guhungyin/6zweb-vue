<template>
  <LuckyWheel
    class="luckyWheelContent"
    ref="myLucky"
    width="339"
    height="339"
    :prizes="prizes"
    :blocks="blocks"
    :buttons="buttons"
    @start="startCallback"
    @end="endCallback"
  />
</template>
<script>
import { useActivityStore } from '@/stores/modules/activity'
import { ref } from 'vue'
export default {
  data() {
    return {
      preTotalBonus: '0.00',
      totalBonus: '0.00',
      bonus: '0.00',
      remainingBonus: '100.00',
      preRemainingBonus: '0.00',
      point: 2,
      fixedBonus: '',
      blocks: [
        {
          imgs: [
            {
              src: 'https://wins888.vip/images/turnplate/spinBg.png',
              width: '100%',
              height: '100%',
              rotate: true
            }
          ]
        }
      ],
      prizes: [
        {
          range: 5,
          imgs: [
            {
              src: 'https://wins888.vip/images/turnplate/spin-1.png',
              top: '30',
              width: '30%'
            }
          ]
        },
        {
          range: 90,
          fonts: [
            {
              text: '0.01',
              fontColor: '#ffd760',
              fontSize: '25',
              fontWeight: '700',
              top: '30'
            }
          ]
        },
        {
          range: 95,
          imgs: [
            {
              src: 'https://wins888.vip/images/turnplate/spin-4.png',
              top: '30',
              width: '20%'
            }
          ]
        },
        {
          range: 1,
          fonts: [
            {
              text: '10',
              fontColor: '#ffd760',
              fontSize: '25',
              fontWeight: '700',
              top: '30'
            }
          ]
        },
        {
          range: 5,
          imgs: [
            {
              src: 'https://wins888.vip/images/turnplate/spin-1.png',
              top: '30',
              width: '30%'
            }
          ]
        },
        {
          range: 0,
          fonts: [
            {
              text: 'menção\ndireta',
              fontColor: '#ffd760',
              fontSize: '20',
              wordWrap: false,
              fontWeight: '700',
              top: '30'
            }
          ]
        },
        {
          range: 0.1,
          fonts: [
            {
              text: '50',
              fontColor: '#b90615',
              fontSize: '25',
              fontWeight: '700',
              top: '30'
            }
          ]
        },
        {
          range: 0,
          fonts: [
            {
              text: '1000',
              fontColor: '#ffd760',
              fontSize: '25',
              fontWeight: '700',
              top: '30'
            }
          ]
        }
      ],
      buttons: [
        {
          radius: '60',
          imgs: [
            {
              src: 'https://wins888.vip/images/turnplate/draw.png',
              width: '100%',
              top: '-50'
            }
          ],
          pointer: true,
          fonts: [
            {
              text: this.activityStore.showText,
              top: '-5',
              fontColor: '#fff',
              fontSize: '20',
              fontWeight: '700'
            }
          ]
        }
      ]
    }
  },
  methods: {
    countFinished() {
      this.$refs.myLucky.buttons[0].fonts[0].text = this.activityStore.showText
    },
    animateValue(start, end) {
      // let range = parseFloat(end) - start
      let current = start
      let stepTime = 20

      let increment = parseFloat(end) > start ? 1 : -1

      if (parseFloat(end) <= 3.0) {
        increment = parseFloat(end) > start ? 0.01 : -0.01
        stepTime = 50
      }

      //let stepTime = Math.abs(Math.floor(duration / range))

      console.log('间隔时间: ', stepTime)

      let thant = this

      let timer = setInterval(function () {
        current += increment
        thant.$refs.myLucky.buttons[0].fonts[0].text = current.toFixed(2)

        if (increment !== 0.01 && parseFloat(end) - current <= 3.0) {
          increment = 0.01
        }

        if (current >= parseFloat(end)) {
          clearInterval(timer)

          setTimeout(() => {
            thant.activityStore.preRemainingBonus = thant.preRemainingBonus
            thant.activityStore.remainingBonus = thant.remainingBonus
            thant.activityStore.preTotalBonus = thant.preTotalBonus
            thant.activityStore.totalBonus = thant.totalBonus
          }, 2000)
        }
      }, stepTime)
    },

    // 点击抽奖按钮会触发star回调
    startCallback() {
      if (!this.activityStore.logged) {
        this.$router.push({
          name: 'login'
        })
        return
      }

      // 更新可轉動次數
      let buttonsNum = parseInt(this.$refs.myLucky.buttons[0].fonts[0].text)
      if (buttonsNum > 0) {
        if (this.$route.path === '/cashwheel') {
          this.$refs.myLucky.buttons[0].fonts[0].text = (buttonsNum - 1).toString()
          // 调用抽奖组件的play方法开始游戏
          this.$refs.myLucky.play()
          // 模拟调用接口异步抽奖

          this.activityStore
            .luckyStar()
            .then((res) => {
              // console.log('抽奖返回:', res)
              this.point = res.data.point
              this.$refs.myLucky.stop(res.data.point)

              if (res.data.point === 0 || res.data.point === 1 || res.data.point === 4) {
                this.activityStore.bonus = res.data.bonus
                this.preTotalBonus = this.activityStore.totalBonus
                this.totalBonus = res.data.totalBonus
                this.preRemainingBonus = this.activityStore.remainingBonus
                this.remainingBonus = res.data.remainingBonus
              } else {
                this.fixedBonus = res.data.bonus
              }

              this.activityStore.showText = res.data.remainingLotteryDraws
            })
            .catch((err) => {
              console.log('抽奖错误:', err.message)
              this.$refs.myLucky.stop(2)
            })
        } else if (this.$route.path === '/') {
          this.$router.push({
            name: 'cashwheel'
          })
        }

        // setTimeout(() => {
        //   // 假设后端返回的中奖索引是0
        //   //   const index = 0
        //   // 调用stop停止旋转并传递中奖索引
        //   this.$refs.myLucky.stop(8)
        // }, 3000)
      }
      this.handleButtonClick()
    },
    // 抽奖结束会触发end回调 可以取得該獎品內容及機率
    endCallback() {
      if (this.point === 0 || this.point === 1 || this.point === 4) {
        this.animateValue(0.0, this.activityStore.bonus)
      } else {
        this.$emit('withdraw-alert', this.fixedBonus)
      }
    },
    // 首頁轉盤使用 在首頁點擊轉盤按鈕後，下次再進來就不會再出現
    handleButtonClick() {}
  },

  setup() {
    const activityStore = useActivityStore()
    const bonustext = ref('6')

    return {
      activityStore,
      bonustext
    }
  }
}
</script>
