import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import VueMask from 'v-mask'
Vue.use(VueMask)
// import { VueMaskDirective } from 'v-mask'
// Vue.directive('mask', VueMaskDirective)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
