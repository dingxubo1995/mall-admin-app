import Vue from 'vue'
import VueRouter, { RouteConfig, RouteMeta } from 'vue-router'
import homeView from '../views/layout/homeView.vue'
import Login from '../views/layout/Login.vue'
import store from '../store/index'
Vue.use(VueRouter)

//权限路由 需要身份验证
const asyncRoutes: Array<RouteConfig> = [{
  path: '/product',
  name: 'product',
  component: homeView,
  children: [
    {
      path: 'list',
      meta: { title: '商品列表' },
      name: 'list',
      component: () => import('../views/page/list.vue')
    },
    {
      path: 'add',
      meta: { title: '添加商品' },
      name: 'add',
      component: () => import('../views/page/add.vue')
    },
    {
      path: 'catgory',
      meta: { title: '商品类目' },
      name: 'catgory',
      component: () => import('../views/page/catgory.vue')
    }]
}]
//路由 不需要身份验证
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    redirect: 'index',//默认加载子路由
    component: homeView,
    children: [{
      path: 'index',
      meta: { title: '首页-统计' },
      name: 'index',
      component: () => import('../views/page/index.vue')
    },]
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: Login
  }
]

const router = new VueRouter({
  routes
})

//全局路由守卫 跳转前鉴权
router.beforeEach((to: RouteMeta, from, next) => {
  document.title = to.meta.title

  //不是去login
  if (to.path !== '/login') {
    //但是我有信息
    if (store.state.userInfo.appkey) {
      //去之前要看看权限

      //去你指定的权限路由吧
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
