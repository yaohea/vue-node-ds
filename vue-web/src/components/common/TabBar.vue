<template>
  <div class="w-100 TabBar">
    <van-tabbar v-model="active" route  class="w-100">
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/shop" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>
<style scoped>
.TabBar {
  overflow: hidden;
}
</style>
