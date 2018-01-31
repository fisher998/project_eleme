<template>
    <div class="find">
        <find-info></find-info>
    </div>
</template>

<script>
    import findInfo from './find_info.vue'
    export default {
        name: "find",
        data () {
            return {
                msg: "发现"
            }
        },
        components: {
            findInfo
        }
    }
</script>

<style scoped>
    h1{
        color: blue;
    }
</style>