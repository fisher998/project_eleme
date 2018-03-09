<template>
    <div>
        <div class="L_diancan_main_wrap">
            <!-- 点餐标题主体头部 -->
            <div class="L_diancanmain_header">
                <h3>{{ product.name }}</h3>
                <span>{{ product.description }}</span>
            </div>
            <!-- 餐品列表 -->
            <div v-for="food in product.foods" :key="food.id">
                <div class="L_diancan_list" v-for="seafood in food.specfoods" :key="seafood.id">
                    <div class="L_diancan_list_img">
                        <img :src="tupian(food.image_path)" alt="商品图片">
                    </div>
                    <h3>{{ seafood.name }}</h3>
                    <p>{{ food.description }}</p>
                    <span>月售{{ food.month_sales }}份</span>
                    <span>好评率98%</span>
                    <div class="L_zhekou">
                        <span>5.5折</span>
                        <span>每单限2份优惠</span>
                    </div>
                    <div class="L_price">
                        <h3><i>￥</i>{{ seafood.price }} <span class="L_price_span">{{ seafood.original_price | price}}</span> </h3>
                        <div class="l_price_div">
                            <img src="../img/s_mine_img/jian.png" alt="减去商品" @click="reduces(seafood)" class="L_price_img1" v-if="seafood.weight >0? true:false">
                            <span class="L_price_imgSpan" v-if="seafood.weight>0? true:false">{{ seafood.weight  }}</span>
                            <img src="../img/L_img/iconP5.jpg" alt="添加商品" @click="adds(seafood, food.image_path)" class="L_price_img2">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: "L_merchant_diancan_main",
    data () {
        return {
             product: [],
             list: [],
             idx: 0,
             pic: null
        };
    },
    computed: {
        count() {
            return this.$store.getters.count
        },
        cartProductList() {
			return this.$store.state.cartProductList
		},
    },
     methods:{
        adds(product, image) {
            // console.log(image);
            // console.log(product);
            product.pic = image;
            this.pic = image
            product.weight++;
            this.$store.dispatch('adds', product, image)
        },
        reduces(product) {
            product.weight--;
            this.$store.dispatch('reduces', product)
        },
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
    filters: {
        price(value){
            if (value) {
                return '￥' + value;
            }
        }
    },
    beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
        this.axios.get('http://10.0.157.249:8888/diancan')
            .then(res => {

                var newStore = this.$store.state.cartProductList

                for(var list of res.data) {
                    if(this.$route.params.dian == list.name) {
                        for(var obj of list.foods) {
                            for(var food of obj.specfoods) {
                                for(var objstore of newStore) {
                                    if(obj.virtual_food_id == objstore.id) {
                                        food.weight = objstore.count
                                    }
                                }
                            }
                        }
                        this.product = list;
                    }
                     for(var prop of list.foods) {
                        this.list = prop
                     }
                }
            })
           next(vm => {
            // 通过 `vm` 访问组件实例
            console.log(vm)
        })
    },
    created () {
        this.axios.get('http://10.0.157.249:8888/diancan')
            .then(res => {
                for(var list of res.data) {
                    if (list.name == '热销') {
                        this.product = list;
                    }
                }
            })
    }
}
</script>
    
<style lang="css" scoped>
    @import '../css/L_merchant_diancan_main.css';
</style>