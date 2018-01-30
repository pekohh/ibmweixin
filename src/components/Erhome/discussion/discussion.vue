<template>
  <div class="discussion">
     <header2 :title='title'></header2>
     <router-link to="discussion/write"><span class="icon iconfont icon-edit"></span></router-link>
     <div class="con">
       <div class="con-c" v-for="item in con" :key="item.msg">
         <h4>匿名网友:</h4>
         <p >{{item.msg}}</p>
         <time>{{item.time}}</time>
       </div>
     </div>
     <router-view class="erji" @pass="jec"/>
  </div>
</template>

<script type="text/ecmascript-6">
import header2 from 'base/header2/header2'
import eventjs from 'common/js/event'
import {formatDate} from 'common/js/date'
import Message from 'common/js/message'
import {saveMsg, loadMsg} from 'common/js/storage'

export default {
  name: '',
  data () {
    return {
      title: '在线讨论',
      con: []
    }
  },
  components: {
    header2
  },
  created () {
    eventjs.$on('pass', (item, time) => {
      let times = formatDate(time, 'yyyy-MM-dd hh:mm')
      let mes = new Message({
        msg: item,
        time: times
      })
      saveMsg(mes)
      this.con.push(loadMsg())
    })
  },
  methods: {
    jec (item) {
      console.log(item)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.discussion
  span
    font-size:50px
    position: absolute
    right:20px
    top:0
    z-index:1000
    color:#fff
    line-height:150px
  .header2
    z-index: -10
  .con
    width:90%
    margin:20px 5%
    height:300px
    border-top:1px solid #ccc
    .con-c
      margin-top:20px
      height:100px
      width: 90%
      border:1px solid #ccc
      padding: 20px 5%
      p
        font-size:30px
        line-height:50px
        text-indent:120px
      time
        float:right
  .erji
    position:fixed
    left:0
    top:0
    background: #fff
    width:100%
    height:100%
</style>
