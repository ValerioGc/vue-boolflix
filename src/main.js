import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
// import { faStar } from '@fortawesome/free-regular-svg-icons'

library.add(faStar, faStarHalfStroke)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
