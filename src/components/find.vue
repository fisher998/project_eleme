<template>
    <div class="find">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: "find",
        data () {
            return {
                msg: "发现"
            }
        }
    }
</script>

<style scoped>
    h1{
        color: blue;
    }
</style>