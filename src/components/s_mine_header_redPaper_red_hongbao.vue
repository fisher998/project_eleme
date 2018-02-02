<template>
    <div>
       <div class="s_mine_header_redPaper_red_hongbao">
            <SMineHeaderRedPaperRedHongbaoImg></SMineHeaderRedPaperRedHongbaoImg>
            <div class="s_mine_header_redPaper_red_hongbao_under">
                <h3>没有红包</h3>
                <p>快去抢几个吧</p>
                <ul>
                    <li>查看历史红包</li>
                    <li>红包说明</li>
                </ul>
            </div>
       </div>
    </div>
</template>
    
<script>
import SMineHeaderRedPaperRedHongbaoImg from './s_mine_header_redPaper_red_hongbao_img.vue'
export default {
    name: "s_mine_header_redPaper_red_hongbao",
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
    @import '../css/s_mine_header_redPaper_red_hongbao';
</style>