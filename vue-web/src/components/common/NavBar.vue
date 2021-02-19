<template>
  <div id="NavBar">
    <div class="search" :style="`background-color: ${color}`">
      <div class="search-icon1"><slot name="left"></slot></div>
      <!-- <div class="search-i"><input placeholder="联想一体机" type="text" /></div> -->
      <slot name="search" v-if="true"></slot>
      <div class="title" :class="titleColor">{{ title }}</div>
      <div class="search-icon2"><slot name="right"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    title: String,
    titleColor: String
  }
}
</script>

<style lang="scss" scoped>
#NavBar {
  overflow: hidden;
  margin-bottom: 1.76rem;
}
.search {
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 10;
  .search-icon1,
  .search-icon2 {
    display: flex;
    align-items: center;
    width: 1.6rem;
    height: 1.76rem;
    // line-height: 1.2rem;
    img {
      width: 0.8rem;
    }
  }
  .search-icon1 {
    padding: 0.56rem;
  }
  .search-icon2 {
    padding: 0.4rem;
  }
  .title {
    flex: 1;
    text-align: center;
    font-weight: 600;
    font-size: 0.72rem;
  }
  .search-i {
    display: flex;
    align-items: center;
    flex: 90;
    height: 1.2rem;
    border-radius: 0.6rem;
    margin: 0.2rem 0.5rem;
    padding: 0 0.6rem;
    background-color: #fff;
    font-size: 0.48rem;
    &::before {
      content: '';
      display: block;
      width: 0.8rem;
      height: 0.8rem;
      margin: 0.2rem 0.32rem 0 0;
      background: url('../../assets/img/2.png') no-repeat 44.892% 0;
      background-size: 8rem 8rem;
    }
    input {
      border: 0;
    }
  }
}
</style>
