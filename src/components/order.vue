<template>
    <div class="order">
        <div class="order_header">
            <img src="../img/s_mine_img/big_jiao.png" alt="" @click="back">
            我的优惠
        </div>
        <div class="order_dingdan" v-for="cartProduct in cartProductList" :key="cartProduct.id">
            <div class="order_1">
                <img src="../img/s_mine_img/yang.png" alt="">
                <h3>金牌砂锅米线<span>商家正在备货</span></h3>
                <p>26秒前</p>
            </div>
            <p class="order_p"></p>
            <div class="order_2">
                <p>{{ cartProduct.name }} {{ cartProduct.count }}份<span>{{ cartProduct.price }} 元</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "order",
        data () {
            return {
                msg: "订单"
            }
        },
         methods: {
            back() {
                // this.$router.push({ path: '/mine' });
                this.$router.go(-1)
            }
        },
        computed: {
            cartProductList() {
               return this.$store.state.cartProductList
            }
        }
    }
</script>

<style scoped>
.order{
    width: 100%;
    height: 12.5rem;
    background: #f5f5f5;
    color: white;
}
.order_header{
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    font-size: 0.34rem;
    font-weight: bold;
    background-image: linear-gradient(to right, #00a8ff, #0087ff);
}
.order_header img{
    width: 0.2rem;
    height: 0.34rem;
    display: inline-block;
    margin-right: 2.3rem;
    margin-left: 0.2rem;
}
/* order_dingdan   */
.order_dingdan{
    width: 100%;
    height: 2.16rem;
    background: white;
    margin-top: 0.2rem;
}
.order_1{
    width: 100%;
    height: 1.2rem;
    color: #333333;
    /* background: pink; */
    padding: 0.01rem;
}
.order_1 img{
    width: 0.64rem;
    height: 0.64rem;
    float: left;
    margin: .24rem .28rem 0 .2rem;
}
.order_1 h3{
    font-size: .3rem;
    margin-top: .28rem;
    font-weight: normal;
}
.order_1 h3 span{
    font-size: .24rem;
    float: right;
    margin-right: .27rem;
    font-weight: normal;
}
.order_1 p{
    font-size: .2rem;
    color: #999999;
    margin-top: .1rem;
}
.order_p{
    float: right;
    margin-top: .08rem;
    width: 6.64rem;
    height: 0.02rem;
    background: #eeeeee;
}
.order_2{
    width: 100%;
    height: .88rem;
    line-height: .88rem;
    color: #666666;
    /* background: pink; */
    margin-top: .1rem;
    padding-left: 1.1rem;
    /* padding: 0.01rem; */
}
.order_2 p{
    font-size: .3rem;
    color: black;   
}
.order_2 span{
    font-size: .3rem;
    float: right;
    margin-right: .27rem;
    color: #333333;
}
</style>
