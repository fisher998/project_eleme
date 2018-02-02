<template>
    <div class="z_temp_header">
        <h3><span class="z_one"></span><i class="z_zan"></i>{{ msg }}<span class="z_two"></span></h3>
        <p class="z_battle">您的口味,我都懂得</p>
        <div class="z_shop_info clearFloat">
            <div class="shop_info_list">
                <figure>
                    <img src="../img/z_find_img/shopinfo.png" alt="">
                </figure>
                <figcaption cylass="z_list_info">
                    <h4 class="z_list_info_title">沙拉*靠谱*套餐A</h4>
                    <p class="z_sale">月售<span>253</span>份 好评率<span>94</span>%</p>
                    <p class="z_price"><span>￥</span> <span>9.9</span><i>￥</i><i>30</i></p>
                    <p class="z_shopname"><span></span>大东北烤肉拌饭</p>
                </figcaption>  
            </div>
            <div class="shop_info_list">
                <figure>
                    <img src="../img/z_find_img/shopinfo.png" alt="">
                </figure>
                <figcaption cylass="z_list_info">
                    <h4 class="z_list_info_title">沙拉*靠谱*套餐A</h4>
                    <p class="z_sale">月售<span>253</span>份 好评率<span>94</span>%</p>
                    <p class="z_price"><span>￥</span> <span>9.9</span><i>￥</i><i>30</i></p>
                    <p class="z_shopname"><span></span>大东北烤肉拌饭</p>
                </figcaption>  
            </div>
            <div class="shop_info_list">
                <figure>
                    <img src="../img/z_find_img/shopinfo.png" alt="">
                </figure>
                <figcaption cylass="z_list_info">
                    <h4 class="z_list_info_title">沙拉*靠谱*套餐A</h4>
                    <p class="z_sale">月售<span>253</span>份 好评率<span>94</span>%</p>
                    <p class="z_price"><span>￥</span> <span>9.9</span><i>￥</i><i>30</i></p>
                    <p class="z_shopname"><span></span>大东北烤肉拌饭</p>
                </figcaption>  
            </div>
            <div class="shop_info_list">
                <figure>
                    <img src="../img/z_find_img/shopinfo.png" alt="">
                </figure>
                <figcaption cylass="z_list_info">
                    <h4 class="z_list_info_title">沙拉*靠谱*套餐A</h4>
                    <p class="z_sale">月售<span>253</span>份 好评率<span>94</span>%</p>
                    <p class="z_price"><span>￥</span> <span>9.9</span><i>￥</i><i>30</i></p>
                    <p class="z_shopname"><span></span>大东北烤肉拌饭</p>
                </figcaption>  
            </div>
        </div>
        <find-more></find-more>
    </div>
</template>

<script>
    import findMore from './z_find_more'
    export default {
        data() {
            return {
                msg: "为你推荐"
            }
        },
        components: {
            findMore
        }
    }
</script>

<style scoped>
@import '../css/z_find_info_temp.css';
</style>