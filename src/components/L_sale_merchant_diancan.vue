<template>
    <div>
       <div class="L_diancan_wrap">
           <ul class="L_diancan_list" >
                <li v-for="list in hotList" :key='list.id'> 
                    <router-link :to="'/L_sale_merchant_header/diancan/name/' + list.name">
                      <img :src="tupian(list.icon_url)" alt="">{{ list.name }} 
                    </router-link>
                </li>               
           </ul>
           <router-view></router-view>
       </div>
       
    </div>
</template>
    
<script>
export default {
    name: "L_sale_merchant_diancan",
    data () {
        return {
             hotList: []
        };
    },
    components:{

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
        this.axios.get('http://10.0.157.249:8888/diancan')
            .then(res => {
                 this.hotList = res.data
                 // 初始化路由手动跳转一下默认第一个
                 this.$router.push({ path: '/L_sale_merchant_header/diancan/name/热销' })
            })
    }
}
</script>
    
<style lang="css" scoped>
    .L_diancan_wrap{
         width: 100%;  
    }
   .L_diancan_list{
        width: 1.57rem;
        height: 9rem; 
        float: left; 
        margin: 0 .19rem 0 0;  
   }
    .L_diancan_list li{
        /* float: left;         */
        height: .99rem;
        line-height: .99rem;
        border-bottom: .02rem solid #dddddd;
        font-size: .24rem;
        color: #666666;
        text-align: center;
        background: #f8f8f8;
    }
    .L_diancan_list li:nth-child(1){
        background: white;
    }
    .L_diancan_list li img{
        display: inline-block;
        width: .26rem;
        height: .26rem;
        background-size: 100% 100%;
        margin: .38rem .08rem 0 0;
    }
    .L_diancan_list li:nth-of-type(1) i{       
        background: url(../img/l_img/iconP5.png)no-repeat left center;
        background-size: 100% 100%;  
             
    }

    
    
    
</style>