<template>
  <div>
    <div class="goods mt-40">
      <ul class="goods-c">
        <router-link :to="`/detail/${item.goodsId}`" tag="li" v-for="item in dataList" :key="item.id" class="goods-n">
          <img class="goods-m" :src="$axios.defaults.baseURL + item.img" alt="" />
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
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataList']
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
