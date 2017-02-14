<template lang="html">
    <table class="table table-bordered table-hover">
        <thead>
            <tr>
                <th
                    v-for="key in columns"
                    v-on:click="sortBy(key)"
                    v-bind:class="{active: sortKey == key}">
                    {{key | capitalize}}
                    <span class="float-right">
                        <i class="zmdi zmdi-hc-fw"
                        v-bind:class="sortOrders[key] > 0 ? 'zmdi-sort-amount-desc' : 'zmdi-sort-amount-asc'"></i>
                    </span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entry in filteredData">
                <td v-for="key in columns">
                    {{entry[key]}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    replace: true,
    props: {
        data: Array,
        columns: Array,
        filterKey: String
    },
    data: function () {
        var sortOrders = {};
        this.columns.forEach(function (key) {
            sortOrders[key] = 1;
        });
        return {
            sortKey: '',
            sortOrders: sortOrders
        };
    },
    computed: {
        filteredData: function() {
            var sortKey = this.sortKey;
            var filterKey = this.filterKey && this.filterKey.toLowerCase();
            var order = this.sortOrders[sortKey] || 1;
            var data = this.data;

            if(filterKey) {
                data = data.filter(function(row){
                    return Object.keys(row).some(function (key) {
                        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                    });
                })
            }

            if(sortKey) {
                data = data.slice().sort(function(a,b) {
                    a = a[sortKey];
                    b = b[sortKey];
                    return (a === b ? 0 : a > b ? 1 : -1) * order;
                });
            }

            return data;
        }
    },
    filters: {
        capitalize: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    },
    methods: {
        // 排序
        sortBy: function(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
            console.log(this.sortKey);
        }
    }
}
</script>

<style lang="css">
</style>
