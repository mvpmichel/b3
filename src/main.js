import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './variables/_variables.scss'


Vue.use(Buefy)

Vue.filter('dinheiro', valor => {
	return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

Vue.filter('tickerUper', texto => {
  return texto.toUpperCase()
})

Vue.filter('firstUp', texto => {
  return texto[0].toUpperCase() + texto.substr(1)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
