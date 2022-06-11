import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import homeView from '../views/layout/homeView.vue'
import Login from '../views/layout/Login.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: homeView,
    children: [{
      path: '/index',
      name: 'index',
      component: () => import('../views/page/index.vue')
    }],
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
