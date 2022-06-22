<template>
  <!-- 这是商品列表页面 -->
  <div class="product-list">
    <!-- 搜索 -->
    <Search @searchProduct="handleSearchProduct" />
    <!-- 表格 -->
    <Table :data="tableData" />
  </div>
</template>

<script>
import Search from '@/components/search.vue'
import Table from '@/components/productTable.vue'
import api from '@/api/product'
export default {
  components: {
    Search,
    Table
  },
  data() {
    return {
      tableData: [],
      searchForm: []
    }
  },
  created(){
    this.getTableData()
  },
  methods: {
    //处理子组件提交的数据
    handleSearchProduct(form) {
      this.searchForm = form
    },
    //获取商品信息
    async getTableData() {
      const result = await api.productsAll({
        page: 1,
        size: 10,
        searchWord: this.searchForm.searchWord,
      })
     /*  console.log(result); */
      this.tableData =result.data
    }
  }
}
</script>

<style>
</style>