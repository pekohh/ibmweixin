<template>
  <div class="me-richeng">
    <div class="con">
      <div class="head">
        <h2>{{biaoti}}</h2>
        <span :class="makeShow" class="icon iconfont" @click="toggle"></span>
      </div>
      <ul class="content" ref="content">
        <li v-for="item in MRicheng" class="item" :key="item.id">
          <time>{{item.time}}</time>
          <div class="biaoti">
            <div class="title" v-for="title in item.title" :key="title">{{title}}</div>
          </div>
          <ul>
            <li class="con" v-for="con in item.con" :key="con">{{con}}</li>
          </ul>
        </li>
      </ul>
      <router-link class="btn" to="/richeng">查看所有日程</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {getRC} from 'api/getJB.js'
import {ERR_OK} from 'common/js/config'
export default {
  name: 'meRicheng',
  data () {
    return {
      title: '我的信息',
      biaoti: '主会场',
      MRicheng: [],
      showFlag: true
    }
  },
  created () {
    this._getMRicheng()
  },
  methods: {
    _getMRicheng () {
      getRC().then((res) => {
        if (res.errno === ERR_OK) {
          this.MRicheng = this.filterCon(res.data, this.biaoti).arrange
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
      return this.showFlag ? 'icon-less' : 'icon-moreunfold'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
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
