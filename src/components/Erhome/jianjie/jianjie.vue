<template>
  <div class="jianjie">
    <header1 :title="title" :desc="desc"></header1>
    <div class="con">
      <h3>当科技遇见行业，“智能”的黑科技来袭……</h3>

     <p>您是否意识到，一个人机同行的新认知时代已经悄然而至？ 今天，IBM 认知系统已融入到医疗、金融、制造、零售各个行业，从IT基础架构、认知计算平台，到各种企业级应用整体解决方案，IBM 都能助您一步到位，满足个性需求，开辟新的盈利增长点，助力企业认知转型！</p>

     <p>2017年9月1日 IBM Systems创行者高峰论坛，IBM将多年的研究成果、全新的技术工具、行业实践经验与您进行分享和探讨，共同获取超乎想象的洞察，开启认知架构之旅。</p>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import header1 from 'base/header1/header1'
export default {
  name: '',
  data () {
    return {
      title: '会议简介',
      desc: 'IBM Systems    9月1日'
    }
  },
  components: {
    header1
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.jianjie
  height: 100%
  width: 100%
  background: #eeeeef
  .con
    margin: 20px 5% 60px
    padding: 30px
    height: 900px
    background: #fff
    font-size: 30px
    color:#000
    h3
      font-size: 30px
      line-height: 80px
    p
      font-size: 30px
      line-height: 50px
</style>
