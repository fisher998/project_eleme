<template>
    <div>
       <div class="s_shop">
           <div class="s_shop_left">
               {{ totalCount }} 件, ￥{{ totalPrice }}
           </div>
           <router-link class="s_shop_right" to="/order">
               去结算
           </router-link>
       </div>
    </div>
</template>
    
<script>
export default {
    name: "s_shop",
    data () {
        return {

        };
    },
    // 我们一般会使用计算属性来获取vuex仓库中的数据
    computed: {
       	totalCount() {
			return this.$store.getters.totalCount
		},
		totalPrice() {
			return this.$store.getters.totalPrice
		}
    }
}
</script>
    
<style lang="css" scoped>
    .s_shop{
        width: 100%;
        height: .96rem;
        background: #505051;
        position: fixed;
        left: 0;
        bottom: 0;
    }
    .s_shop_left{
        width: 5.4rem;
        height: .96rem;
        float: left;
        color: white;
        margin-top: .16rem;
        text-indent: 1.2rem;
        font-size: .4rem;
    }
      .s_shop_right{
        width: 2.1rem;
        height: .96rem;
        line-height: .96rem;
        text-align: center;
        background: #4cd964;
        float: left;
        color: white;
        font-size: .32rem;
        font-weight: bold;
    }
</style>