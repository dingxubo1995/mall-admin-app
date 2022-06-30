<template>
    <div class="search-box">
        <a-form-model layout="inline" :model="searchForm" @submit="handleSubmit" @submit.native.prevent>
            <a-form-model-item label="检索关键字">
                <a-input v-model="searchForm.searchWord" placeholder="请输入关键字">
                </a-input>
            </a-form-model-item>

            <a-form-model-item label="商品类目">
                <a-select show-search placeholder="请选择商品类目" style="width: 200px" @change="handleChange" allowClear>
                    <a-select-option v-for="c in categoryList" :key="c.id" :value="c.id">{{ c.name }}
                    </a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item>
                <a-button type="primary" html-type="submit">搜索</a-button>
            </a-form-model-item>
        </a-form-model>
    </div>
</template>
<script>

export default {
    props: ['categoryList'],
    data() {
        return {
            searchForm: {
                searchWord: '',
                category: '',
            },
            /* categoryList: [] */
        };
    },
    //异步获取分类
    /* created() {
        api.list().then(res => { this.categoryList = res.data })
    }, */
    methods: {
        //提交表单
        handleSubmit() {
            this.$emit('searchProduct', this.searchForm)

        },
        //切换类目
        handleChange(val) {
            console.log(val);
            this.searchForm.category = val
        }
    },
};
</script>
<style>
.search-box {
    padding: 10px 30px;
}
</style>
