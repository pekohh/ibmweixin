<template>
  <div class="back" @click="back">
    <span class="icon iconfont " :class="calName" ></span>{{title}}
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  props: {
    tag: { // 标志位
      type: Number,
      default: 0
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
  methods: {
    back () {
      this.$router.back()
    }
  },
  computed: {
    calName () {
      return this.tag === 0 ? 'icon-back' : 'icon-fanhui'
    },
    calBg () {
      return this.tag === 0 ? 'bg' : ''
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.back
    width: 100%
    background: rgba(0,0,0,0.5)
    height:100px
    color:#fff
    text-align:center
    line-height:100px
    font-size:40px
    font-weight: bold
    span
      display:inline-block
      float:left
      width: 100px
      height: 80px
      color: #fff
      line-height:100px
      font-size:50px
      text-align:center
      cursor:pointer
</style>
