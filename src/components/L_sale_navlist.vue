<template>
    <div>
       <div class="L_sale_navlist_wrap">
          
                <!-- <a href="###"> -->
                    <router-link to="/L_sale_navlist_meishi">                    
                        <dl>
                            <dt><img src="../img/l_img/icon11.jpg" alt=""></dt>
                            <dd>美食</dd>
                        </dl>
                    </router-link>
                        
                <!-- </a> -->
            <!-- <l-sale-navlisgt-meishi></l-sale-navlisgt-meishi> -->
           <!-- <a href="###"> -->
               <router-link to="/L_sale_navlist_wancan">
                    <dl>
                        <dt><img src="https://fuss10.elemecdn.com/c/e9/8b589472823fa97666cef19af644cjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt=""></dt>
                        <dd>晚餐</dd>
                    </dl>
                </router-link>
           <!-- </a> -->
           <!-- <a href="###"> -->
               <router-link to="/L_sale_navlist_shangchaobianli">
                    <dl>
                        <dt><img src="https://fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"></dt>
                        <dd>商超便利</dd>
                    </dl>
                </router-link>
           <!-- </a> -->
           <!-- <a href="###"> -->
               <router-link to="/L_sale_navlist_guoshushengxian">
                    <dl>
                        <dt><img src="https://fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt=""></dt>
                        <dd>果蔬生鲜</dd>
                    </dl>
                </router-link>
           <!-- </a> -->
           <!-- <a href="###"> -->
               <router-link to="L_sale_navlist_dapaiwuzhe">
                    <dl>
                        <dt><img src="https://fuss10.elemecdn.com/6/74/785eafaf358fa6b18df37c64c3510jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt=""></dt>
                        <dd>大牌五折</dd>
                    </dl>
                </router-link>
           <!-- </a> -->
           <!-- <a href="###"> -->
               <router-link to="L_sale_navlist_yiyaojiankang">
                    <dl>
                        <dt><img src="https://fuss10.elemecdn.com/b/e1/58aa34ef194d216c9f2328f603588jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt=""></dt>
                        <dd>医药健康</dd>
                    </dl>
                </router-link>
           <!-- </a> -->
           <!-- <a href="###"> -->
               <router-link to="./L_sale_navlist_langmanxianhua">
                    <dl>
                        <dt><img src="https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt=""></dt>
                        <dd>浪漫鲜花</dd>
                    </dl>
                </router-link>
           <!-- </a> -->
           <!-- <a href="###"> -->
                <router-link to="./L_sale_navlist_malatang">
                    <dl>
                        <dt><img src="https://fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt=""></dt>
                        <dd>麻辣烫</dd>
                    </dl>
                </router-link>
           <!-- </a> -->
           <!-- <a href="###"> -->
               <router-link to="./L_sale_navlist_difangcaixi">
                    <dl>
                        <dt><img src="https://fuss10.elemecdn.com/7/43/0947110c24c620a767745054d798bjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt=""></dt>
                        <dd>地方菜系</dd>
                    </dl>
                </router-link>
           <!-- </a> -->
           <!-- <a href="###"> -->
               <router-link to="./L_sale_navlist_pisayimian">
                    <dl>
                        <dt><img src="https://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt=""></dt>
                        <dd>披萨意面</dd>
                    </dl>
                </router-link>
           <!-- </a> -->
       </div>
       <div class="L_userZX">
           <img src="../img/l_img/userZX.png" alt="">
       </div>
    </div>
</template>
    
<script>
import LSaleNavlisgtMeishi from './L_sale_navlist_meishi'
export default {
    name: "L_sale_navlist",
    data () {
        return {
             
        };
    },
    components:{
        LSaleNavlisgtMeishi
    },
    created () {
        this.axios.get('http://10.0.157.249:8888/header')
            .then(res => {
                console.log(res);
            })
    }

}
</script>
    
<style lang="css" scoped>
    .L_sale_navlist_wrap{
        width: 100%;
        overflow: hidden; 
        margin:0 0 .6rem 0;      
    }
    .L_sale_navlist_wrap a{
        width: 20%;
        height: 1.65rem;        
        background:white;       
        margin-top: 0.1rem;
        float: left;
    }    
    .L_sale_navlist_wrap dl dd{
        text-align: center;
        margin: 0;
        color: #666666;
    }
    .L_sale_navlist_wrap dl img{
        width: 0.89rem;
        height: 0.89rem;
        margin: .22rem auto;

    }
    .L_userZX{
        width: 95%;
        height: 1.6rem;
        background: white;
        margin: 0 auto;

    }
    .L_userZX img{
        width: 100%;
        height: 100%;
    }

</style>