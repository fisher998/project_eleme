<template>
    <div>
       <div class="L_diancan_wrap">
           <ul class="L_diancan_list">
               <li><i></i>热销</li>
               <li><i></i>优惠</li>
               <li>人气双拼</li>
               <li>台式便当</li>
               <li>休闲小食</li>
               <li>饮品汤品</li>
               <li>超值套餐</li>
               <li>店铺公告</li>               
           </ul>

       </div>
    </div>
</template>
    
<script>
export default {
    name: "L_sale_merchant_diancan",
    data () {
        return {
             
        };
    }
}
</script>
    
<style lang="css" scoped>
    .L_diancan_wrap{
        width: 1.57rem;
        height: 9rem;        
    }
    .L_diancan_list li{        
        height: .99rem;
        line-height: .99rem;
        border-bottom: .02rem solid #dddddd;
        font-size: .24rem;
        color: #666666;
        text-align: center;
        background: #f8f8f8;
    }
    .L_diancan_list li:nth-of-type(1) i{
        display: inline-block;
        width: .26rem;
        height: .26rem;
        background: url(../img/l_img/iconP5.png)no-repeat left center;
        background-size: 100% 100%;
        margin: .35rem .15rem 0 0;
    }
</style>