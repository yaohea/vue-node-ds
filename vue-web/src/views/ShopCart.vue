<template>
  <div>
    <!-- title -->
    <NavBar color="#fff" title="购物车">
      <van-icon slot="right" name="delete" @click="del = !del" />
      <!-- <img slot="right" src="" /> -->
    </NavBar>
    <div v-if="pd">
      <!-- 购物车数据 -->
      <div v-for="(item, index) in modules" :key="index" class="row">
        <van-row class="content">
          <!-- 商品顶部 -->
          <div class="d-flex f-ai-c">
            <van-col>
              <van-checkbox @change="dange($event, item.goodsId)" v-model="item.state" :name="index" checked-color="#ee0a24"></van-checkbox>
            </van-col>
            <van-col>
              <span class="title d-flex">淘东自营旗舰店</span>
            </van-col>
          </div>
          <!-- 商品卡片 -->
          <van-col span="24"
            ><van-card centered :num="item.num" :price="item.price / 100" desc="限时秒杀！1小时后结束" :title="item.title" :thumb="$axios.defaults.baseURL + item.img">
              <template #tags>
                <van-tag plain type="danger" @click="$router.push(`/detail/${item.goodsId}`)">12期免息</van-tag>
                <van-tag plain type="danger" @click="$router.push(`/detail/${item.goodsId}`)">超级优惠</van-tag>
              </template>
              <template #footer>
                <van-stepper @change="goodsTotal()" v-model="item.num" />
              </template> </van-card
          ></van-col>
        </van-row>
      </div>
    </div>
    <!-- </van-checkbox-group> -->
    <!-- 结算 -->
    <van-submit-bar class="b" :price="total" button-text="提交订单" v-if="pd">
      <!-- 全选 -->
      <van-checkbox v-model="quan" name="a" @click="checkAll" checked-color="#ee0a24"></van-checkbox>
      <!-- 提交 -->
      <van-button @click="submitOrder" slot="button" round type="info" v-if="!del">提交订单</van-button>
      <!-- 删除 -->
      <van-button @click="delGoods" round slot="button" type="danger" v-else>删除按钮</van-button>
      <!-- <van-button @click="checkAll">全选</van-button> -->
    </van-submit-bar>
    <!-- 购物车为空时 -->
    <div class="empty" v-if="!pd">
      <img src="@/assets/img/shopcart.png" alt="" />
      <h3 class="mt-40">购物车空空如也</h3>
      <van-button round type="danger" class="bottom-button mt-40" to="/">快去抢购</van-button>
    </div>

    <!-- ding -->
    <div style="height: 2rem"></div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/common/TabBar.vue'
import NavBar from '@/components/common/NavBar'
import { getCartData, editGoodsState, delGoods, submitOrder } from '@/api/shopCart'
// import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      value: 1,
      modules: [],
      result: [],
      flag: false,
      quan: false,
      pd: false, // 判断购物车是否为空
      del: false, // 切换提交和删除
      total: 0
    }
  },
  methods: {
    // 查询购物车数据
    async getData() {
      const res = await getCartData()
      this.modules = res.data
      // 判断全选按钮
      this.onAll()
      console.log(res)
      // 计算价格
      this.goodsTotal()
    },
    // 全选按钮点击。全选了，就清除，没全选，就全选
    checkAll() {
      // 遍历出所有状态
      const state = this.modules.map((val) => val.state)
      // 过滤出true
      const first = state.filter((val) => val)
      // 判断数组的true是否等于商品数
      if (first.length === this.modules.length) {
        // 等于
        this.editState({ type: false })
        this.modules.forEach((val) => {
          val.state = false
        })
      } else {
        // 不等于
        this.editState({ type: true })
        this.modules.forEach((val) => {
          val.state = true
        })
      }
    },
    // 点击单个复选框判断全选按钮的状态
    async dange(val, id) {
      // 1。发起put请求修改状态
      this.editState({ id: id, type: val })
      const state = this.modules.map((val) => val.state)
      const first = state.filter((val) => val)
      if (first.length === this.modules.length) {
        this.quan = true
      } else {
        this.quan = false
      }
      this.goodsTotal()
      console.log(this.total)
    },
    // 使用该方法需要传递修改状态数据
    async editState(obj) {
      const { data: res } = await editGoodsState(obj)
      console.log(res)
    },
    // 删除选中的数据
    async delGoods() {
      const { data: res } = await delGoods()
      console.log(res)
      this.getData()
    },
    // 购物车是否为空
    length() {
      if (this.modules.length === 0) {
        this.pd = false
      } else {
        this.pd = true
      }
    },
    // 计算选中的总价格
    goodsTotal() {
      this.total = 0
      this.modules.forEach((val) => {
        if (val.state === true) {
          this.total += val.num * val.price
        }
      })
      // console.log(this.total)
    },
    // 提交订单
    async submitOrder() {
      const state = this.modules.filter((val) => {
        return val.state === true
      })
      if (!state[0]) {
        this.$toast.fail('请选择商品')
        return
      }
      submitOrder(state)
      this.$router.push('/add_submit')
    },
    // 判断购物车是否全选
    onAll() {
      // 遍历出所有状态
      const state = this.modules.map((val) => val.state)
      // 过滤出true
      const first = state.filter((val) => val)
      // 判断数组的true是否等于商品数
      if (first.length === this.modules.length) {
        this.quan = true
      } else {
        // 不等于
        this.quan = false
      }
    }
  },
  components: {
    TabBar,
    NavBar
  },
  created() {
    // 查询数据
    this.getData()
  },
  mounted() {
    this.$toast.setDefaultOptions({ duration: 300 })
    this.$toast.loading({
      message: '加载中...',
      forbidClick: true
    })
  },
  watch: {
    modules() {
      this.length()
    }
  },
  computed: {}
}
</script>
<style lang="scss" scoped>
.row {
  padding: 0.4rem;
  .content {
    background-color: #fff;
    padding: 0.4rem;
    border-radius: 0.4rem;
  }
}
.title {
  font-size: 0.56rem;
  margin-left: 0.4rem;
}
.van-card__desc {
  color: red;
}
.van-card__bottom {
  padding: 0.2rem 0;
}

.b {
  margin-bottom: 2rem;
}
// 空购物车
.empty {
  padding-top: 3.6rem;
  text-align: center;
}
</style>
