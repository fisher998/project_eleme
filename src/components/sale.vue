<template>
    
    <div class="sale">
        <!-- <L_sale_header slot="l_sale_header"></L_sale_header>         -->
        <LSaleHeader></LSaleHeader>
        <LSaleNavlist></LSaleNavlist>
        <LSaleMain></LSaleMain>
    </div>
</template>

<script>
    import LSaleHeader from './L_sale_header.vue'
    import LSaleNavlist from './L_sale_navlist.vue'
    import LSaleMain from './L_sale_main.vue'
    export default {
        name: "sale",
        data () {
            return {
                msg: "外卖"
            }
        },
        components: {
            LSaleHeader,
            LSaleNavlist,
            LSaleMain
        }
    }
</script>

<style scoped>
    h1{
        color: pink;
    }
    
</style>