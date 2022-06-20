<template>
  <div class="menu-list">
    <a-menu :default-selected-keys="[$router.currentRoute.matched[1]?$router.currentRoute.matched[1].name:'']" :default-open-keys="[$router.currentRoute.matched[0].name]" mode="inline" theme="dark"
      :inline-collapsed="$store.state.collapsed">

      <a-sub-menu key="sub1" v-for="route in $store.state.resultMenu" :key="route.name" >
        <template v-if="!route.meta.hidden">
          <span slot="title">
            <a-icon :type="route.meta.icontype" />
            <span>{{ route.meta.title }}</span>
          </span>
          <a-menu-item key="1" v-for="child in route.children" :key="child.name">
            <router-link :to="{ name: child.name }">
              <a-icon :type="child.meta.icontype" />
              {{ child.meta.title }}
            </router-link>

          </a-menu-item>
        </template>


      </a-sub-menu>
      <!-- <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="appstore" />
          <span>商品</span>
        </span>
        <a-menu-item key="2">
          <router-link to="/product/list">
            <a-icon type="unordered-list" />商品列表
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/product/add">
            <a-icon type="file-add" />添加商品
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/product/catgory">
            <a-icon type="fullscreen" />商品类目
          </router-link>
        </a-menu-item>
      </a-sub-menu> -->
    </a-menu>
  </div>
</template>

<script>
export default {
 
};
</script>
<style lang="less">
</style>