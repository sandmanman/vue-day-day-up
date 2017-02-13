/**
 * table-grid-component
 */

Vue.config.debug = true;
Vue.config.devtools = true;

// 数据
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

// 注册组件
Vue.component('vue-table-grid', {
    template: '#tableGridTemplate',
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
    },
});


// 实例化Vue
var tableGirdApp = new Vue({
    el: '#tableGirdApp',
    data: {
        searchQuery: '',
        gridColumns: ['title', 'price', 'like'],
        gridData: goods
    }
});
