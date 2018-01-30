<template>
  <div class="user">
    <img src="./user.png"/>
    <span>test9</span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.user
  width:90%
  margin:30px 5%
  display:flex
  align-items: center
  img
    width:100px
    height:100px
    border-radius: 50%
    margin-right:20px
  span
    font-size:30px
    font-weight: bold
</style>
