<template>
    <div class="order">
        <h1 class="z_h1">{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: "order",
        data () {
            return {
                msg: "订单"
            }
        }
    }
</script>

<style scoped>
    h1{
        color: red;
    }

</style>
