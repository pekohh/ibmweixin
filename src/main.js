// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import flexible from 'flexible.js'
import 'lib-flexible'
import 'normalize.css'
import 'common/stylus/index.styl'
import axios from 'axios'
import AMap from 'vue-amap'

Vue.use(AMap)

AMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})

Vue.prototype.$http = axios

Vue.config.productionTip = false
// flexible()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
