<template>
    <div>
        <div class="s_mine_header_redPaper">
            <div class="s_mine_header_redPaper_hea">
                <img src="../img/s_mine_img/big_jiao.png" alt="" @click="back">
                我的优惠
                <a href="">兑换红包</a>
            </div>
            <div class="s_mine_header_redPaper_zj">
                <router-link to="/s_mine_header_redPaper/red">红包{{ msg_red }}个</router-link>
                <router-link to="/s_mine_header_redPaper/shop">商家代金券{{ msg_shop }}张</router-link>
            </div>
        </div> 
        <router-view></router-view>
    </div>
</template>
    
<script>
export default {
    name: "s_mine_header_readPaper",
    data () {
        return {
           msg_red: 0,
           msg_shop: 0
        };
    },
    methods: {
        back() {
            this.$router.push({ path: '/mine' });
        }
    }
}
</script>
    
<style lang="css" scoped>
.s_mine_header_redPaper{
    width: 100%;
    height: 1.68rem;
    background-image: linear-gradient(to right, #00a8ff, #0087ff);
    color: white;
}
.s_mine_header_redPaper_hea{
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    font-size: 0.34rem;
    font-weight: bold;
}
.s_mine_header_redPaper_hea img{
    width: 0.2rem;
    height: 0.34rem;
    display: inline-block;
    margin-right: 2.3rem;
    margin-left: 0.2rem;
}
.s_mine_header_redPaper_hea a{
    display: inline-block;
    margin-left: 2rem;
    font-size: 0.27rem;
    color: white;
    font-weight: normal;
}
/* s_mine_header_redPaper_zj */
.s_mine_header_redPaper_zj{
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.3rem;
    display: flex;
    justify-content: space-around;
}
.s_mine_header_redPaper_zj a{
    color: rgb(204, 200, 200);
    height: 0.7rem;
}
.s_mine_header_redPaper_zj a:hover{
    color: white;
    border-bottom: 0.01rem solid white; 
}
</style>