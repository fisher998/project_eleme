<template>
    <div class="s_shop_all">
        <img src="../img/s_mine_img/cart.png" alt="">
        <p  class="s_shop_p">{{ totalCount }} </p>
        <div class="s_shop_top"></div>
        <div class="s_shop">
           <div class="s_shop_left">
               ￥{{ totalPrice.toFixed(2) }}
           </div>
           <router-link class="s_shop_right" to="/s_dingdan" :class="changeColor">
               {{ change ? '去结算':'请添加' }}
           </router-link>
       </div>
    </div>
</template>
    
<script>
export default {
    name: "s_shop",
    data () {
        return {
            change: false
        };
    },
    // 我们一般会使用计算属性来获取vuex仓库中的数据
    computed: {
       	totalCount() {
			return this.$store.getters.totalCount
        },
		totalPrice() {
			return this.$store.getters.totalPrice
        },
        changeColor() {
            if(this.$store.getters.totalCount == 0) {
                return 'red'
            }else if(this.$store.getters.totalCount > 0) {
                this.change = true
                return 'green'
            } 
        }
        // totalPrice
    }
}
</script>
    
<style lang="css" scoped>
    .red{
        background: gray;
    }
    .green{
        background: #4cd964; 
    }
    .s_shop_all{
        width: 100%;
        height: 1.36rem;
        position: fixed;
        left: 0;
        bottom: 0;
    }
     .s_shop_all img{
         width: 1rem;
         height: 1rem;
         position: absolute;
         left: .24rem;
         top: .22rem;
     }
     .s_shop_p{
         width: .3rem;
         height: .28rem;
         line-height: .28rem;
         text-align: center;
         position: absolute;
         background: #ff6216;
         border-radius: 50%;
         left: .95rem;
         top: .22rem;
         color: white;
     }
    .s_shop_top{
        width: 100%;
        height: .4rem;
        background: #fffad7;
        border: .01rem solid #f9e8a6;
    }
    .s_shop{
        width: 100%;
        height: .96rem;
        background: #505051;
    }
    .s_shop_left{
        width: 5.4rem;
        height: .96rem;
        float: left;
        color: white;
        padding-top: .16rem;
        text-indent: 1.4rem;
        font-size: .4rem;
    }
      .s_shop_right{
        width: 2.1rem;
        height: .96rem;
        line-height: .96rem;
        text-align: center;
        float: left;
        color: white;
        font-size: .32rem;
        font-weight: bold;
    }
</style>