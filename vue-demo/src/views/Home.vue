<template>
  <div id="Home">
    <NavBar color="#ff155e" title="首页" title-color="text-white">
      <img @click="$router.push('/category')" slot="left" src="@/assets/img/3.png" alt="" />
      <img @click="$router.push('/mine')" slot="right" src="@/assets/img/5.png" alt="" />
    </NavBar>
    <!--  -->
    <!-- 轮播图 -->
    <div class="main">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#ff852a">
        <van-swipe-item v-for="item in home_swipe" :key="item.id"><img :src="$axios.defaults.baseURL + item.img" alt="" /></van-swipe-item>
      </van-swipe>
    </div>
    <!-- 推荐 -->
    <van-row class="nav">
      <div class="nav-content" v-for="(item, i) in home_icon" :key="i" @click="$router.push('/category')">
        <img class="w-100" :src="$axios.defaults.baseURL + item.img" alt="" />
        <p class="fs-12">{{ item.name }}</p>
      </div>
    </van-row>
    <!-- goods -->
    <!-- <div>
      <img class="w-100" src="@/assets/img/like.png" alt="" />
    </div> -->
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

    <!-- <back-top @click.native="backClick" v-show="isShowBackTop"></back-top> -->
    <!-- 底部 -->
    <div style="height: 2.4rem"></div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Scroll from '@/components/common/Scroll'
import TabBar from '@/components/common/TabBar.vue'
import NavBar from '@/components/common/NavBar'
import { getHomeSwipe, getHomeLists, getHomeicon } from '@/api/home'
export default {
  data() {
    return {
      home_swipe: {},
      home_list: { page: 0, list: [] },
      home_icon: {},
      isShowBackTop: false,
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  methods: {
    // 轮播图数据获取
    async getHomeSwipe() {
      const { data: res } = await getHomeSwipe()
      this.home_swipe = res
    },
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
    // 图标获取
    async getHomeicon() {
      const { data: res } = await getHomeicon()
      this.home_icon = res
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
    this.getHomeSwipe()
    this.getHomeList()
    this.getHomeicon()
  },
  components: {
    NavBar,
    TabBar,
    Scroll
  },
  mounted() {
    this.$toast.setDefaultOptions({ duration: 300 })
    this.$toast.loading({
      message: '加载中...',
      forbidClick: true
    })
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: calc(100vh - 3.76rem);
}
// 轮播
.main {
  img {
    width: 100%;
    vertical-align: middle;
  }
}
.nav {
  background-color: #fff;
  padding: 0 0.4rem 0.4rem;
  .nav-img {
    display: flex;
    width: 20%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 0.4rem 0.6rem 0.4rem;
    margin-top: 0.4rem;
    img {
      width: 100%;
    }
  }
}
// nav
.nav,
.nav-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .nav-content {
    width: 20%;
  }
}
// goods
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
