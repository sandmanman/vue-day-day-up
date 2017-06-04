<template lang="html">
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
                :key="item.id"
                :model="item">
            </tree-view>
        </ul>
    </li>
</template>

<script>
export default {
    name: 'treeView',
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
    }
}
</script>

<style lang="less">
</style>
