<template>
    <div>
       <div class="s_pingjia_comment">
           <!-- 复制节点 -->
           <div class="s_pingjia_comment_user" v-for="product in productList" :key="product.id">
               <h3>{{ product.username }}<span>{{ product.rated_at}}</span></h3>
               <h4>
                   <img src="../img/s_mine_img/xingxing.jpg" alt="">
                   <span>{{ product.time_spent_desc }}</span>
               </h4>
               <h2>{{ product.rating_text }}</h2>
               <p>
                   <img src="../img/s_mine_img/rou.png" alt="" class="s_pingjia_comment_user_img">
                   <img src="../img/s_mine_img/rou.png" alt="" class="s_pingjia_comment_user_img">
                   <img src="../img/s_mine_img/rou.png" alt="" class="s_pingjia_comment_user_img">
               </p>
               
                    <h5>
                        <!-- <template v-for="(pro, index) in productList2" :key="pro.id"><span><i>{{ pro.rate_name }}</i></span></template> -->
                        <span><i>卤肉茄子排排</i></span>
                        <span><i>台式烤肠排排</i></span>
                        <span><i>台式烤肠排排</i></span>
                        <!-- <span><i>{{ msg }}</i></span> -->
                    </h5>
               
             
               
           </div>
           <!--  -->
           <!-- <div class="s_pingjia_comment_user">
               <h3>匿名用户<span>2018-9-13</span></h3>
               <h4>
                   <img src="../img/s_mine_img/xingxing.jpg" alt="">
                   <span>50分钟送达</span>
               </h4>
               <p>
                   <img src="../img/s_mine_img/rou.png" alt="" class="s_pingjia_comment_user_img">
                   <img src="../img/s_mine_img/rou.png" alt="" class="s_pingjia_comment_user_img">
               </p>
               <h5>
                   <span><i>至尊双双排排</i></span>
                   <span><i>卤肉茄子排排</i></span>
                   <span><i>卤肉茄子排排</i></span>
                   <span><i>台式烤肠排排</i></span>
               </h5>
           </div> -->
           <!--  -->
           <!--  -->
           <!-- <div class="s_pingjia_comment_user">
               <h3>匿名用户<span>2018-9-13</span></h3>
               <h4>
                   <img src="../img/s_mine_img/xingxing.jpg" alt="">
                   <span>50分钟送达</span>
               </h4>
               <p>
                   <img src="../img/s_mine_img/rou.png" alt="" class="s_pingjia_comment_user_img">
                   <img src="../img/s_mine_img/rou.png" alt="" class="s_pingjia_comment_user_img">
                   <img src="../img/s_mine_img/rou.png" alt="" class="s_pingjia_comment_user_img">
                   <img src="../img/s_mine_img/rou.png" alt="" class="s_pingjia_comment_user_img">
               </p>
               <h5>
                   <span><i>至尊双双排排</i></span>
                   <span><i>卤肉茄子排排</i></span>
                   <span><i>卤肉茄子排排</i></span>
                   <span><i>台式烤肠排排</i></span>
               </h5>
           </div> -->
           <!--  -->
       </div>
    </div>
</template>
    
<script>
export default {
    name: "s_pingjia_comment",
    data () {
        return {
            productList: [],
            productList2: [],
        };
    },
    created () {
        this.axios.get('http://10.0.157.249:8888/pingjia_all')
            .then(res => {
                this.productList = res.data;
                // console.log(this.productList);
                // for (var pro of this.productList) {
                    // this.productList2.push(pro.food_ratings);
                    
                    // console.log(pro);
                    
                    // for(var p of pro.food_ratings) {
                        // this.productList2.push(p);
                        // console.log(p);
                    // }
                // }
                // console.log(this.productList2);
            })
    }
  
}
</script>
    
<style lang="css" scoped>
    @import '../css/s_pingjia_comment.css'
</style>