<template>
    <div class="dingdan">
       <div class="dingdan_header">
            <img src="../img/s_mine_img/big_jiao.png" alt="" @click="back">
            确定订单
        </div>
        <div class="dingdan_addr">
            <p>
                添加收获地址
            </p>
        </div>
        <div class="dingdan_time">送达时间<span>尽快送达(19:48送达)</span></div>
        <div class="dingdan_div"> <p></p> </div>
        <div class="dingdan_way">支付方式<span>在线支付</span></div>
        <div class="dingdan_name">
            台资味（北京宣武门店）
            <div class="dingdan_div2"><p></p></div>
            <div class="dingdan_div3"><p></p></div>
        </div>
        <div class="dingdan_food"  v-for="cartProduct in cartProductList" :key="cartProduct.id">
            <img :src="tupian(cartProduct.pic)" alt="">
            {{ cartProduct.name }}<span>￥{{ cartProduct.price }}</span> <i> × {{ cartProduct.count }}</i> 
        </div>
        <div class="dingdan_div"> <p></p> </div>
        <div class="dingdan_food">配送费  <span>￥9</span></div>
        <div class="dingdan_div"> <p></p> </div>
        <div class="dingdan_red">
            红包(含店铺专享红包)
            <span>选择地址后使用红包</span>
            <div class="dingdan_div2"><p></p></div>
            <div class="dingdan_div3"><p></p></div>
        </div>
        <div class="dingdan_money"  v-show="totalCount > 0">
            小计￥<span>{{ totalPrice + 9 }}</span>
        </div>
        <div class="dingdan_name" v-show="totalCount == 0">
           <router-link to="/L_sale_merchant_header/diancan" class="alert-link" style="font-size: .38rem;color: red"> 没有任何商品点击这里返回购物 ></router-link>
        </div>
        <div class="dingdan_like">订单备注<span>口味偏好/餐具分数等</span></div>
        <div class="dingdan_like">发票信息<span>不需要开发票</span></div>
        <sOrder></sOrder>
    </div>
</template>
    
<script>
import sOrder from '../components/s_order'
export default {
    name: "s_dingdan",
    data () {
        return {
             
        };
    },
    methods: {
        back() {
            // this.$router.push({ path: '/mine' });
            this.$router.go(-1)
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
    components:{
        sOrder
    },
    computed: {
        cartProductList() {
            return this.$store.state.cartProductList
        },
        totalPrice() {
			return this.$store.getters.totalPrice
        },
        totalCount() {
			return this.$store.getters.totalCount
		}
    }
}
</script>
    
<style lang="css" scoped>
   @import '../css/s_dingdan';
</style>