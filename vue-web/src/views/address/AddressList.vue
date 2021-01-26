<template>
  <div>
    <NavBar color="#fff" title="收货地址">
      <img slot="left" src="@/assets/img/fh.png" @click="skip()" />
    </NavBar>
    <van-address-list class="mt-40" v-model="chosenAddressId" :list="addressList" disabled-text="以下地址超出配送范围" default-tag-text="默认" @add="onAdd" @edit="onEdit" @select="onSelect" />
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'

export default {
  props: ['id'],
  data() {
    return {
      chosenAddressId: '1',
      addressList: []
    }
  },
  methods: {
    onAdd() {
      // if (this.id) {
      // this.$router.push({ path: '/address-ditor', params: { num: '123' } })
      this.$router.push({ name: 'yes', params: { num: this.id } })
      // this.$router.push(`/address-ditor/${123321}`)
      // } else {
      //   this.$router.push('/address-ditor')
      // }
    },
    onEdit(item, index) {
      if (this.id) {
        this.$router.push(`/address-ditor/${item.id}/${this.id}`)
      } else {
        this.$router.push(`/address-ditor/${item.id}`)
      }
    },
    async onSelect(item, index) {
      // 发送请求修改状态
      const { data: res } = await this.$axios.put('/updataState', item)
      console.log(res)
      console.log(this.chosenAddressId)
    },
    async getAddress() {
      const { data: res } = await this.$axios.get('/get_address')
      this.addressList = res
      // 把_id赋值到id
      for (let i = 0; i < this.addressList.length; i++) {
        this.addressList[i].id = res[i]._id
        // 把state状态为true的数据id，赋值给选中按钮
        if (res[i].state) {
          this.chosenAddressId = res[i]._id
        }
      }
    },
    // 跳转
    async skip() {
      if (this.id) {
        this.$axios.delete('delete_submit')
      }
      this.$router.push(this.id ? '/mine' : '/add_submit')
    }
  },
  components: {
    NavBar
  },
  created() {
    this.getAddress()
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
