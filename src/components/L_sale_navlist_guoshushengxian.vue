<template>
    <div>
       <div class="L_sale_navlist_meishi_header-wrap">
           <div class="L_sale_navlist_meishi_header">
               <h3>
                   <span onclick="window.history.go(-1)"></span>
                   <span>果蔬生鲜</span>
                </h3>
                <div class="L_meishi_header_nav1">
                    <div class="L_meishi_header_nav1_wrap">
                       <ul class="L_meishi_header_nav1_main">
                           <li>全部</li>
                           <li>香锅冒菜</li>
                           <li>简餐便当</li>
                           <li>日韩料理</li>
                           <li>面食粥点</li>
                           <li>汉堡披萨</li>
                           <li>轻食西餐</li>
                           <li>小吃炸串</li>
                           <li>地方菜系</li>
                        </ul>
                    </div>
                    <div class="L_meishi_more">
                        <span></span>
                    </div>                    
                </div>
                <div class="L_meishi_header_nav2">
                    <a>综合排序<span class="L_more_zhonghe"></span></a>
                    <a>距离最近</a>
                    <a><span class="L_huangguan"></span>会员领红包</a>
                    <a>筛选<span class="L_loudou"></span></a>
                </div>                
           </div> 
           
       </div>
       <LSaleNavlistMeishiMain></LSaleNavlistMeishiMain>        
    </div>
</template>    
<script>
import LSaleNavlistMeishiMain from './L_sale_navlist_meishi_main'
export default {
    name: "L_sale_navlist_meishi",
    data () {
        return {
             
        };
    },
    components:{
        LSaleNavlistMeishiMain
    }
}
</script>
    
<style lang="css" scoped>
    @import  '../css/L_sale_navlist_meishi.css'

</style>