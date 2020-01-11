import Vue from 'vue'
import App from './App.vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

// font-awesome
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App)
}).$mount('#app')
