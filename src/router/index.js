import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
// import PageFirst from '../views/Pages/PageFirst'
import Begin from '../views/Pages/Begin.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { path: '/Home' }
  },
  {
    path: '/Begin',
    name: 'Begin',
    component: Begin
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children: [
      // {
      //   path: 'PageFirst',
      //   name: 'PageFirst',
      //   component: PageFirst
      // },

    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  /*   mode: 'history',
    base: process.env.BASE_URL, */
  routes
})

export default router
