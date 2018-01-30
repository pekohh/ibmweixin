<template>
  <div class="erNav">
    <ul>
      <router-link to='/personal/me-richeng' tag="li">我的日程</router-link>
      <router-link to='/personal/me-information' tag="li">我的信息</router-link>
      <router-link to='/personal/me-download' tag="li">我的下载</router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.erNav
  width:100%
  height: 60px
  line-height:60px
  background:#000
  li
    float:left
    color:#fff
    width:33%
    text-align:center
    height:60px
    box-sizing:border-box
  li.router-link-active
    border-bottom:4px solid #2fb0de
</style>
