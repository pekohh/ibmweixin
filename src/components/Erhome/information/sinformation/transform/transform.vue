<template>
<scroll>
  <div class="hotel">
    <header1 :title="title"></header1>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
    <div class="con">
        <p>交通信息</p>
        <p>地铁：10号线车道沟站C出口，东向步行约20分钟，6号线花园桥站A出口，北向步行20分钟，到达终点</p>
        <p>公交：114路 334路 347路 360快 360路 437路 632快 632路 658路 特10路 至北洼路下车，东向步行5分钟，到达终点</p>
    </div>
    <bar></bar>
  </div>
  </scroll>
</template>

<script type="text/ecmascript-6">
import scroll from 'base/scroll/scroll'
import header1 from 'base/header1/header1'
import bar from 'base/bar/bar'
export default {
  name: '',
  data () {
    return {
      title: '交通信息'
    }
  },
  components: {
    header1,
    scroll,
    bar
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >

.hotel
  .amap-wrapper
    width:100%
    height:500px
    .amap-box
      width: 100%
      height: 500px
  .con
    width:100%
    margin-top:20px
    p
      font-size:36px
      line-height:80px
      width:90%
      margin:0 5%
      border-bottom:1px solid #ccc
</style>
