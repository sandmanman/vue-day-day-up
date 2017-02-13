/**
 * Tree View Component
 */

Vue.config.debug = true;
Vue.config.devtools = true;

// 数据
var data = [
        {
            name: 'My Tree 1',
            children: [{
                name: 'hello'
            },
            {
                name: 'wat'
            },
            {
                name: 'child folder',
                children: [{
                        name: 'child folder',
                        children: [{
                                name: 'hello'
                            },
                            {
                                name: 'wat'
                            }
                        ]
                    },
                    {
                        name: 'hello'
                    },
                    {
                        name: 'wat'
                    },
                    {
                        name: 'child folder',
                        children: [{
                                name: 'hello'
                            },
                            {
                                name: 'wat'
                            }
                        ]
                    }
                ]
            }
        ]
    },

    {
        name: 'My Tree 2',
        children: []
    },

    {
        name: 'My Tree 3',
        children: [{
            name: 'Jay Chou'
        },
        {
            name: 'Bell'
        }
        ]
    }
];


// 注册组件
Vue.component('tree-view', {
    template: '#treeViewTemplate',
    props: {
        model: Object,
    },
    data: function () {
        return {
            open: false
        }
    },
    computed: {
        isFolder: function() {
            return this.model.children && this.model.children.length
        }
    },
    methods: {
        toggle: function(){
            if ( this.isFolder ) {
                this.open = !this.open
            }
        }
    },

});


var treeView = new Vue({
    el: '#treeView',
    data: {
        treeData: data
    }
});
