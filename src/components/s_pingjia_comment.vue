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
                    <img v-for="(sh, index) in product.order_images" :key="index" :src="tupian(sh.image_hash)" alt=""
                    class="s_pingjia_comment_user_img">
               </p>
                <h5>
                    <span v-for="(pro,index) in product.food_ratings" :key="index"><i>{{  pro.rate_name }}</i></span>
                </h5> 
           </div>
       </div>
    </div>
</template>
    
<script>
export default {
    name: "s_pingjia_comment",
    data () {
        return {
            productList: [],
        };
    },
    methods:{
        tupian(str) {
                var first = str.substr(0, 1)
                var second = str.substr(1, 2)
                var last = str.substr(3, str.length-3)
                str = first + '/' + second + '/' + last
            if (str.endsWith('jpeg')) {
                return '//fuss10.elemecdn.com/' + str + '.jpeg?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/';
            } else {
                return '//fuss10.elemecdn.com/' + str + '.png?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/';
            }
        }
    },
    created () {
        this.axios.get('http://10.0.157.249:8888/pingjia_all?pageNum=1&pageSize=10')
            .then(res => {
                this.productList = res.data.result;
                console.log(res.data);
            })
    }
    
   
}
</script>
    
<style lang="css" scoped>
    @import '../css/s_pingjia_comment.css';
</style>