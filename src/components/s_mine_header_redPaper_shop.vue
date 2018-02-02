<template>
    <div>
       <SMineHeaderRedPaperRedHongbaoImg></SMineHeaderRedPaperRedHongbaoImg>
       <div class="s_mine_header_redPaper_shop_under">
           <h3>没有店铺红包</h3>
           <p>去领券中心看看</p>

       </div>
    </div>
</template>
    
<script>
import SMineHeaderRedPaperRedHongbaoImg from './s_mine_header_redPaper_red_hongbao_img.vue'
export default {
    name: "s_mine_header_redPaper_shop",
    data () {
        return {
             
        };
    },
    components: {
        SMineHeaderRedPaperRedHongbaoImg
    }
}
</script>
    
<style lang="css" scoped>
.s_mine_header_redPaper_shop_under{
    width: 100%;
    height: 6.41rem;
    background-image: linear-gradient(to bottom, #f5f5f5, white);
    text-align: center;
}
.s_mine_header_redPaper_shop_under h3{
    font-size: 0.32rem;
    color: #6a6a6a;
}
.s_mine_header_redPaper_shop_under p{
    width: 2.42rem;
    height: 0.8rem;
    line-height: 0.8rem;
    margin: 0.24rem 0 0 2.54rem;
    
    font-size: 0.28rem;
    color: white;
    background: #56d176;
}
</style>