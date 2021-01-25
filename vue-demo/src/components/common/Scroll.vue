<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null
    }
  },
  components: {
    BScroll
  },
  methods: {
    // 重新计算高度
    refresh() {
      setTimeout(() => {
        this.scroll && this.scroll.refresh()
      }, 100)
      console.log('shuax')
    },
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    // 上拉加载完成，再次请求上拉
    finishPullUP() {
      setTimeout(() => {
        this.scroll && this.scroll.finishPullUp()
      }, 1000)
    },
    // 下拉加载完成，再次请求上拉
    pullingDown() {
      this.scroll.finishPullDown()
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 滚动等级
      probeType: 1,
      // 上拉
      pullUpLoad: true,
      // 点击
      click: true
    })
    // 2监听滚动的位置
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })
    // 3.监听上拉
    this.scroll.on('pullingUp', () => {
      // 刷新
      this.refresh()
      // 发送
      this.$emit('pullingUp')
    })
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
// height: 160px!important;
// position: absolute;
// left: 0;
// top: 0;
// overflow: hidden;
}
</style>
