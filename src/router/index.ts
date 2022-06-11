import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import homeView from '../views/layout/homeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: homeView
  }
]

const router = new VueRouter({
  routes
})

export default router
