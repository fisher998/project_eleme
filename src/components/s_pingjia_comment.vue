<template>
    <div>
       <div class="s_pingjia_comment">
           <!-- {{changeIndex}} -->
           <!-- <p class="s_change">{{changeIndex}}</p> -->
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
    //  computed: {
    //     changeIndex() {
    //         // console.log(11111)
    //         this.axios.get('http://10.0.157.249:8888/pingjia_all?pageNum=1&pageSize=10')
    //         .then(res => {
    //             if(this.$route.params.changeIndex == '0') {
    //                 // console.log(res.data.result)
    //                 return res.data.result;
    //             } else if(this.$route.params.changeIndex == '1') {
    //                 // console.log(res.data.man_Yi)
    //                 return  res.data.man_Yi;
    //             } else if(this.$route.params.changeIndex == '2') {
    //                 // console.log(res.data.bu_Manyi)
    //                 return res.data.bu_Manyi;
    //             }  else if(this.$route.params.changeIndex == '3') {
    //                 // console.log(res.data.bu_Manyi)
    //                 return  res.data.tu_Pian;
    //             }
    //         })
    //     }
    // },
    beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    this.axios.get('http://10.0.157.249:8888/pingjia_all?pageNum=1&pageSize=10')
            .then(res => {
                if(this.$route.params.changeIndex == '0') {
                    this.productList = res.data.result;
                } else if(this.$route.params.changeIndex == '1') {
                    this.productList = res.data.man_Yi;                   
                } else if(this.$route.params.changeIndex == '2') {
                    this.productList = res.data.bu_Manyi
                }  else if(this.$route.params.changeIndex == '3') {
                    this.productList = res.data.tu_Pian
                }
            })
        next(vm => {
    // 通过 `vm` 访问组件实例
            console.log(vm)
        })
    },
    created () {
        //  console.log(1111)
        this.axios.get('http://10.0.157.249:8888/pingjia_all?pageNum=1&pageSize=10')
            .then(res => {
                this.productList = res.data.result;
                // console.log(res.data);
            })
    },
   
    
   
}
</script>
    
<style lang="css" scoped>
    @import '../css/s_pingjia_comment.css';
</style>