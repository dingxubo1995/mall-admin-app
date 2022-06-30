<template>
    <a-table :columns="columns" :data-source="tableData" :pagination="page" @change="changeTable">
        <div slot="operation">
            <a-button>编辑</a-button>
            <a-button>删除</a-button>
        </div>

    </a-table>
</template>
<script>

const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',

    },
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        width: 80,
    },
    {
        title: '描述',
        dataIndex: 'desc',
        key: 'desc',

    },
    {
        title: '类目',
        dataIndex: 'categoryName',
        key: 'category',
        /* customRender: function (text, record) {
            console.log(record.category);
            let name = ''
            this.categoryList.forEach(c => {
                if (c.id === record.category) {
                    name = c.name
                }
            });
            return name
        } */
    },
    {
        title: '预售价格',
        dataIndex: 'price',
        key: 'price',

    },
    {
        title: '折扣价格',
        dataIndex: 'price_off',
        key: 'price_off',

    },
    {
        title: '标签',
        dataIndex: 'tags',
        key: 'tags',

    },
    {
        title: '限制购买数量',
        dataIndex: 'inventory',
        key: 'inventory',

    },
    {
        title: '上架状态',
        dataIndex: 'status',
        key: 'status',

    },
    {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        //添加插槽
        scopedSlots: { customRender: 'operation' },
    },
];


export default {
    data() {
        return {
            columns,
            pagination: {
                current: 1,
                pageSize: 10,
                showSizeChanger: true,
                total: 1
            }
        };
    },
    props: ['data', 'page'],
    computed: {
        //给数据添加key值
        tableData() {
            return this.data.map((item) => {
                return {
                    ...item,
                    key: item.id
                }
            })
        }
    },
    methods: {
        changeTable(page) {
            console.log(page);
            this.$emit('change', page);
        }
    }
};
</script>
