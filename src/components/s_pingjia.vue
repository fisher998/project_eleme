<template>
    <div>
        <div class="s_pingjia">
           <div class="s_pingjia_left">
               <p>4.6</p>
               <h3>综合评价</h3>
               <h4>高于周边商家<span>62.8%</span></h4>
           </div>
           <div class="s_pingjia_right">
               <ul>
                   <li>服务态度<span>星星星星星</span><i>4.6</i></li>
                   <li>菜品评价<span>星星星星星</span><i>4.6</i></li>
                   <li>送达时间<span>47分钟</span></li>
               </ul>
           </div>
       </div>
       <div class="s_pingjia_p"></div>
       <sPingjiaMain></sPingjiaMain>
       <sPingjiaComment></sPingjiaComment>
    </div>
</template>
    
<script>
import sPingjiaMain from './s_pingjia_mian.vue'
import sPingjiaComment from './s_pingjia_comment.vue'


export default {
    name: "s_pingjia",
    data () {
        return {
             
        };
    },
    components: {
        sPingjiaMain,
        sPingjiaComment
    }
}
</script>
    
<style lang="css" scoped>
    @import '../css/s_pingjia.css';
</style>