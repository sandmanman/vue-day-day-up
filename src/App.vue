<template lang="html">
    <div>
        <h1>Hellow, {{message}}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return {
            message: 'VueJS World'
        }
    }
}
</script>

<style lang="scss" scoped>
    h1 {
        position: relative;
        padding: 30px;

        color: #4499ee;
        text-align: center;

        &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background-color: #ddd;
        }
    }
</style>
