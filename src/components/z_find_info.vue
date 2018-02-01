<template>
    <div class="z_findinfo">
        <div class="z_find_head">
            <div class="z_find_header">
                <h2><span></span>发现</h2>
            </div>
        </div>
        
        <div class="z_nav">
            <div class="z_nav_left">
                <div class="z_nav_left_top">
                    <img src="../img/z_find_img/logo1.png" alt="">
                </div>
                <div class="z_nav_left_bottom">
                    <img src="../img/z_find_img/logo3.png" alt="">
                </div>
            </div>
            <div class="z_nav_right">
                <div class="z_nav_right_top">
                    <img src="../img/z_find_img/logo2.png" alt="">
                </div>
                <div class="z_nav_right_center">
                    <img src="../img/z_find_img/logo2.png" alt="">
                </div>
                <div class="z_nav_right_bottom">
                    <img src="../img/z_find_img/logo2.png" alt="">
                </div>
            </div>
        </div>
        <div class="z_banner">
            <img src="../img/z_find_img/banner.png" alt="">
        </div>

        <recommend></recommend>
        <time-gift></time-gift>
    </div>
</template>

<script>
    import recommend from './z_find_info_temp'
    import timeGift from './z_find_timegift'
    
    export default {
        data() {
            return {

            }
        },
        components: {
            recommend,
            timeGift
        }
    }
</script>

<style scoped>
@import '../css/z_find_info.css';
</style>