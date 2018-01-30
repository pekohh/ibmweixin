<template>
  <div class="information">
    <header1 :title="title" :desc="desc"></header1>
    <ul class="nav">
        <router-link to="/information/hotel" tag="li"><span class="icon iconfont icon-qiyeyuanquwuye-xianxing"></span>酒店信息</router-link>
        <router-link to="/information/weather" tag="li"><span class="icon iconfont icon-qing"></span>天气</router-link>
        <router-link to="/information/transform" tag="li"><span class="icon iconfont icon-yunshuzhongwuliu-xianxing"></span>交通信息</router-link>
    </ul>
    <router-view class="erinform"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header1 from 'base/header1/header1'
export default {
  name: '',
  data () {
    return {
      title: '实用信息',
      desc: 'IBM Systems    9月1日'
    }
  },
  components: {
    header1
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.information
  background:#fff
  width:100%
  height:100%
  .nav
    width:100%
    li
      width:90%
      margin:0 5%
      border-bottom:1px solid #ccc
      height:150px
      font-size:30px
      line-height:150px
      &.last-child
        border-bottom:none
      span
        font-size: 60px
        color:#1296db
        margin-right:20px
  .erinform
    position: fixed
    top:0
    left:0
    width:100%
    height:100%
    background:#fff
</style>
