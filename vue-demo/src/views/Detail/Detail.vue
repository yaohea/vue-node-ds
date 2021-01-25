<template>
  <div id="detail">
    <!--  -->
    <NavBar color="#fff">
      <img slot="left" src="@/assets/img/fh.png" @click="$router.go(-1)" />
    </NavBar>
      <!-- Main -->
      <div class="main">
        <van-swipe class="my-swipe" indicator-color="white">
          <van-swipe-item v-for="item in model.swipe_img" :key="item._id">
            <!-- <img src="@/assets/img/s1.webp" alt="" /> -->
            <img :src="$axios.defaults.baseURL + item.img" alt="" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 详情 -->
      <div class="info">
        <div class="price">
          <span>￥{{ model.price }}</span>
        </div>
        <p class="duan">{{ model.title }}</p>
      </div>

      <!-- 参数 -->
      <div class="params">
        <div class="d-flex f" @click="onAddCart">
          <div class="xz">选择</div>
          <div class="flex-1 qxz">请选择 套餐类型</div>
          <div class="icon"></div>
        </div>
        <div class="d-flex f">
          <div class="xz">参数</div>
          <div class="flex-1 qxz">是否支持 各种类型...</div>
          <div class="icon"></div>
        </div>
      </div>
      <!-- 评价 -->
      <div class="assess">
        <div class="assess-c">
          <div class="d-flex f-jc-sb f-ai-c">
            <span class="fs-14">商品评价(1551)</span>
            <span class="red fs-14">查看全部 ></span>
          </div>
          <ul class="d-flex pt-10">
            <li class="assess-li">质量很高</li>
            <li class="assess-li">非常耐用</li>
            <li class="assess-li">性价比很高!</li>
          </ul>
          <div></div>
        </div>
      </div>
      <!-- 商品介绍 -->
      <div>
        <van-divider class="detail">详情</van-divider>
        <div class="w-100" v-for="item in model.big_img" :key="item._id">
          <img :src="$axios.defaults.baseURL + item.img" alt="" />
        </div>
      </div>

    <!-- 购买 -->
    <van-goods-action>
      <van-goods-action-icon @click="collect = !collect" :icon="collect ? 'star' : 'star-o'" text="收藏" color="#ff5000" />
      <van-goods-action-icon @click="$router.push('/shop')" icon="cart-o" text="购物车" />
      <van-goods-action-button @click="onAddCart" type="warning" text="加入购物车" />
      <van-goods-action-button @click="onAddCart" type="danger" text="立即购买" />
    </van-goods-action>
    <!-- sku -->
    <van-sku v-model="showSku" :sku="sku" :goods="goods" :goods-id="goodsId" :hide-stock="sku.hide_stock" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked" />
    <!--  -->
    <div style="height: 2rem"></div>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
const sku = {
  // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
  // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
  tree: [
    {
      k: '颜色', // skuKeyName：规格类目名称
      k_s: 's2', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
      v: [
        {
          id: '1231', // skuValueId：规格值 id
          name: '红色' // skuValueName：规格值名称
        },
        {
          id: '3211',
          name: '蓝色'
        }
      ]
    },
    {
      k: '大小', // skuKeyName：规格类目名称
      k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
      v: [
        {
          id: '1231', // skuValueId：规格值 id
          name: '大' // skuValueName：规格值名称
        },
        {
          id: '3211',
          name: '小'
        }
      ]
    }
  ],
  // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
  list: [
    {
      id: 1, // skuId
      s1: '1231', // 规格类目 k_s 为 s1 的对应规格值 id
      s2: '3211', // 规格类目 k_s 为 s2 的对应规格值 id
      price: 777777, // 价格（单位分）
      stock_num: 110 // 当前 sku 组合对应的库存
    },
    {
      id: 2, // skuId
      s1: '3211', // 规格类目 k_s 为 s1 的对应规格值 id
      s2: '1231', // 规格类目 k_s 为 s2 的对应规格值 id
      price: '88888', // 价格（单位分）
      stock_num: 110 // 当前 sku 组合对应的库存
    }
  ],
  price: '9.90', // 默认价格（单位元）
  stock_num: 227, // 商品总库存
  collection_id: 3211, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
  none_sku: false, // 是否无规格商品
  hide_stock: true // 是否隐藏剩余库存
}
export default {
  props: ['id'],
  data() {
    return {
      model: {},
      active: 0,
      showSku: false,
      sku: sku,
      goods: {
        title: '测试商品',
        // 默认商品 sku 缩略图
        picture: 'https://img.yzcdn.cn/2.jpg'
      },
      goodsId: '0',
      collect: false
    }
  },
  methods: {
    // 直接购买
    async onBuyClicked(sku) {
      // 1。修改好数据
      this.model.num = sku.selectedNum
      this.model.price = sku.selectedSkuComb.price
      // console.log(sku)
      // 2.发送post请求
      const { data: res } = await this.$axios.get(`/get_cart/${sku.goodsId}`)
      if (res[0]) {
        this.$toast.fail('商品已经在购物车')
      } else {
        await this.$axios.post('/add_cart', this.model)
      }
      // 3. 跳转
      this.$router.push('/shop')
    },
    // 添加购物车
    async onAddCartClicked(sku) {
      // 1。修改好数据
      this.model.num = sku.selectedNum
      this.model.price = sku.selectedSkuComb.price
      const { data: res } = await this.$axios.get(`/get_cart/${sku.goodsId}`)
      if (res[0]) {
        this.$toast.fail('商品已经在购物车')
        return
      } else {
        await this.$axios.post('/add_cart', this.model)
      }
      this.$toast.success('添加成功')
    },
    onAddCart() {
      this.showSku = true
    },
    // 获取商品详情数据
    async getDetail() {
      const { data: res } = await this.$axios.get(`/goods_detail/${this.id}`)
      this.model = res[0]
      this.goodsId = this.model.goodsId
      this.goods.picture = this.$axios.defaults.baseURL + this.model.small_img
      this.sku.list.forEach((val) => {
        // val.price = this.model.price * 100
        val.price = parseInt(this.model.price.toString() + '00' + '.00')
      })
      // console.log(this.model)
      // console.log(this.sku)
    }
  },
  created() {
    this.getDetail()
  },
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>

.main {
  margin-top: 1.6rem;
  vertical-align: middle;
}
img {
  width: 100%;
}
.info {
  padding: 0.4rem 0.32rem;
  background-color: #fff;
  span {
    font-size: 0.8rem;
    color: red;
  }
  p {
    font-size: 0.56rem;
    font-weight: 700;
  }
}

// 参数
.params {
  margin-top: 0.4rem;
  background-color: #fff;
  .f {
    padding: 0.4rem;
  }
  .xz {
    font-size: 0.48rem;
    color: #999;
  }
  .qxz {
    font-size: 0.48rem;
    margin-left: 0.2rem;
  }
  .icon {
    width: 0.4rem;
    height: 0.4rem;
    transform: rotate(45deg);
    border-top: 0.04rem solid #ccc;
    border-right: 0.04rem solid #ccc;
  }
}
// 评价
.assess {
  margin-top: 0.4rem;
  padding: 0.4rem;
  background: #fff;
}
.assess-li {
  padding: 0.12rem 0.36rem;
  margin-right: 0.2rem;
  border-radius: 0.52rem;
  font-size: 0.52rem;
  color: #666;
  background-color: pink;
}
.detail {
  margin: 0;
}
</style>
