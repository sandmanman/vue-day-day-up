<template>
    <div class="card">
        <card-header></card-header>
        <div class="card-block">
            <vv-navbar></vv-navbar>
        </div>
    </div>
</template>

<script>
    import cardHeader from '@/components/card-header/cardHeader.vue';
    import vvNavbar from '@/components/navbar/vvNavbar.vue';
    export default {
        components: {
            cardHeader,
            vvNavbar
        }
    }
</script>

<style lang="less">
    
</style>