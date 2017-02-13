/**
 * Tree View Component
 */

<template>
    <li>
        <a href="javascript:void(0);" class="tree-label"
            v-bind:class="[open ? 'open' : '']"
            v-on:click="toggle">

            <span class="tree-icon" v-if="isFolder">
                <i class="fa" v-bind:class="[open ? 'fa-folder-open' : 'fa-folder']"></i>
            </span>
            <span class="tree-icon" v-else>
                <i class="fa fa-file-o"></i>
            </span>

            {{model.name}}
        </a>
        <ul class="tree-children" v-show="open" v-if="isFolder">
            <tree-view
                class="treeitem"
                v-for="item in model.children"
                :model="item">
            </tree-view>
        </ul>
    </li>
</template>

<script>
    export default{
        name: 'treeView',
        props: {
            model: Array,
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
    }
</script>


<style>
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
    .tree-view a:hover,
    .tree-view .tree-label.open {
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
