<template>
    <div>
        <div class="tabbar">
        <router-link to="/sale" class="z_sale">
            <img src="../img/z_under_img/home1.png" alt="">
            外卖
        </router-link>
        <router-link to="/find" class="z_find">
            <img src="../img/z_under_img/faxian.png" alt="">
            发现
        </router-link>
        <router-link to="/order" class="z_order">
            <img src="../img/z_under_img/dingdan.png" alt="">
            订单
        </router-link>
        <router-link to="/mine" class="z_mine">
            <img src="../img/z_under_img/main.png" alt="">
            我的
        </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
    }
</script>

<style scoped>
@import '../css/z_app_vue.css';
</style>