<template>
  <div class="jiabin">
    <header1 :title="title" :desc="desc"></header1>
    <ul class="con">
        <li v-for="item in jiabin" :key="item.id" @click="toggle(item)">
            <img :src="item.img"/>
            <div class="jianjie">
              <h3>{{item.name}}</h3>
              <p>{{item.job}}</p>
            </div>
        </li>
    </ul>
    <div class="btt" ref="btt">
      <div class="jiashao">
        <h3>{{name}}</h3>
        <p>{{job}}</p>
        <span class="icon iconfont icon-guanbi2" @click="toggle"></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import header1 from 'base/header1/header1'
import {getJiaBin} from 'api/getJB.js'
import {ERR_OK} from 'common/js/config'

export default {
  name: '',
  data () {
    return {
      title: '演讲嘉宾',
      desc: 'IBM Systems    9月1日',
      jiabin: [],
      tag: false,
      name: '',
      job: ''
    }
  },
  components: {
    header1
  },
  created () {
    this._getJiaBin()
  },
  methods: {
    _getJiaBin () {
      getJiaBin().then((res) => {
        if (res.errno === ERR_OK) {
          this.jiabin = res.data
          console.log(res.data)
        }
      })
    },
    toggle (item) {
      this.tag = !this.tag
      if (this.tag) {
        this.$refs.btt.style.display = 'block'
        this.name = item.name
        this.job = item.job
      } else {
        this.$refs.btt.style.display = 'none'
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.jiabin
  .con
    width: 90%
    height:1900px
    margin: 30px 5%
    background: #eeeeef
    display:flex
    flex-wrap:wrap
    justify-content:space-between
    li
      width: 47%
      height:300px
      position:relative
      img
        width:100%
        height:100%
        position:absolute
        left:0
        top:0
      .jianjie
        position: absolute
        left:0;
        bottom:0
        background:rgba(0,0,0,0.5)
        width:90%
        padding: 0 5%
        color:#fff
        height: 80px
        h3
          font-size:26px
          font-weight:bold
          line-height:40px
        p
          font-size:22px
          line-height:30px
          overflow: hidden
          text-overflow:ellipsis
          white-space: nowrap
  .btt
    display:none
    position:fixed
    left:0
    top: 0
    width: 100%
    height:100%
    background:rgba(0,0,0,0.7)
    .jiashao
      position: relative
      width:90%
      height:500px
      top:35%
      background:url('./bg.jpg')
      color:#fff
      padding: 20px 5%
      h3
        font-size:40px
        line-height:60px
        font-weight: bold
      p
        font-size:30px
        line-height:50px
      span
        font-size: 50px
        position: absolute
        right: 20px
        top: 20px

</style>
