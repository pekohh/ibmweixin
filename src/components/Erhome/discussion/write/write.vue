<template>
  <div class="write">
    <header2 :title="title"></header2>
    <div class="con">
      <input v-model="con"/>
      <span class="icon iconfont icon-fasong" @click="pass"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import header2 from 'base/header2/header2'
import eventjs from 'common/js/event'

export default {
  name: '',
  data () {
    return {
      title: '发布消息',
      con: ''
    }
  },
  components: {
    header2
  },
  methods: {
    pass () {
      this.$router.back()
      const time = new Date()
      eventjs.$emit('pass', this.con, time)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.write
  .con
    position: fixed
    bottom:100px
    left:0
    width:100%
    border-top: 1px solid #ccc
    display: flex
    align-items: center
    input
      width:70%
      margin: 30px 5%
      border:1px solid #76797a
      height:100px
      float:left
    span
      border-radius:50%
      font-size:60px
      color:#2296c0
      float:left
</style>
