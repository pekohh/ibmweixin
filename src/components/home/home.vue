<template>
  <div class="home">
    <banner></banner>
    <nav-list></nav-list>
    <router-view class="erji"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import banner from 'components/banner/banner'
import navList from 'components/nav/nav'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    banner,
    navList
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.erji
  position:fixed
  width:100%
  height:100%
  top:0
  left:0
  background:#fff
  overflow-y:hidden
</style>
