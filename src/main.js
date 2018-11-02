import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'begeta/css/begeta.min.css'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

new Vue({
  el: '#app',
  render: h => h(App)
})
