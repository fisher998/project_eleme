<template>
    <div>
       <div class="L_sale_main_wrap">           
           <div class="L_sale_main_header">
               <b>——</b>
               <span>推荐商家</span>
               <b>——</b>
           </div>
           <div class="L_sale_main_product">
               <div class="L_sale_main_product_left">
                   <img src="../img/l_img/pic01.jpg">
               </div>
           </div>
       </div>
    </div>
</template>
    
<script>
export default {
    name: "L_sale_main",
    data () {
        return {
             
        };
    }
}
</script>
    
<style lang="css" scoped>
    .L_sale_main_wrap{
        width: 100%;
        height: 2rem;
        clear: both;
    }
    .L_sale_main_header{
        height: 0.31rem;
        width: 100%;
        text-align: center;
        margin: .73rem auto .48rem auto
    }
    .L_sale_main_header span{
        color: #000000;
        font-size: .31rem;
    }
    .L_sale_main_header b{
        color: #999999;
       
    }
    .L_sale_main_product_left{
        width: 1.31rem;
        height: 1.31rem;
        margin: 0 .21rem 0 .21rem;
    }
    .L_sale_main_product_left img{
        width: 100%;
        height: 100%;
    }
</style>