<template>
  <div id="Home">
    <NavBar color="#ff155e" title="首页" title-color="text-white">
      <img @click="$router.push('/category')" slot="left" src="@/assets/img/3.png" alt="" />
      <img @click="$router.push('/search')" slot="right" src="@/assets/img/search (2).png" alt="" />
    </NavBar>
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
      <home-goods></home-goods>
      <!--  -->
    <back-top></back-top>
    <!-- 底部 -->
    <div style="height: 2rem"></div>
    <TabBar class="w-100"></TabBar>
  </div>
</template>

<script>
import BackTop from '@/components/common/BackTop.vue'
import TabBar from '@/components/common/TabBar.vue'
import NavBar from '@/components/common/NavBar'
import { getHomeSwipe, getHomeicon } from '@/api/home'
import HomeGoods from '../components/my/HomeGoods.vue'
export default {
  data() {
    return {
      home_swipe: {},
      home_icon: {}
    }
  },
  methods: {
    // 轮播图数据获取
    async getHomeSwipe() {
      const { data: res } = await getHomeSwipe()
      this.home_swipe = res
    },
    // 图标获取
    async getHomeicon() {
      const { data: res } = await getHomeicon()
      this.home_icon = res
    }
  },
  created() {
    this.getHomeSwipe()
    this.getHomeicon()
  },
  components: {
    NavBar,
    TabBar,
    BackTop,
    HomeGoods
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
// // goods
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
