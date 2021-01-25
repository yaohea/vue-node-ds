<template>
  <div class="wrapper">
    <NavBar color="#fff" title="关于我们">
      <img slot="left" src="@/assets/img/fh.png" @click="$router.go(-1)" />
    </NavBar>
    <div class="box">
      <div class="box-h">
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa' }">关于项目</van-divider>
        newbee-mall 项目是一套电商系统，包括 newbee-mall 商城系统及 newbee-mall-admin 商城后台管理系统，基于 Spring Boot 2.X 及相关技术栈开发。
        前台商城系统包含首页门户、商品分类、新品上线、首页轮播、商品推荐、商品搜索、商品展示、购物车、订单结算、订单流程、个人订单管理、会员中心、帮助中心等模块。
        后台管理系统包含数据面板、轮播图管理、商品管理、订单管理、会员管理、分类管理、设置等模块。
      </div>
      <div class="box-b">
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa' }">项目地址</van-divider>
        <p class="mb-10">前端地址：</p>
        <p class="mb-10">后端地址：</p>
        <p class="mb-10">线上预览</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
export default {
  data() {
    return {
    }
  },
  components: {
    NavBar
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.box {
  padding: 0.4rem;
}
</style>
