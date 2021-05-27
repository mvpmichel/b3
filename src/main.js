import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './plugins/axios'
import './variables/_variables.scss'
import { duasCasas, dinheiro, tickerUp, firstUp } from '@/filters/filtros'


Vue.use(Buefy)

Vue.filter('dinheiro', dinheiro)
Vue.filter('tickerUp', tickerUp)
Vue.filter('duasCasas', duasCasas)
Vue.filter('firstUp', firstUp)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
