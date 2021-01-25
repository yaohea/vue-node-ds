<template>
  <div>
    <NavBar color="#fff" title="用户管理">
      <img @click="$router.push('/mine')" slot="left" src="@/assets/img/fh.png" alt="" />
    </NavBar>
    <div class="d-flex f-ai-c f-jc-c">
      <img  src="@/assets/img/tb.png" alt="">
    </div>
    <!-- 表单 -->
    <van-form class="mt-10" @submit="onSubmit">
      <van-field v-model="username" name="username" autocomplete label="用户名" placeholder="用户名" :rules="formRules.username" />
      <van-field v-model="password" type="password" autocomplete name="password" label="修改密码" placeholder="密码" :rules="formRules.password" />
      <div style="margin: .64rem">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
export default {
  data() {
    return {
      flag: true,
      id: '',
      username: '',
      password: '',
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
    async getUser() {
      const { data: res } = await this.$axios.get('/get_user')
      this.username = res.username
      this.id = res._id
    },
    async onSubmit(values) {
      const { data: res } = await this.$axios.put(`edit_user/${this.id}`, { username: this.username, password: this.password })
      console.log(res)
      this.$toast.success('修改成功')
      this.$router.push('/mine')
    }
  },
  components: {
    NavBar
  },
  created() {
    this.getUser()
  }
}
</script>
<style lang="scss" scoped>
</style>
