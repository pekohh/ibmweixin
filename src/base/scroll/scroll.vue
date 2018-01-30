<template>
  <div ref="wrapper" class="scroll">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  name: '',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: null
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
    }
  },
  created () {
    console.log(this.probeType)
  },
  watch: {
    data () {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    },
    probeType (newProbetype) {
      console.log(newProbetype)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >

</style>
