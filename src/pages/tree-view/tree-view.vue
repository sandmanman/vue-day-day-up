<template lang="html">
    <div class="card">
        <card-header></card-header>
        <div class="card-block">
            <ul class="tree-view">
                <tree-view v-for="treeItem in treeData" :model="treeItem"></tree-view>
            </ul>
        </div>
    </div>
</template>

<script>
var data = [{
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

import cardHeader from '../../components/card-header/cardHeader.vue';
import treeView from './tree-view-component.vue';

export default {
    components: {
        cardHeader,
        treeView
    },
    data: function() {
        return {
            treeData: data
        }
    }
}
</script>


<style lang="less">
ul.tree-view,
ul.tree-view ul {
    margin: 0;
    padding: 0;

    list-style: none;
}
.tree-view a {
    color: #333;
    text-decoration: none;
}
.tree-view .tree-label.open,
.tree-view a:hover {
    color: #0275d8;
}

.tree-icon {
    display: inline-block;
    margin-right: 3px;
    vertical-align: -2px;
    width: 16px;
    height: 16px;
    overflow: hidden;

    text-align: center;
    line-height: 16px;
}
.tree-icon i {
    font-size: 14px;
}
.tree-view .tree-children {
    padding-left: 20px;
}

.tree-view .tree-label {
    line-height: 24px;
}
</style>
