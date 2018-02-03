<template>
    
    <div class="sale">
        <!-- <L_sale_header slot="l_sale_header"></L_sale_header>         -->
        <router-view></router-view>
        <LSaleHeader v-show="isShow"></LSaleHeader>
        <LSaleNavlist v-show="isShow"></LSaleNavlist>
        <LSaleMain v-show="isShow"></LSaleMain>
        <!-- <l-sale-navlisgt-meishi v-show="isShow"></l-sale-navlisgt-meishi> -->

    </div>
</template>

<script>
    import LSaleHeader from './L_sale_header.vue'
    import LSaleNavlist from './L_sale_navlist.vue'
    import LSaleMain from './L_sale_main.vue'
    import LSaleNavlisgtMeishi from './L_sale_navlist_meishi'
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
            LSaleMain,
            LSaleNavlisgtMeishi
        },
        computed: {
            isShow() {
                return /(\/sale\/meishi)/.test(this.$route.path) ? false : true;
            }
        }
    }
</script>

<style scoped>
    h1{
        color: pink;
    }
    
</style>