<template>
  <div class="menu-list">
    <a-menu :default-selected-keys="['1']" :default-open-keys="['sub1','sub2']" mode="inline" theme="dark"
      :inline-collapsed="$store.state.collapsed">
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="home" />
          <span>首页</span>
        </span>
        <a-menu-item key="1"><router-link to="/index"><a-icon type="area-chart" />统计</router-link></a-menu-item>

      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="appstore" />
          <span>商品</span>
        </span>
        <a-menu-item key="2"><router-link to="/product/list"><a-icon type="unordered-list" />商品列表</router-link></a-menu-item>
        <a-menu-item key="3"><router-link to="/product/add"><a-icon type="file-add" />添加商品</router-link></a-menu-item>
        <a-menu-item key="4"><router-link to="/product/catgory"><a-icon type="fullscreen" />商品类目</router-link></a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
};
</script>
<style lang="less">
</style>