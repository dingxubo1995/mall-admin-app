<template>
  <div class="main-header">
    <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>
          <a href>sss</a>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li>
        {{ userInfo.username }}
        <a-icon type="down" />
      </li>
      <li @click="handleBack">退出</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    //此方法用于修改state 中collapsed值 用于切换菜单的闭合状态  false 代表不闭合  true代表闭合
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
    handleBack() {
      //清除 state 和 cookie数据
      this.$store.dispatch('logOut');
      //跳转到login路由
      this.$router.push({
        name: 'login'
      })
      
    }
  },

};
</script>