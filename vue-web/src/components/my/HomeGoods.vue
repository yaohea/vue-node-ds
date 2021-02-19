<template>
  <div>
    <div class="goods">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :immediate-check="false">
          <ul class="goods-c">
            <router-link :to="`/detail/${item.goodsId}`" tag="li" v-for="item in home_list.list" :key="item.id" class="goods-n">
              <img class="goods-m" v-lazy="$axios.defaults.baseURL + item.img" alt="" />
              <p>
                <img src="@/assets/img/4.png" alt="" />
                {{ item.title }}
              </p>
              <p class="goods-pp">
                <span style="color: red">￥{{ item.price }}</span
                ><span class="goods-pr fs-12">看相似</span>
              </p>
            </router-link>
          </ul>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { getHomeLists } from '@/api/home'
export default {
  data() {
    return {
      home_list: { page: 0, list: [] },
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  methods: {
    // 商品列表获取
    async getHomeList() {
      const page = this.home_list.page + 1
      // 发送请求
      console.log(page)
      const { data: res } = await getHomeLists(page)
      // push到数组
      this.home_list.list.push(...res)
      // 页码+1
      this.home_list.page += 1
      // 发送再次上拉刷新请求
      // 刷新
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        if (this.refreshing) {
          this.home_list.list = []
          this.home_list.page = 0
          this.refreshing = false
        }
        // 再次获取数据
        this.getHomeList()
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.home_list.list.length >= 15) {
          this.finished = true
          this.isShowBackTop = true
        }
      }, 1000)
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    }
  },
  created() {
    this.getHomeList()
  }
}
</script>

<style lang="scss" scoped>
.goods {
  padding: 0 0.12rem;
  .goods-c {
    display: flex;
    flex-wrap: wrap;
    li {
      flex: 0 0 48%;
      margin: 0 0.12rem;
      margin-top: 0.4rem;
      background-color: #fff;
      .goods-m {
        width: 100%;
      }
      p {
        font-size: 0.56rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        img {
          width: 1.2rem;
        }
      }
    }
    :nth-child(2n-1) {
      padding-right: 0.2rem;
    }
    :nth-child(2n) {
      padding-left: 0.2rem;
    }
  }
}
.goods-pr {
  float: right;
  color: #666;
  padding: 0.12rem;
  background-color: #f0f2f5;
  border-radius: 0.4rem;
}
.goods-n {
  padding-bottom: 0.4rem;
}
</style>

