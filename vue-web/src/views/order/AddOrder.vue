<template>
  <div>
    <!-- 搜索       点击携带ID跳转过去，那边接收ID  跳转回来的时候再把ID给回来 -->
    <NavBar color="#fff" title="提交订单">
      <img slot="left" src="@/assets/img/fh.png" @click="shop()" />
    </NavBar>
    <!-- 联系人 -->
    <van-contact-card type="edit" :name="currentContact.name" :tel="currentContact.tel" @click="onEdit" />
    <div>
      <!-- 购物车数据 -->
      <div v-for="(item, index) in modules" :key="index" class="row">
        <van-row class="content">
          <!-- 商品卡片 -->
          <van-col span="24"
            ><van-card centered :num="item.num" :price="item.price / 100" desc="限时秒杀！1小时后结束" :title="item.title" :thumb="$axios.defaults.baseURL + item.img">
              <template #tags>
                <van-tag plain type="danger">12期免息</van-tag>
                <van-tag plain type="danger">超级优惠</van-tag>
              </template>
            </van-card></van-col
          >
        </van-row>
      </div>
      <!-- 提交 -->
      <div style="height: 2rem"></div>
      <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit" />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
import { getOrderData, defaultAddress, onSubmit, deleteOrder, deleteGoodsCart } from '@/api/addOrder'
export default {
  // props: ['id'],
  data() {
    return {
      modules: [],
      currentContact: {
        name: '',
        tel: ''
      }
    }
  },
  methods: {
    async onEdit() {
      this.$router.push('/address-list')
    },
    // 查询数据
    async getData() {
      const { data: res } = await getOrderData()
      console.log(res)
      this.modules = res
      // 计算价格
      // this.goodsTotal()
    },
    // 默认地址
    async defaultAddress() {
      const { data: res } = await defaultAddress()
      this.currentContact = res[0]
    },
    // 提交
    async onSubmit() {
      const data = await onSubmit(this.modules)
      console.log(data.res)
      deleteOrder()
      deleteGoodsCart()
      this.$toast.success('购买成功')
      this.$router.push('/my_order')
    },
    // 离开清空订单
    async shop() {
      deleteOrder()
      this.$router.push('/shop')
    }
  },
  components: {
    NavBar
  },
  created() {
    // 查询数据
    this.getData()
    // 默认地址数据
    this.defaultAddress()
  },
  computed: {
    total() {
      let over = 0
      this.modules.forEach((val) => {
        over += val.num * val.price
      })
      return over
    }
  }
}
</script>

<style>
</style>
