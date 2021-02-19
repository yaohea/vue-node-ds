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
  methods: {
    handleScroll() {
      if (document.documentElement.scrollTop > 500) {
        this.goTopShow = true
      } else {
        this.goTopShow = false
      }
    },
    goTop() {
      const h = setInterval(() => {
        if (document.documentElement.scrollTop === 0) {
          clearInterval(h)
        }
        document.documentElement.scrollTop -= 30
      }, 10)
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
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
