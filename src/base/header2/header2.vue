<template>
  <div class="header2">
    <back :tag="tag" :title="title"></back>
  </div>
</template>

<script type="text/ecmascript-6">
import back from 'base/back/back'
export default {
  name: '',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      tag: 1
    }
  },
  components: {
    back
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.header2
  width: 100%
  .back
    background:#000
    height:150px
    line-height: 150px
    span
      line-height:150px
</style>
