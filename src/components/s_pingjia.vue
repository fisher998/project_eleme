<template>
    <div>
        <div class="s_pingjia">
           <div class="s_pingjia_left">
               <p>{{ headerList.overall_score | number }}</p>
               <h3>综合评价</h3>
               <h4>高于周边商家<span>{{ (headerList.compare_rating * 100) | number }}%</span></h4>
               <!-- {{ headerList.compare_rating }} -->
           </div>
           <div class="s_pingjia_right">
               <ul>
                   <li>服务态度<span>星星星星星</span><i>{{ headerList.service_score | number}}</i></li>
                   <li>菜品评价<span>星星星星星</span><i>{{ headerList.food_score | number}}</i></li>
                   <li>送达时间<span>{{ headerList.deliver_time }}分钟</span></li>
               </ul>
           </div>
       </div>
       <div class="s_pingjia_p"></div>
       <!-- s_oingjia_main -->
       <div class="s_pingjia_main">
            <div class="s_pingjia_main_tou clearFloat">
                <ul>
                    <!-- <li v-for="(main, index) in mains" :key="index" @click="changeColor(index)"> -->
                    <li v-for="(main, index) in mains" :key="index"  @click.prevent="changeColor(index)">
                        <!-- 路由传值 -->
                        <!-- :class="colorFn + '' + index" -->
                        <!-- :class="'colorFn' + index" -->
                        <!--  @click="changeColor(index)" -->
                        <router-link 
                        :class="{ 's_blue' : idx == index}" 
                     
                        :to="'/L_sale_merchant_header/pingjia/name/' + index"
                        >
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
             mains: [],
             headerList: [],
             idx:0
        };
    },
    methods: {
        changeColor(index) {
            this.idx = index;
        }
    },
    filters: {
    //保留2位小数点过滤器 不四舍五入
    number(value) {
      var toFixedNum = Number(value).toFixed(2);
      var realVal = toFixedNum.substring(0, toFixedNum.toString().length - 1);
      return realVal;
    }
  },
    created () {
        // 四个li 满意 有图 .. .. 
        this.axios.get('http://10.0.157.249:8888/pingjia_main')
            .then(res => {
                this.mains = res.data
                // 初始化路由手动跳转一下默认第一个
                this.$router.push({ path: '/L_sale_merchant_header/pingjia/name/1' })
            })
        // 综合评价
         this.axios.get('http://10.0.157.249:8888/pingjia_header')
            .then(res => {
                this.headerList = res.data
                // console.log(this.headerList);
                // 初始化路由手动跳转一下默认第一个
            })
    }
}
</script>
    
<style lang="css" scoped>
    @import '../css/s_pingjia.css';
    @import '../css/s_pingjia_main.css';
    .s_blue{
        background: rgb(25, 188, 238);
        color: #fff;
    }
    .s_pingjia_main_tou ul li a{
        display: inline-block;
        width: 1.6rem;
        height: 0.56rem;
    }
    .s_pingjia_main_tou ul li:first-of-type{
        background: #ebf5ff;
        /* color: white; */
    }
     .s_pingjia_main_tou ul li:nth-of-type(2){
        background: #ebf5ff;
    }
     .s_pingjia_main_tou ul li:nth-of-type(3){
        background: #f5f5f5;
    }
     .s_pingjia_main_tou ul li:last-of-type{
        background: #ebf5ff;
    }
</style>