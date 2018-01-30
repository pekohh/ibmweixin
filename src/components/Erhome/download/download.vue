<template>
  <div class="download">
    <header1 :title="title"></header1>
    <div class="nav">
      <ul >
        <li v-for="(item,index) in nav" :key="item" :class="{'current':currentIndex===index}" @click="pass(item, index)">{{item}}</li>
        </ul>
    </div>
    <div class="con">
         <ul>
              <li v-for="item in conlist" :key="item.id" >
                   <span class="le icon iconfont icon-edit"></span>
                   <h3 class="me">{{item.name}}</h3>
                   <span class="ri icon iconfont icon-down"></span>
              </li>
         </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import header1 from 'base/header1/header1'
import {getDown} from 'api/getJB'
import {ERR_OK} from 'common/js/config'
export default {
  name: '',
  data () {
    return {
      title: '资料下载',
      con: [],
      nav: ['认知', '区域链', '业务永续', '云'],
      conlist: [],
      key: '认知',
      currentIndex: 0
    }
  },
  components: {
    header1
  },
  created () {
    this._getDown()
  },
  methods: {
    _getDown () {
      getDown().then((res) => {
        if (res.errno === ERR_OK) {
          this.con = res.data
          this.pass(this.key, this.currentIndex)
        }
      })
    },
    pass (item, index) {
      this.currentIndex = index
      this.conlist = this.filterCon(this.con, item)
    },
    filterCon (obj, name) {
      const arr = []
      for (let k in obj) {
        if (obj[k].leibie === name) {
          arr.push(obj[k])
        }
      }
      return arr
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.download
  .nav
    margin:20px 0
    height:60px
    width:100%
    li
      float:left
      width:20%
      border-right:1px solid #ccc
      height:60px
      text-align:center
      line-height:60px
      font-size:30px
    li.current
      border-bottom:2px solid #2fb0de
  .con
    width:90%
    margin: 0 5%
    li
      border-bottom:1px solid #ccc
      height:100px
      font-size:30px
      line-height:100px
      h3
        width:70%
        white-space:nowrap
        text-overflow: ellipsis
        overflow:hidden
        float:left
      span
        font-size:50px
      span.le
        color:#ccc
        margin-right:10px
        float:left
      span.ri
        color:#2fb0de
        float:right
</style>
