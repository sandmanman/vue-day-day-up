<template lang="html">
    <div class="card-header">
        <a href="javascript:void(0);" @click="routerBack">
            <i class="zmdi zmdi-long-arrow-left zmdi-hc-2x"></i>
        </a>
    </div>
</template>

<script>
export default {
    name: 'cardHeader',
    methods: {
        routerBack() {
            this.$router.back();
        }
    }
}
</script>

