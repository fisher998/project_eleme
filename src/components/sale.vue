<template>
    
    <div class="sale">
        <!-- <L_sale_header slot="l_sale_header"></L_sale_header>         -->
        <LSaleHeader></LSaleHeader>
        <LSaleNavlist></LSaleNavlist>
    </div>
</template>

<script>
    import LSaleHeader from './L_sale_header.vue'
    import LSaleNavlist from './L_sale_navlist.vue'
    export default {
        name: "sale",
        data () {
            return {
                msg: "外卖"
            }
        },
        components: {
            LSaleHeader,
            LSaleNavlist
        }
    }
</script>

<style scoped>
    h1{
        color: pink;
    }
    
</style>