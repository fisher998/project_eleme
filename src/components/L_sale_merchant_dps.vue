<template>
    <div>
       <div class="L_sale_merchant_dps_wrap">
           <ul>
               <router-link to="/L_sale_merchant_header/diancan">
                    <li>点餐</li>
               </router-link>
               <router-link to="/L_sale_merchant_header/s_pingjia">
                    <li>评价</li>
               </router-link>
               <router-link to="/L_sale_merchant_header/merchant_shangjia">
                    <li>商家</li>
               </router-link>
           </ul>
       </div>
       <router-view></router-view>
       <!-- <l-sale-merchant-diancan></l-sale-merchant-diancan> -->
    </div>
</template>
    
<script>
import LSaleMerchantDiancan from './L_sale_merchant_diancan'
export default {
    name: "L_sale_merchant_dps",
    data () {
        return {
             
        };
    },
    components:{
        LSaleMerchantDiancan
    }
}
</script>
    
<style lang="css" scoped>
    .L_sale_merchant_dps_wrap{
        width: 100%;
        padding: .21rem 0 0 0;
        border-bottom: .04rem solid #dddddd;
        line-height: .78rem;   
        height: 1.05rem;   
        text-align: center;
        font-size: .28rem;
        color: #666666;  
    }
    .L_sale_merchant_dps_wrap li{
        width: 33%;
        float: left;
    }
</style>