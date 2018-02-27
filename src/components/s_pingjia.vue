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
       <!-- s_oingjia_main -->
       <div class="s_pingjia_main">
            <div class="s_pingjia_main_tou clearFloat">
                <ul>
                    <li v-for="(main, index) in mains" 
                        :key="index"
                        :class="color ? 'blue' : ''"
                        >
                        <!-- 路由传值 -->
                        <router-link :to="'/L_sale_merchant_header/pingjia/name/' + index">
                        {{ main.name }}({{ (main.count) }})
                        </router-link>
                    </li>
                </ul>               
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>
    
<script>
export default {
    name: "pingjia",
    data () {
        return {
             mains: []
        };
    },
    computed: {
        color() {
            return 
        },
    },
    created () {
        
         this.axios.get('http://10.0.157.249:8888/pingjia_main')
            .then(res => {
                this.mains = res.data
                // console.log(this.mains);
                // 初始化路由手动跳转一下默认第一个
                this.$router.push({ path: '/L_sale_merchant_header/pingjia/name/1' })
            })
    }
}
</script>
    
<style lang="css" scoped>
    @import '../css/s_pingjia.css';
    @import '../css/s_pingjia_main.css';
    .blue{
        background: rgb(25, 188, 238);
        color: white;
    }
</style>