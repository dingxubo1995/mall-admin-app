import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//导入coookie CRUD工具
import cookie from '@/utils/cookie'
export default new Vuex.Store({
  state: {
    // 用于切换菜单的闭合状态  false 代表不闭合  true代表闭合
    collapsed: false,
    //保存login登录状态信息
    //整个逻辑是 logIn页面输入正确信息，异步返回用户信息 把信息保存在cookie上 state读取cookie上的用户信息
    userInfo: cookie.getUserCookie()
  },
  //修改state中的数据
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    //登出
    logOut(state) {
      state.userInfo = {
        appkey: '',
        email: '',
        role: '',
        username: ''
      }
    }
  },
  //响应组件中的动作
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo)
      //提交setUserInfo之后，设置用户的cookie
      cookie.setUserCookie(userInfo)
    },
    logOut({ commit }) {
      //cookie里面的数据也清理掉
      cookie.remUserCookie()
      //state里面的状态清理掉
      commit('logOut');

    }
  },
  modules: {
  },
});