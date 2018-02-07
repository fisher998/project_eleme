<template>
    <div>
       <div class="L_merchant_header_wrap">
           <div class="L_merchant_header_up">
               <span onclick="window.history.go(-1)"></span>
               <span></span>               
           </div>
           <div class="L_merchant_header_name">                  
                <h3>
                    <span>品牌</span>
                    台资味（北京宣武门店）
                    <span></span>
                </h3>
                <div class="L_PSXQ">
                    <span>4.7</span>
                    <span>月售4742单</span>
                    <span>蜂鸟快送 约31分钟</span>
                    <span>距离0m</span>
                </div>
                <p>台资味菜品均来自资味中央厨房输送，质量放心可靠！</p>
                <div class="L_shoudanHD">
                    <span>首单</span>
                    <h>新用户下单立减17元（不与其它活动同享）</h>
                    <span>15个优惠<i></i></span>
                </div>  
                <div class="L_hongbao">
                    <span>6元无门槛红包</span>
                    <span>领取</span>
                </div>                 
            </div>
       </div>
       <LSaleMerchantDps></LSaleMerchantDps>
    </div>
</template>
    
<script>
import LSaleMerchantDps from '../components/L_sale_merchant_dps'
export default {
    name: "L_sale_merchant_header",
    data () {
        return {
             
        };
    },
    components:{
        LSaleMerchantDps
    }
}
</script>
    
<style lang="css" scoped>
   @import '../css/L_sale_merchant_header.css';
</style>