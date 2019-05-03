import Vue from 'vue'
import App from './App.vue'
import Segment from '../../src/index.js'

Vue.use(Segment, {
  key: SEGMENT_WRITE_KEY
})

new Vue({
  el: '#app',
  render: h => h(App)
})

