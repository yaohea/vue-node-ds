<template>
  <div>
    <NavBar color="#fff" title="商品列表">
      <img slot="left" src="@/assets/img/fh.png" @click="$router.push('/category')" />
    </NavBar>
    <Card :dataList="home_list"></Card>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
import Card from '@/components/common/Card'
export default {
  props: ['id'],
  data() {
    return {
      home_list: {}
    }
  },
  methods: {
    async getHomeList() {
      const { data: res } = await this.$axios.get(`/goods_list/${this.id}`)
      this.home_list = res
      console.log(this.home_list)
    }
  },
  created() {
    this.getHomeList()
  },
  components: {
    NavBar,
    Card
  }
}
</script>
<style lang="scss" scoped>

</style>
