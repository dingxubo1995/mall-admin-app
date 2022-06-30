<template>
  <!-- 这是商品列表页面 -->
  <div class="product-list">
    <!-- 搜索 -->
    <Search @searchProduct="handleSearchProduct" :categoryList="categoryList" />
    <!-- 表格 -->
    <Table :data="tableData" :page="page" @change="changePage"/>
  </div>
</template>

<script>
import Search from '@/components/search.vue'
import Table from '@/components/productTable.vue'
import api from '@/api/product'
import apiCategory from '@/api/category'
export default {
  components: {
    Search,
    Table
  },
  data() {
    return {
      tableData: [],
      searchForm: [],
      //配置初始化页码翻页信息
      page: {
        current: 2,
        pageSize: 10,
        showSizeChanger: true,
        total: 1
      },
      categoryList: [],
      categoryObj: {}
    }
  },
  async created() {
    await apiCategory.list().then(res => {
      this.categoryList = res.data;
      res.data.forEach(item => {
          this.categoryObj[item.id] = item
      });
    })
    this.getTableData()
  },
  methods: {
    //处理子组件提交的数据
    handleSearchProduct(form) {
      this.searchForm = form
    },
    //异步获取商品信息
    async getTableData() {
      const result = await api.productsAll({
        //配置请求参数
        page: this.page.current,
        size: this.page.pageSize,
        searchWord: this.searchForm.searchWord,
      })
      this.tableData = result.data.map(item => {
     /*    console.log(item,this.categoryObj); */
        return{
          ...item,
          categoryName: this.categoryObj[item.category].name
        }
      })
      /* console.log(result); */
      this.page.total = result.total
    },
    changePage(page) {
      this.page = page,
        this.getTableData()
    }
  }
}
</script>

<style>
</style>