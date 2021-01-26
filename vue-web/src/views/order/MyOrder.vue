<template>
  <div>
    <!-- <van-nav-bar title="订单" left-text="返回" left-arrow @click-left="$router.push('/mine')" /> -->
    <NavBar color="skyblue" title="我的订单" title-color="text-white">
      <img @click="$router.push('/mine')" slot="left" src="@/assets/img/fh.png" alt="" />
    </NavBar>
    <!-- 订单数据 -->

    <van-tabs v-model="active">
      <van-tab title="全部">
        <router-link tag="div" :to="`/detail/${item.goodsId}`" v-for="(item, index) in modules" :key="index" class="row">
          <van-row class="content">
            <!-- 商品顶部 -->
            <div>
              <van-col>
                <span class="title">订单时间{{ item.createdAt | date }}</span>
              </van-col>
            </div>
            <!-- 商品卡片 -->
            <van-col span="24"
              ><van-card centered :num="item.num" :price="item.price / 100" desc="限时秒杀！1小时后结束" :title="item.title" :thumb="$axios.defaults.baseURL + item.img">
                <template #tags>
                  <van-tag plain type="danger">12期免息</van-tag>
                  <van-tag plain type="danger">超级优惠</van-tag>
                </template>
                <template #footer> </template> </van-card
            ></van-col>
          </van-row>
        </router-link>
      </van-tab>
      <van-tab title="待付款" class="text-a-c">什么也没有</van-tab>
      <van-tab title="待发货" class="text-a-c"
        ><router-link tag="div" :to="`/detail/${item.goodsId}`" v-for="(item, index) in modules" :key="index" class="row">
          <van-row class="content">
            <!-- 商品顶部 -->
            <div>
              <van-col>
                <span class="title">订单时间{{ item.createdAt | date }}</span>
              </van-col>
            </div>
            <!-- 商品卡片 -->
            <van-col span="24"
              ><van-card centered :num="item.num" :price="item.price / 100" desc="限时秒杀！1小时后结束" :title="item.title" :thumb="$axios.defaults.baseURL + item.img">
                <template #tags>
                  <van-tag plain type="danger">12期免息</van-tag>
                  <van-tag plain type="danger">超级优惠</van-tag>
                </template>
                <template #footer> </template> </van-card
            ></van-col>
          </van-row> </router-link
      ></van-tab>
      <van-tab title="已完成" class="text-a-c">什么也没有</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
import dayjs from 'dayjs'
export default {
  data() {
    return {
      modules: [],
      active: 0
    }
  },
  methods: {
    async getData() {
      const { data: res } = await this.$axios.get('/get_order')
      res.reverse()
      this.modules = res

      // 计算价格
    },
    loadMore() {},
    getHomeMultidata() {}
  },
  computed: {},
  created() {
    this.getData()
  },
  mounted() {
    this.$nextTick(() => {
      // this.$refs.scroll.refresh()
    })
  },
  filters: {
    // date是键，val是传过来的值。 使用 {{ item.createdAt | date}}
    date(val) {
      return dayjs(val).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.row {
  padding: 0.28rem;
  .content {
    background-color: #fff;
    padding: 0.2rem 0.4rem 0 0.4rem;
    border-radius: 0.4rem;
  }
}
.title {
  font-size: 0.48rem;
  margin-left: 0.4rem;
}
</style>
