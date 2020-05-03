import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
	el: '#app-main',
	router:router,
  render: h => h(App),
})
