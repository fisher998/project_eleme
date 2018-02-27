<template>
    <div>   
        <div class="searchBar" id="searchBar" :class="searchBarFixed ? 'isFixed' : ''">
            <div class="L_sale_merchant_dps_wrap">
                <ul>
                    <router-link to="/L_sale_merchant_header/diancan">
                            <li>点餐</li>
                    </router-link>
                    <router-link to="/L_sale_merchant_header/pingjia">
                            <li>评价</li>
                    </router-link>
                    <router-link to="/L_sale_merchant_header/merchant_shangjia">
                            <li>商家</li>
                    </router-link>
                </ul>
            </div>
           
        </div>  
         <!-- <l-sale-merchant-diancan></l-sale-merchant-diancan> -->
        <router-view></router-view>
        
    </div>
</template>
    
<script>
import LSaleMerchantDiancan from './L_sale_merchant_diancan'
export default {
    name: "L_sale_merchant_dps",
    data () {
        return {
             searchBarFixed: false
        };
    },   
    methods:{
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                // console.log(document.body.scrollTop);
            // var offsetTop = document.querySelector('#searchBar').offsetTop;
            //  console.log(document.body.scrollTop, document.documentElement.scrollTop, window.pageYOffset);

            if (scrollTop > 130) {
                this.searchBarFixed = true
            } else {
                this.searchBarFixed = false
            }
        }
    },
     components:{
        LSaleMerchantDiancan
    },
    mounted () {
        document.documentElement.scrollTop = '0px'
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

    
<style lang="css" scoped>
    .L_sale_merchant_dps_wrap{
        width: 100%;
        padding: .21rem 0 0 0;
        border-bottom: .04rem solid #dddddd;
        line-height: .78rem;   
        height: 1.05rem;   
        text-align: center;
        font-size: .28rem;
        color: #666666;  
    }
    .L_sale_merchant_dps_wrap li{
        width: 33%;
        float: left;
    }
     .isFixed{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #fff;
    }
</style>