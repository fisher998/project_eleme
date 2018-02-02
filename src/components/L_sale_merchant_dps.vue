<template>
    <div>
       <div class="L_sale_merchant_dps_wrap">
           <ul>
               <li>点餐</li>
               <li>评价</li>
               <li>商家</li>
           </ul>
       </div>
    </div>
</template>
    
<script>

export default {
    name: "L_sale_merchant_dps",
    data () {
        return {
             
        };
    }
}
</script>
    
<style lang="css" scoped>
    .L_sale_merchant_dps_wrap{
        width: 100%;
        padding: .21rem 0 0 0;
        border-bottom: .04rem solid #dddddd;
        line-height: .78rem;   
        height: .95rem;   
        text-align: center;
        font-size: .28rem;
        color: #666666;  
    }
    .L_sale_merchant_dps_wrap li{
        width: 33%;
        float: left;
    }
</style>