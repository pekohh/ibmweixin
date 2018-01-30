<template>
  <div class="nav">
    <div class="nav1">
      <h3 class="title">会议</h3>
      <ul>
        <router-link tag="li" to="/jianjie"><span class="icon iconfont icon-shengyin"></span>会议简介</router-link>
        <router-link tag="li" to="/richeng"><span class="icon iconfont icon-shizhong"></span>会议日程</router-link>
        <router-link tag="li" to="/speaker"><span class="icon iconfont icon-ktv"></span>演讲嘉宾</router-link>
        <router-link tag="li" to="/information"><span class="icon iconfont icon-bangzhu"></span>实用信息</router-link>
        <router-link tag="li" to="/wenjuandiaocha"><span class="icon iconfont icon-wenbenbianji"></span>调查问卷</router-link>
      </ul>
    </div>
    <div class="nav2">
      <h3 class="title">互动</h3>
      <ul>
        <router-link tag="li" to="/discussion"><span class="icon iconfont icon-duihuaxinxi"></span>在线讨论</router-link>
        <router-link tag="li" to="/download"><span class="icon iconfont icon-xiazai"></span>资料下载</router-link>
      </ul>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
export default {
  name: 'Nav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.nav
  width:100%
  .nav1, .nav2
    padding-bottom: 50px
    background: rgba(0,0,0,0.1)
  h3
    height:100px
    background:#212528
    width:90%
    padding: 0 5%
    font-size:40px
    color#fff
    line-height: 100px
  ul
    background: #fff
    li
      width:84%
      margin: 0 8%
      height:120px
      line-height:120px
      color:#6b6b6b
      border-bottom:1px solid #6b6b6b
      background:#fff
      font-size:34px
      &:last-child
        border-bottom:none
      span
        display:inline-block
        color:#39b3df
        font-size:60px
        margin-right:20px
</style>
