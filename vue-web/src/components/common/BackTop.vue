<template>
  <div id="goTop">
    <div v-show="goTopShow" @click="goTop">
      <img src="@/assets/img/backtop.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: '',
      goTopShow: false
    }
  },
  watch: {
    scrollTop(val) {
      if (this.scrollTop > 500) {
        this.goTopShow = true
      } else {
        this.goTopShow = false
      }
    }
  },
  methods: {
    handleScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (this.scrollTop > 500) {
        this.goTopShow = true
      }
    },
    goTop() {
      let timer = null
      const _that = this
      cancelAnimationFrame(timer)
      timer = requestAnimationFrame(function fn() {
        if (_that.scrollTop > 0) {
          _that.scrollTop -= 250
          document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop
          timer = requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(timer)
          _that.goTopShow = false
        }
      })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
#goTop {
  position: fixed;
  right: 0.32rem;
  bottom: 2.4rem;

  img {
  width: 1.72rem;
  height: 1.72rem;
}
}

</style>
