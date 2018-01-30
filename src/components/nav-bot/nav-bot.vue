<template>
  <div class="nav-bot">
    <ul>
      <router-link tag="li" to="/home"><span class="icon iconfont icon-31shouye"></span>首页</router-link>
      <router-link tag="li" to="/avatar"><span class="icon iconfont icon-shangchuandaochu"></span>上传头像</router-link>
      <li class="plus" ><div class="wrapper"><span class="icon iconfont icon-jia" @click="tran"></span></div></li>
      <router-link tag="li" to="/personal"><span class="icon iconfont icon-morentouxiang"></span>个人信息</router-link>
      <router-link tag="li" to="/search"><span class="icon iconfont icon-sousuo-xianxing"></span>搜索</router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'NavBot',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    tran (e) {
      this.$emit('change', e)
    }
  },
  beforeRouteLeave (to, from, next) { // 离开页面时的函数
    console.log(1)
    console.log(to)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.nav-bot
  width:100%
  position: fixed
  bottom:0
  left:0
  background:#212528
  z-index: 600
  ul li
    width:20%
    float:left
    height:100px
    background:#212428
    color:#b3b4b5
    font-size:30px
    text-align:center
    &.router-link-active
      background:#2fb0de
      color:#fff
    span
      display:block
      font-size:40px
      height: 60px
      line-height:60px
  li.plus
    &.router-link-active
      background:#212528
      color:#fff
    .wrapper
      position: relative
      top:-20px
      width:100px
      height:100px
      margin:0 25px
      box-sizing: border-box
      border-radius: 50%
      padding:6px
      background:#212528
      border:6px solid #fff
      span
        display:block
        width:100%
        height:100%
        line-height:76px
        border-radius:50%
        background:#2fb0de
        color:#fff

</style>
