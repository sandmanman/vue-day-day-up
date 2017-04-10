<template>
    <div class="card">
        <div class="card-block">
            <vv-button msg="Google" v-on:buttonClickEvent="doSomething1">
                <i slot="icon" class="fa fa-google"></i>
            </vv-button>

            <vv-button msg="Facebook" v-on:buttonClickEvent="doSomething2">
                <i slot="icon" class="fa fa-facebook"></i>
            </vv-button>
        </div>
    </div>
</template>

<script>
    import vvButton from '../../components/button/vvButton';
    export default {
        components: {
            vvButton
        },
        methods: {
            doSomething1() {
                alert('自定义事件111')
            },
            doSomething2() {
                alert('自定义事件222')
            }
        }
    }
</script>

<style lang="less">
    
</style>