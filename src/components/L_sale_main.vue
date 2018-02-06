<template>
    <div>
       <div class="L_sale_main_wrap">           
           <div class="L_sale_main_header">
               <b>——</b>
               <span>推荐商家</span>
               <b>——</b>
           </div>
           <!-- <router-view></router-view> -->
           <router-link to="/L_sale_merchant_header" v-for="(productlist, index) in sale_productlist" :key="productlist.id">
            <div class="L_sale_main_product">
                <div class="L_sale_main_product_left">
                    <img :src="list(productlist.restaurant.image_path)" >
                </div>
                <div class="L_sale_main_product_right">
                    <h3>
                        <span>品牌</span>
                        <span>{{productlist.restaurant.name}}</span>   
                        <!-- 台资味（北京宣武门店）  -->
                    </h3>
                    <span>票</span>
                    <div class="L_xiaoliang">
                        <img src="../img/l_img/xingxing.jpg" >
                        <h4>{{productlist.restaurant.rating}}</h4>
                        <span>月售{{productlist.restaurant.recent_order_num}}单</span>
                        <span class="L_ZS">蜂鸟专送</span><br/>
                        <h4>
                            <span>￥{{productlist.restaurant.float_minimum_order_amount}}元起送</span>|
                            <span>{{productlist.restaurant.piecewise_agent_fee.description}}</span>
                        </h4>
                        <h4>
                            <span>{{(productlist.restaurant.distance / 1000).toFixed(2)}}km</span>|
                            <span>{{productlist.restaurant.order_lead_time}}分钟</span>
                        </h4>
                        <br>
                        <h4>
                            <img src="../img/l_img/iconP1.jpg">
                            <span>口碑人气好店</span>
                        </h4>
                    </div>
                    <div class="L_shouxuan">
                        <h4>
                            <img src="../img/l_img/iconP2.jpg" alt="">
                            <span>新用户下单立减17元</span>
                            <div class="L_ShangJia_huodong">
                                <span>5个活动</span>
                                <img src="../img/l_img/iconP4.png" alt="">
                            </div>
                        </h4>
                        <h4>
                            <img src="../img/l_img/iconP3.jpg" alt="">
                            <span>新40减20元</span>
                        </h4>
                    </div>                   
                </div>
            </div>
           </router-link>
           <!-- <router-link to="/L_sale_merchant_header">
                <div class="L_sale_main_product">
                    <div class="L_sale_main_product_left">
                        <img src="../img/l_img/pic01.jpg">
                    </div>
                    <div class="L_sale_main_product_right">
                        <h3>
                            <span>品牌</span>
                            <span>台资味（北京宣武门店）</span>
                        </h3>
                        <span>票</span>
                        <div class="L_xiaoliang">
                            <img src="../img/l_img/xingxing.jpg" >
                            <h4>4.6</h4>
                            <span>月售4678单</span>
                            <span class="L_ZS">蜂鸟专送</span><br/>
                            <h4>
                                <span>￥25元起送</span>|
                                <span>配送费￥5.18元</span>
                            </h4>
                            <h4>
                                <span>1.62km</span>|
                                <span>27分钟</span>
                            </h4>
                            <br>
                            <h4>
                                <img src="../img/l_img/iconP1.jpg">
                                <span>口碑人气好店</span>
                            </h4>
                        </div>
                        <div class="L_shouxuan">
                            <h4>
                                <img src="../img/l_img/iconP2.jpg" alt="">
                                <span>新用户下单立减17元</span>
                                <div class="L_ShangJia_huodong">
                                    <span>5个活动</span>
                                    <img src="../img/l_img/iconP4.png" alt="">
                                </div>
                            </h4>
                            <h4>
                                <img src="../img/l_img/iconP3.jpg" alt="">
                                <span>新40减20元</span>
                            </h4>
                        </div>                   
                    </div>
                </div>
           </router-link>
           <div class="L_sale_main_product">
               <div class="L_sale_main_product_left">
                   <img src="../img/l_img/pic01.jpg">
               </div>
               <div class="L_sale_main_product_right">
                   <h3>
                       <span>品牌</span>
                       <span>台资味（北京宣武门店）</span>
                   </h3>
                   <span>票</span>
                   <div class="L_xiaoliang">
                       <img src="../img/l_img/xingxing.jpg" >
                       <h4>4.6</h4>
                       <span>月售4678单</span>
                       <span class="L_ZS">蜂鸟专送</span><br/>
                       <h4>
                           <span>￥25元起送</span>|
                           <span>配送费￥5.18元</span>
                       </h4>
                       <h4>
                           <span>1.62km</span>|
                           <span>27分钟</span>
                       </h4>
                       <br>
                       <h4>
                           <img src="../img/l_img/iconP1.jpg">
                           <span>口碑人气好店</span>
                       </h4>
                   </div>
                   <div class="L_shouxuan">
                       <h4>
                           <img src="../img/l_img/iconP2.jpg" alt="">
                           <span>新用户下单立减17元</span>
                           <div class="L_ShangJia_huodong">
                               <span>5个活动</span>
                               <img src="../img/l_img/iconP4.png" alt="">
                           </div>
                       </h4>
                       <h4>
                           <img src="../img/l_img/iconP3.jpg" alt="">
                           <span>新40减20元</span>
                       </h4>
                   </div>                   
               </div>
           </div>
           <div class="L_sale_main_product">
               <div class="L_sale_main_product_left">
                   <img src="../img/l_img/pic01.jpg">
               </div>
               <div class="L_sale_main_product_right">
                   <h3>
                       <span>品牌</span>
                       <span>台资味（北京宣武门店）</span>
                   </h3>
                   <span>票</span>
                   <div class="L_xiaoliang">
                       <img src="../img/l_img/xingxing.jpg" >
                       <h4>4.6</h4>
                       <span>月售4678单</span>
                       <span class="L_ZS">蜂鸟专送</span><br/>
                       <h4>
                           <span>￥25元起送</span>|
                           <span>配送费￥5.18元</span>
                       </h4>
                       <h4>
                           <span>1.62km</span>|
                           <span>27分钟</span>
                       </h4>
                       <br>
                       <h4>
                           <img src="../img/l_img/iconP1.jpg">
                           <span>口碑人气好店</span>
                       </h4>
                   </div>
                   <div class="L_shouxuan">
                       <h4>
                           <img src="../img/l_img/iconP2.jpg" alt="">
                           <span>新用户下单立减17元</span>
                           <div class="L_ShangJia_huodong">
                               <span>5个活动</span>
                               <img src="../img/l_img/iconP4.png" alt="">
                           </div>
                       </h4>
                       <h4>
                           <img src="../img/l_img/iconP3.jpg" alt="">
                           <span>新40减20元</span>
                       </h4>
                   </div>                   
               </div>
           </div> -->
           
       </div>
    </div>
</template>
    
<script>
export default {
    name: "L_sale_main",
    data () {
        return {
            sale_productlist: [],
        };
    },
    methods: {
        list(str) {
            // for (var obj of this.sale_productlist) {
                    // console.log(obj);
                // var str = obj.restaurant.image_hash;
                var first = str.substr(0, 1)
                var second = str.substr(1, 2)
                var last = str.substr(3, str.length-3)
                str = first + '/' + second + '/' + last
                if (str.endsWith('jpeg')) {
                    return '//fuss10.elemecdn.com/' + str + '.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'
                } else {
                    return '//fuss10.elemecdn.com/' + str + '.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'
                }
            // }
            // //fuss10.elemecdn.com/8/c9/f86e8a367e686a158f047fe62ebbcpng.png?
            // imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/
        }
    },
    
    created() {
        this.axios.get('http://10.0.157.249:8888/L_sale_mainlist')
            .then(res => {
            
            this.sale_productlist = res.data.items;
            console.log( this.sale_productlist);
            this.productlist();
            // this.names = res.data[0].entries;
            // this.nac_list();
            // console.log(this.names);
        })
    }
}               
</script>
    
<style lang="css" scoped>
   @import '../css/L_sale_main.css'

</style>