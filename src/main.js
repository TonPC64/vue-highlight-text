import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import Highlight from 'vue-highlight-component'
import 'begeta/css/begeta.min.css'
import 'buefy/dist/buefy.css'
import 'highlight.js/styles/xcode.css'

Vue.component('Highlight', Highlight)
Vue.use(Buefy)

new Vue({
  el: '#app',
  render: h => h(App)
})
