<template>
    <ul class="vv-navbar">
        <li class="vv-navbar-item"
        v-for="(item, index) in items"
        v-on:click="navbarClickEvent(items,index)"
        :class=" item.active ? 'active' : '' ">
            <a href="javascript:void(0);" class="vv-navbar-link">
                {{item.text}}
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'vv-navbar',
        data() {
            return {
                items: [
                    {
                        text: '首页',
                        active : true
                    },
                    {
                        text: '列表',
                        active : false
                    },
                    {
                        text: '关于',
                        active : false
                    },
                    {
                        text: '招聘',
                        active : false
                    }
                ]
            }
        },
        methods: {
            navbarClickEvent(items,index) {
                items.forEach(function(el) {
                    el.active = false
                });
                items[index].active = true;
                this.$emit('navbarClickEvent',items,index);
            }
        }
    }
</script>

<style lang="less">
    .vv-navbar-item {
        &.active {
            font-weight: 700;
        }
    }
</style>