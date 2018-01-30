<template>
  <div class="personal">
    <header2 :title="title"></header2>
    <user></user>
    <er-nav></er-nav>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header2 from 'base/header2/header2'
import user from 'base/user/user'
import erNav from 'components/erNav/erNav'

export default {
  name: 'Personal',
  data () {
    return {
      title: '我的信息',
      biaoti: '主会场',
      MRicheng: [],
      showFlag: true
    }
  },
  components: {
    header2,
    user,
    erNav
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >

</style>
