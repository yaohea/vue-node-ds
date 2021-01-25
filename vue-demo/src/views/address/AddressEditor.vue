<template>
  <div>
    <van-nav-bar :title="id ? '编辑地址' : '新增地址'" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-address-edit
      v-if="id"
      @change-default="change"
      :area-list="areaList"
      :address-info="addressInfo"
      show-delete
      show-set-default
      show-search-result
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
    <van-address-edit v-else @change-default="change" :area-list="areaList" :address-info="addressInfo" show-set-default show-search-result @save="onSave" @change-detail="onChangeDetail" />
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
import areaList from '@/assets/js/area.js'

export default {
  props: {
    id: { type: String },
    num: { type: String }
  },
  name: 'Address',
  data() {
    return {
      areaList,
      addressInfo: {
        id: '',
        name: '',
        tel: '',
        addressDetail: '',
        areaCode: '',
        isDefault: false
      }
    }
  },
  methods: {
    async getData() {
      if (this.id) {
        const { data: res } = await this.$axios.get(`/get_address/${this.id}`)
        this.addressInfo = res[0]
        this.addressInfo.addressDetail = res[0].address.substr(res[0].address.indexOf(' ')).trim()
        console.log(this.addressInfo.addressDetail)
      }
    },
    onClickLeft() {
      if (this.num) {
        this.$router.push(`/address-list/${this.num}`)
      } else {
        this.$router.push('/address-list')
      }
    },
    async onSave(content) {
      if (this.id) {
        const { data: res } = await this.$axios.put(`/save_address/${this.id}`, content)
        // 判断有没有num
        if (this.num) {
          this.$router.push(`/address-list/${this.num}`)
        } else {
          this.$router.push('/address-list')
        }
        console.log(res)
      } else {
        const { data: res } = await this.$axios.post('/save_address', content)
        // 判断有没有num
        if (this.num) {
          this.$router.push(`/address-list/${this.num}`)
        } else {
          this.$router.push('/address-list')
        }
        console.log(res)
      }
    },
    async onDelete(content) {
      const { data: res } = await this.$axios.delete(`/delete_address/${content._id}`)
      if (this.num) {
        this.$router.push(`/address-list/${this.num}`)
      } else {
        this.$router.push('/address-list')
      }
      console.log(res)
    },
    onChangeDetail(val) {},
    change(val) {
      console.log(val)
    }
  },
  components: {
    NavBar
  },
  created() {
    this.getData()
  }
}
</script>

<style>
</style>
