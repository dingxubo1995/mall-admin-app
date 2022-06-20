<template>
  <div class="main-header">
    <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>{{ $router.currentRoute.matched[0].meta.title }}</a-breadcrumb-item>
        <a-breadcrumb-item>
          <router-link :to="{name:this.$route.name}">{{ currentTitle }}</router-link>
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
      currentTitle: ''
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
  //监听当前的路由状态，获取到meta中的title值
  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.currentTitle = this.$route.meta.title
    
      },
      // 深度观察监听
      immediate: true
    }
  },
};
</script>