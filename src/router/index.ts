import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import homeView from '../views/layout/homeView.vue'
import Login from '../views/layout/Login.vue'
import store from '../store/index'
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

//全局路由守卫 跳转前鉴权
router.beforeEach((to, from, next) => {
  //不是去login
  if (to.path !== '/login') {
    //但是我有信息
    if (store.state.userInfo.appkey) {
      //去你指定的路由吧
      next()
      //我的用户信息丢了
    } else {
      //不好意思你没权利在后台页面了，重定向到登录页面
      next('/login')
    }
  }
  //是去login
  next()
})
export default router
