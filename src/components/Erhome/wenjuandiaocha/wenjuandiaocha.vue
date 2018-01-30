<template>
  <div class="wenjuandiaocha">
    <header2 :title="title"></header2>
    <user></user>
    <div class="con">
      <form>
         <ul>
              <li v-for="item in shijuan" :key="item.id">
                   <h4>{{item.id}}.{{item.question}}</h4>
                   <label v-for="(value,key) in item.answer" :key="key">
                      <p >{{key}}-{{value}}<input type="radio"/></p>
                    </label>
              </li>
         </ul>
         <button type="submit">提交</button>
      </form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import header2 from 'base/header2/header2'
import user from 'base/user/user'
import {ERR_OK} from 'common/js/config'
import {Shijuan} from 'api/getJB.js'

export default {
  name: '',
  data () {
    return {
      title: '调查问卷',
      shijuan: []
    }
  },
  components: {
    header2,
    user
  },
  created () {
    this._getShijuan()
  },
  methods: {
    _getShijuan () {
      Shijuan().then((res) => {
        if (res.errno === ERR_OK) {
          this.shijuan = res.data
          console.log(res.data)
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.wenjuandiaocha
  .con
    width:100%
    height:100%
    li
      width:80%
      padding:5%
      margin: 20px 5%
      background:#efeff5
      border:1px solid #ccc
      position:relative
      h4
        font-size:26px
        background:#fff
        border:1px solid #ccc
        line-height:40px
        width:90%
        padding:10px 5%
      label
        p
          width:90%
          margin-left:5%
          font-size:24px
          line-height:40px
          margin-top:10px
          height:100%
          position: relative
          left:0
        input
          width:20px
          height:20px
          position: absolute
          right:5%
    button
      width:90%
      margin: 30px 5%
      background:#2296c0
      height:80px
      color:#fff
      font-size:40px
      border-radius: 5%
</style>
