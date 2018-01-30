<template>
  <div class="weather">
    <header1 :title="title"></header1>
    <iframe allowtransparency="true" frameborder="0" width="385" height="96" scrolling="no" src="//tianqi.2345.com/plugin/widget/index.htm?s=1&z=1&t=0&v=0&d=3&bd=0&k=&f=&ltf=009944&htf=cc0000&q=1&e=1&a=1&c=54511&w=385&h=96&align=center"></iframe>
  </div>
</template>

<script type="text/ecmascript-6">
import header1 from 'base/header1/header1'
export default {
  name: '',
  data () {
    return {
      title: '天气'
    }
  },
  components: {
    header1
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >

</style>
