<template>
  <div>
    <NavBar color="#000">
      <img slot="left" src="@/assets/img/fh.png" @click="$router.push('/home')" />
      <div class="search-i" slot="search"><input placeholder="小米" type="text" @keyup.enter="getHomeList" v-model="item" v-focus /></div>
      <img @click="getHomeList" slot="right" src="@/assets/img/search (4).png" alt="" />
    </NavBar>
    <Card :dataList="home_list"></Card>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
import Card from '@/components/common/Card'
export default {
  // props: ['id'],
  data() {
    return {
      home_list: {},
      item: ''
    }
  },
  methods: {
    async getHomeList() {
      if (this.item !== '') {
        const { data: res } = await this.$axios.get('/search', { params: { name: this.item } })
        this.home_list = res
        console.log(res)
      }
    }
  },
  created() {},
  components: {
    NavBar,
    Card
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
