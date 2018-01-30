<template>
  <div class="header1">
    <back></back>
    <div class="con">
      <p class="desc">{{desc}}</p>
      <p class="title">{{title}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import back from 'base/back/back'
export default {
  name: '',
  props: {
    desc: {
      type: String,
      default: 'IBM Systems    9月1日'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    back
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.header1
  width:100%
  height:310px
  background: url('./header1.jpg')
  background-size: 100% 310px
  font-size:32px /*px*/
  color:red
  .con
    color: #fff
    font-size: 40px
    padding: 0 10%
    height: 100%
    p
      line-height: 60px
    p.title
      font-size: 80px
      margin-top: 30px
</style>
