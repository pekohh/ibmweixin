<template>
  <div class="richeng">
    <header2 :title="title"></header2>
    <div class="scroll-x">
      <ul>
        <li v-for="item in richeng" :key="item.id" @click="changeCon(item)">
          <p>{{item.name}}</p>
          <p>{{item.time}}</p>
        </li>
      </ul>
    </div>
    <div class="head">
      <h2>{{biaoti}}</h2>
      <span :class="makeShow" class="icon iconfont" @click="toggle"></span>
    </div>
    <ul class="content" ref="content">
      <li v-for="item in richengList" class="item" :key="item.id">
        <time>{{item.time}}</time>
        <div class="biaoti">
          <div class="title" v-for="title in item.title" :key="title">{{title}}</div>
        </div>
        <ul>
          <li class="con" v-for="con in item.con" :key="con">{{con}}</li>
        </ul>
      </li>
    </ul>
    <router-link class="btn" to="/personal/me-richeng">查看我的日程</router-link>
  </div>
</template>

<script type="text/ecmascript-6">
import header2 from 'base/header2/header2'
import {getRC} from 'api/getJB.js'
import {ERR_OK} from 'common/js/config'

export default {
  name: '',
  data () {
    return {
      tag: 1,
      title: '会议日程',
      richeng: [], // 日程目录
      biaoti: '主会场',
      showFlag: true,
      richengList: [], // 日程列表
      probeType: 3
    }
  },
  components: {
    header2
  },
  created () {
    this._getRicheng()
  },
  methods: {
    _getRicheng () {
      getRC().then((res) => {
        if (res.errno === ERR_OK) {
          this.richeng = res.data
          this.richengList = this.filterCon(this.richeng, this.biaoti).arrange
        }
      })
    },
    filterCon (obj, name) {
      for (let k in obj) {
        if (obj[k].name === name) {
          return obj[k]
        }
      }
    },
    // 点击日程列表,显示相关列表的数据
    changeCon (item) {
      this.biaoti = item.name
      this.richengList = item.arrange
    },
    toggle () {
      this.showFlag = !this.showFlag
      if (this.showFlag) {
        this.$refs.content.style.display = 'block'
      } else {
        this.$refs.content.style.display = 'none'
      }
    }
  },
  computed: {
    makeShow () {
      return this.showFlag ? 'icon-moreunfold' : 'icon-less'
    }
  },
  watch: {
    richengList (newList) {
      // console.log(newList)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.richeng
  .scroll-x
    width: 100%
    overflow-x: auto
    white-space: nowrap
    li
      display:inline-block
      text-align:center
      font-size:25px
      margin:20px 10px
      padding: 0 20px
      border-right:1px solid #ccc
      p
        line-height: 40px
  .head
    width: 90%
    padding: 0 5%
    height: 80px
    margin-top: 10px
    background: #2296c0
    line-height: 80px
    color:#fff
    h2
      float:left
      width: 80%
      height: 100%
      font-size: 40px
    span
      width: 20%
      display: block
      float:left
      color: #fff
      height: 100%
      text-align: center
      line-height: 80px
      font-size: 40px
  .content .item
    border-bottom: 1px solid #ccc
    width: 90%
    padding: 30px 5%
    time, .biaoti
      color: #2296c0
    .biaoti
      margin: 20px 0
      .title
        font-size: 40px
        line-height: 60px
    ul
      width: 95%
      padding-left: 5%
    .con
      list-style-type:square
      margin: 10px 0
      font-size: 25px
      line-height: 30px
  .btn
    display: block
    width: 80%
    background: #2fb0de
    height: 100px
    margin: 30px 10%
    color: #fff
    border-radius: 10px
    font-size: 40px
    text-align: center
    line-height: 100px
</style>
