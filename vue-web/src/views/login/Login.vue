<template>
  <div>
    <NavBar color="#fff" :title="flag ? '登录页面' : '注册页面'">
      <img slot="left" src="@/assets/img/fh.png" @click="$router.push('/')" />
    </NavBar>
    <div class="d-flex f-ai-c f-jc-c">
      <img src="@/assets/img/tb.png" v-if="flag" alt="">
      <img src="@/assets/img/sn.png" v-else alt="">
    </div>
    <!-- 表单 -->
    <van-form class="mt-10" @submit="onSubmit">
      <van-field v-model="username" name="username" autocomplete label="用户名" placeholder="用户名" :rules="formRules.username" />
      <van-field v-model="password" autocomplete="new-password" name="password" label="密码" placeholder="密码" :rules="formRules.password" />
      <p class="my-10">
        <span v-if="flag" @click="flag = !flag">没有账号?去注册</span>
        <span v-else @click="flag = !flag">已有账号,去登陆！</span>
      </p>
      <van-button round block type="info" native-type="submit" v-if="flag">登录</van-button>
      <van-button round block type="primary" native-type="submit" v-else>注册</van-button>
    </van-form>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
export default {
  data() {
    return {
      flag: true,
      username: '123456',
      password: '123456',
      formRules: {
        username: [
          { required: true, message: '请填写账号' },
          { pattern: /^.{6,16}$/, message: '请输入6-16位数' }
        ],
        password: [
          { required: true, message: '请填写密码' },
          { pattern: /^.{6,16}$/, message: '请输入6-16位数' }
        ]
      }
    }
  },
  methods: {
    async onSubmit(values) {
      if (!this.flag) {
        // 注册
        const { data: register } = await this.$axios.post('/register', values)
        if (register === '用户已经存在') return ''
        // 登录
        const { data: res } = await this.$axios.post('/login', values)
        localStorage.setItem('token', res.token)
        this.$router.push('/')
        // console.log(res)
      } else {
        const { data: res } = await this.$axios.post('/login', values)
        localStorage.setItem('token', res.token)
        this.$router.push('/')
      }
    }
  },
  components: {
    NavBar
  }
}
</script>

<style>
</style>
