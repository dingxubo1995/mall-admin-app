<template>
  <div class="home">
    <!-- 左侧菜单栏区域 -->
    <left-menu />

    <!-- 右侧主内容区域区域 -->                
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }"><!-- 动态添加menu-unfold类名 -->
      <!-- 顶部滑块区域  -->
      <slider-nav />
      <!-- 根据右侧菜单选项动态切换内容区域 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import LeftMenu from './components/LeftMenu.vue';
import SliderNav from './components/sliderNav.vue';
export default {
  data() {
    return {
    };
  },
  components: {
    LeftMenu,
    SliderNav,
  },
  methods: {
  },
};
</script>

<style lang="less">
.home {
  //左侧菜单区域
  .menu-list {
    width: 180px;
    position: fixed;
    height: 100%;
    
    .ant-menu {
      height: 100%;
    }
  }
  //右侧主内容区域区域
  .main-app {
    margin-left: 180px;
    transition: all 0.3s;
    
    &.menu-unfold {
      margin-left: 80px;
    }

    .main-header {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #eee;
      padding-left: 10px;
      padding-right: 20px;

      .breadcrumb {
        display: inline-block;
        margin-left: 20px;
      }

      .user-info {
        float: right;
        text-align: center;
        cursor: pointer;

        li:not(:first-child) {
          display: none;

          &:hover {
            background-color: #eee;
            color: #999;
            font-weight: 700;
          }
        }

        li {
          padding: 0 20px;
        }

        &:hover {
          li {
            display: block;
          }
        }
      }
    }
  }
}
</style>