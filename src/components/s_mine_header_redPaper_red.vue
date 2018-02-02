<template>
    <div>
       <div class="s_mine_header_redPaper_red_main">
           <router-link class="s_mine_header_redPaper_red_main_a1" to="mine">
               <h3>推荐有奖</h3>
               <p>5元现金拿不停</p>
           </router-link>
           <router-link class="s_mine_header_redPaper_red_main_a2" to="mine">
               <h3>免费霸王餐</h3>
               <p>领20元红包</p>
           </router-link>
           <router-view></router-view>
       </div>
       <!-- 子组件 -->
       <SMineHeaderRedPaperRedHongbao></SMineHeaderRedPaperRedHongbao> 
    </div>
   
</template>

    
<script>
// s_mine_header_redPaper_red_hongbao
import SMineHeaderRedPaperRedHongbao from './s_mine_header_redPaper_red_hongbao.vue'
export default {
    name: "s_mine_header_redPaper_red",
    data () {
        return {
             
        };
    },
    components: {
        // 子组件 中间 红包部分
        SMineHeaderRedPaperRedHongbao
    }
}
</script>
    
<style lang="css" scoped>
    @import '../css/s_mine_header_redPaper_red';
</style>