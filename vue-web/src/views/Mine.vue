<template>
  <div>
    <!-- 顶部 -->
    <div class="top">
      <div class="my-t">
        <div class="img"><img src="@/assets/img/MY.png" alt="" /></div>
        <div class="my-name">{{name}}</div>
        <!-- <div class="set"><img src="@/assets/img/set.webp" alt="" /></div> -->
        <div><van-button class="set" size="mini" type="default" @click="out">退出</van-button></div>
      </div>
    </div>
    <!-- my order -->
    <div class="order">
      <div class="content">
        <van-cell title="我的订单" to="my_order" is-link />
        <van-cell title="账号管理" to="user" is-link />
        <van-cell title="地址管理" :to="`address-list/${1}`" is-link />
        <van-cell title="关于我们" to="my_about" is-link />
      </div>
    </div>
    <!--  -->
    <div style="height: 2rem"></div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/common/TabBar.vue'
export default {
  data() {
    return {
      name: '',
      show: false
    }
  },
  methods: {
    showPopup() {
      this.show = true
    },
    async getUser() {
      const { data: res } = await this.$axios.get('/get_user')
      this.name = res.username
      console.log(res)
    },
    out() {
      localStorage.clear('token')
      this.$toast.success('退出')
      this.$router.push('/')
    }
  },
  components: {
    TabBar
  },
  created() {
    this.getUser()
  }
}
</script>

<style lang="scss" scoped>
.top {
  padding: .8rem .8rem;
  // background-color: #fe6a0f;
  background-image: linear-gradient(to right, #FD9126, #FF5000)
}
.my-t {
  display: flex;
  align-items: center;
  height: 3.24rem;
  .img {
    width: 1.96rem;
    height: 1.96rem;
    margin-right: .4rem;
    border-radius: .72rem;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .my-name {
    flex: 1;
    font-size: .8rem;
    font-weight: 700;
    color: #fff;
  }
  .set {
    color: #999;
  }
  // .set {
  //   width: .8rem;
  //   height: .8rem;
  //   img {
  //     width: 100%;
  //   }
  // }
}
.nav-t {
  display: flex;
  text-align: center;
  justify-content: space-around;
  p {
    font-size: .52rem;
    color: #fff;
  }
}
.order {
  padding: .4rem;
  .content {
    background-color: #fff;
    border-radius: .4rem;
  }
}
.order-h {
  display: flex;
  justify-content: space-between;
  padding: .4rem;
  border-bottom: .04rem solid #ccc;
  :nth-child(1) {
    font-size: .6rem;
    font-weight: 700;
  }
  :nth-child(2) {
    font-size: .48rem;
    color: #666;
    &::after {
      content: '';
      display: inline-block;
      width: .32rem;
      height: .32rem;
      transform: rotate(45deg);
      border-top: .04rem solid #666;
      border-right: .04rem solid #666;
    }
  }
}
.order-b {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 3.04rem;
    .img {
      width: 1.16rem;
      height: 1.16rem;
      img {
        width: 100%;
      }
    }
    span {
      font-size: .48rem;
      color: #666;
    }
  }
}
</style>
