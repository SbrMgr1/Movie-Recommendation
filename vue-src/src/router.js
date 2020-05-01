import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Cms from './components/Cms.vue'


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes:[
		{
			path:'/',
			name:'Home',
			component:Home
		},
		{
			path:'/about',
			name:'About',
			component:About
		},
		{
			path:'/cms/:sluging',
			name:'Cms',
			component:Cms
		}
	]
}) 