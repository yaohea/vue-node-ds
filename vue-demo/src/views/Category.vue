<template>
  <div id="classify">
    <!-- 搜索 -->
    <NavBar color="#fff">
      <img slot="left" src="@/assets/img/fh.png" @click="$router.push('/')" />
    </NavBar>
    <!-- 分类选择器 -->
    <van-tree-select height="150vw" :items="items" :main-active-index.sync="active" @click-nav="get">
      <template #content>
        <div v-for="(item, index) in module" :key="item._id" v-show="active === index">
          <p>热门分类</p>
          <van-row class="c-row" type="flex">
            <van-col v-for="item2 in item.children" :key="item2.id" class="col-img" span="7">
              <router-link :to="`/goods_list/${item2.categoryId}`">
                <img :src="$axios.defaults.baseURL + item2.img" alt="" />
                <p class="fs-12">{{ item2.name }}</p>
              </router-link>
            </van-col>
          </van-row>
        </div>
      </template>
    </van-tree-select>
    <!--  -->
    <div style="height: 2.4rem"></div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/common/TabBar.vue'
import NavBar from '@/components/common/NavBar'
export default {
  data() {
    return {
      active: 0,
      module: {},
      items: [{ text: '手机数码' }]
    }
  },
  methods: {
    async getData() {
      const { data: res } = await this.$axios.get('/categories')
      this.module = res
      this.items = this.module.map((val) => {
        return {
          text: val.name
        }
      })
    },
    get(index) {
      console.log(index)
    }
  },
  components: {
    NavBar,
    TabBar
  },
  created() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>

.c-row {
  margin-top: 1.2rem;
  text-align: center;

  .col-img {
    width: 33%;
    img {
      width: 100%;
    }
  }
}
</style>
