<template>
  <div class="hotel">
    <header1 :title="title"></header1>
    <img src="./hotel.jpg"/>
    <div class="con">
        <p>酒店地址：中国北京紫竹院路29号</p>
        <p>酒店电话：400 6789 511</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import header1 from 'base/header1/header1'
export default {
  name: '',
  data () {
    return {
      title: '酒店信息'
    }
  },
  components: {
    header1
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.hotel
  .con
    width:100%

    margin-top:20px
    p
      font-size:36px
      line-height:80px
      height:80px
      width:90%
      margin:0 5%
      border-bottom:1px solid #ccc
</style>
