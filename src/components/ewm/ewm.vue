<template>
  <div class="ewm">
    <home></home>
    二维码
  </div>
</template>

<script type="text/ecmascript-6">
import home from 'components/home/home'

export default {
  name: 'Ewm',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    home
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.ewm
  background:rgba(0,0,0,0)
</style>
