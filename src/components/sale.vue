<template>
    
    <div class="sale">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: "sale",
        data () {
            return {
                msg: "外卖"
            }
        }
    }
</script>

<style scoped>
    h1{
        color: pink;
    }
    
</style>