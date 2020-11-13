import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

// const home = ()=>import("../components/home")
// const about = ()=>import("../components/about")

const home = () =>import("../views/tabBar/home")
const fenlei = () =>import("../views/tabBar/fenlei")
const user = () =>import("../views/tabBar/user")

const newOne = () =>import("../views/new/new1")
const newtwo = () =>import("../views/new/new2")

const routes = [
	{
		path:'',
		redirect:'home'
	},
  {
    path: '/home',
    // name: 'Home',
    component: home,
	children:[
		{
			path:'',
			redirect:'newOne'
		},
		{
			path : "newOne",
			component : newOne
		},
		{
			path : "newtwo",
			component : newtwo
		}
	]
  },
  {
    path: '/fenlei',
    // name: 'About',
    component: fenlei
  },
  {
	  path:'/user',
	  component: user
  }
]

const router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  routes
})

export default router
