<template>
    <div>
        <div class="L_sale_header">            
            <div class="L_sale_header_up">
                <span></span>
                <h3>东城区北京市政府</h3>
                <span></span>
            </div>  
            <div class="searchBar" id="searchBar" :class="searchBarFixed ? 'isFixed' : ''">               
                <div class="L_sale_header_down">
                <div><span></span></div>
                <span> 搜索商店、商品名称</span>
                </div>
            </div>     
             <div class="L_XSHD">
                <img src="../img/l_img/pic02.jpg" alt="">
            </div>
        </div>
    </div>
</template>
    
<script>
    export default {
        name: "L_sale_header",
        data () {
            return {
                searchBarFixed: false
            };
        },
        methods:{
            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                //  console.log(scrollTop);
                // var offsetTop = document.querySelector('#searchBar').offsetTop;
                //  console.log(offsetTop);

                if (scrollTop > 40) {
                    this.searchBarFixed = true
                } else {
                    this.searchBarFixed = false
                }
            }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },
        destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>
    
<style scoped>

  

    .L_sale_header{
        /* background-color: #00a8ff; */
        overflow: hidden;
        background-image: linear-gradient(90deg,#0af,#0085ff);
    }
    .L_sale_header_up{
        padding: 0.35rem 0.21rem 0 0.21rem;
        color: white;
        overflow: hidden;
    }
    .L_sale_header_up span:first-child{
        width: 0.28rem;
        height: .34rem;
        display: inline-block;
        float: left;
        background:url(../img/l_img/L_map.png)no-repeat left center;
        margin: 0.1rem;
        background-size: 100% 100%;
    }
    .L_sale_header_up h3{
        margin: 0;
        height: .5rem;
        line-height: .5rem;
        /* width: 2.46rem; */
        float: left;
        font-size: .35rem;
        /* margin: .2rem 0 0 0; */
    }
    .L_sale_header_up span:last-child{
        width: 0.25rem;
        height: 0.29rem;
        display: inline-block;
        float: left;
        margin: .1rem;
        background: url(../img/l_img/icon.png)no-repeat left center;
    }
    .L_XSHD{
        width: 100%;
        height: 2.09rem;
    }
    .L_XSHD img{
        width: 100%;
        height: 100%;
    }
    .L_sale_header_down{
        width: 90%;
        height: .72rem;
        margin: .2rem auto;
        line-height: 0.72rem;
        background:white;
        text-align: center;
    }
    .L_sale_header_down div{
        display: inline-block;
        height: .72rem;
    }
    .L_sale_header_down div span{
        background: url(../img/l_img/search.png)no-repeat left center;
        background-size: 100% 100%;
        display: inline-block;
        width: 0.3rem;
        height:0.3rem;   
        margin: -.07rem;    
    }  
    .L_sale_header_down>span{
        color: #999;
        font-family: simsun;        
        display: inline-block;
    }  
    .isFixed{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(90deg,#0af,#0085ff);
    }
    
    
</style>