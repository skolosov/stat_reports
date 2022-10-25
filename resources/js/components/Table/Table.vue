<template>
    <a-table :columns="columns" :data-source="data" bordered :scroll="{x: 0, y: 'calc(100vh - 200px)'}">
        <template #headerCell="{ column }">
            <!--            <template v-if="column.dataIndex === 'name'">-->
            <!--        <span>-->
            <!--          <smile-outlined />-->
            <!--          Name-->
            <!--        </span>-->
            <!--            </template>-->
        </template>

        <template #bodyCell="{ column, record }">

        </template>
    </a-table>
</template>
<script lang="ts">
import {SmileOutlined, DownOutlined} from '@ant-design/icons-vue';

const columns = [
    {
        title: 'ID',
        dataIndex: 'key',
        key: 111,
        width: 50,
        fixed: 'left' // left, right закрепить столбцы
        // children // многоуровневая шапка
    },
    {
        title: 'ИМЯ',
        dataIndex: 'name',
        key: 1,
        width: 600,
        customCell: (column, index) => {
            if (index === 2) {
                return {rowSpan: 2};
            }
            if (index === 3) {
                return {rowSpan: 0};
            }
        },
        fixed: 'left' // left, right закрепить столбцы
        // children // многоуровневая шапка
    },
    {
        title: 'ИМЯ',
        dataIndex: 'name',
        width: 100,
        key: 10,
    },
    {
        title: 'ИМЯ',
        dataIndex: 'name',
        width: 100,
        key: 11,
    },
    {
        title: 'ИМЯ',
        dataIndex: 'name',
        width: 100,
        key: 12,
    },
    {
        title: 'ИМЯ',
        dataIndex: 'name',
        width: 100,
        key: 13,
    },
    {
        title: 'ИМЯ',
        dataIndex: 'name',
        width: 100,
        key: 14,
    },
    {
        title: 'ИМЯ',
        dataIndex: 'name',
        width: 100,
        key: 15,
    },
    {
        title: 'ИМЯ',
        dataIndex: 'name',
        width: 100,
        key: 16,
    },
    {
        title: 'ИМЯ',
        dataIndex: 'name',
        width: 100,
        key: 17,
    },
    {
        title: 'ИМЯ',
        dataIndex: 'name',
        width: 100,
        key: 18,
    },
    {
        title: 'ИМЯ',
        dataIndex: 'name',
        width: 100,
        key: 19,
    },
    {
        title: 'ИМЯ',
        dataIndex: 'name',
        width: 100,
        key: 20,
    },
    {
        title: 'ИМЯ',
        dataIndex: 'name',
        width: 100,
        key: 21,
    },
    {
        title: 'ИМЯ',
        dataIndex: 'name',
        width: 100,
        key: 22,
    },
    {
        title: 'ИМЯ',
        dataIndex: 'name',
        width: 100,
        key: 23,
    },
    {
        title: 'ИМЯ',
        dataIndex: 'name',
        width: 100,
        key: 24,
    },
    {
        title: 'ИМЯ',
        dataIndex: 'name',
        width: 100,
        key: 25,
    },
    {
        title: 'ИМЯ',
        dataIndex: 'name',
        width: 100,
        key: 26,
    },
    {
        title: 'Возраст',
        dataIndex: 'age',
        width: 100,
        key: 2,
    },
    {
        title: 'Адрес',
        dataIndex: 'address',
        width: 100,
        key: 3,
    },
    // {
    //     title: 'тэги',
    //     key: 'tags',
    //     dataIndex: 4,
    // },
    // {
    //     title: 'Action',
    //     key: 5,
    // },
];

const data = [...Array(100)].map((_, i) => ({
    key: i,
    name: 'John Brown',
    age: i + 1,
    address: 'Lake Park',
}));

export default {
    name: 'TableComponent',
    components: {
        SmileOutlined,
        DownOutlined,
    },
    data() {
        return {
            data,
            columns,
        };
    },
};
</script>
