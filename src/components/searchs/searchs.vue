<template>
  <div class="search">
    <header2 :title="title"></header2>
    <div class="con">
        <input type="text" placeholder="日程/嘉宾/资料" />
        <span class="icon iconfont icon-sousuo-xianxing"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import header2 from 'base/header2/header2'
export default {
  name: '',
  data () {
    return {
      title: '搜索'
    }
  },
  components: {
    header2
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.search
  .con
    width:90%
    margin:20px 5%
    position:relative
    input
      width:90%
      height:60px
      line-height:60px
      border:1px solid #ccc
      padding:0 5%
    span
      position:absolute
      right:20px
      top:20px
      font-size:40px
</style>
