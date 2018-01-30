<template>
  <div id="app">
    <router-view/>
    <bar></bar>
    <nav-bot @change="changeSpan"></nav-bot>
    <div class="ewm">
        <div class="content">
          <img class ="ewmImg" src="./assets/ewm.png"/>
          <span>我的二维码</span>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import navBot from 'components/nav-bot/nav-bot'
import bar from 'base/bar/bar'
export default {
  name: 'App',
  components: {
    navBot,
    bar
  },
  data () {
    return {
    }
  },
  methods: {
    changeSpan (e) {
      console.log(1)
      var el = e.target
      el.style.webkitTransform = 'rotate(45deg)'
      var ewm = document.getElementsByClassName('ewm')[0]
      ewm.style.display = 'block'
      var con = document.getElementsByClassName('content')[0]
      con.style.webkitTransform = 'translate3d(0, -140px, 0)'
    }
  },
  watch: {
    $route (to, from) {
      console.log(2)
      var ewm = document.getElementsByClassName('ewm')[0]
      ewm.style.display = 'none'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#app
  width:100%
  height:100%
  .bar
    position: relative
    bottom:0
  .ewm
    position: fixed
    top:0
    left:0
    background: rgba(0,0,0,0.6)
    width:100%
    height:100%
    display: none
    .content
      display:flex
      align-items: center
      position: absolute
      bottom:0
      left:43%
      span
        margin-left: 10px
        color:#fff
        font-size:30px
</style>
