import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//去除默认样式
import './assets/reset.less'
//全局引入antdesign-vue的ul库
import './plugins/ant-design-vue';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
