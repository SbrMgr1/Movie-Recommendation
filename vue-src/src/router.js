import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Cms from './components/Cms.vue'
import Login from './components/Login.vue'


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
			path:'/login',
			name:'Login',
			component:Login,
			children:[
				{
					path:'about',
					name:'About',
					component:About
				}
			]
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