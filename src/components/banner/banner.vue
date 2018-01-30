<template>
  <div class="banner">
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'banner',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.banner
  width:100%
  height:310px
  background: url('./banner.jpg')
  background-size: 100% 310px
  font-size:32px /*px*/
  color:red
</style>
