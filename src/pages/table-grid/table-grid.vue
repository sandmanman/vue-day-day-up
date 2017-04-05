<template lang="html">
    <div class="table-gird-app">
        <form id="search" class="form-group form-inline">
            <input type="text" class="form-control" name="query" placeholder="filter..." value="" v-model="searchQuery">
        </form>
        <vue-table-grid
            v-bind:columns="gridColumns"
            v-bind:data="gridData"
            v-bind:filter-key="searchQuery">
        </vue-table-grid>
    </div>
</template>

<script>
var goods = [
    {
        "title": "StarWars 限量版笔记本",
        "price": "288.00",
        "like": "64",
    },
    {
        "title": "TRIWA Klinga 简约中性腕表",
        "price": "1480.00",
        "like": "118",
    },
    {
        "title": "原创全棉帆布双肩包",
        "price": "499.00",
        "like": "10",
    },
    {
        "title": "Usmile-U1001 电动牙刷旗舰版",
        "price": "399.00",
        "like": "32",
    },
    {
        "title": "享睡 Nox 智能助眠灯",
        "price": "799.00",
        "like": "67",
    },
    {
        "title": "无同 阿粽特色手工手链",
        "price": "233.00",
        "like": "168",
    }
]

import vueTableGrid from './table-grid-component.vue';

export default {
    components: {
        vueTableGrid
    },
    data: function(){
        return {
            searchQuery: '',
            gridColumns: ['title', 'price', 'like'],
            gridData: goods
        }
    }
}
</script>

<style lang="less">
</style>
