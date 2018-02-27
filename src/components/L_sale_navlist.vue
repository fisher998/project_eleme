<template>
    <div>
       <div class="L_sale_navlist_wrap">
          
                <!-- <a href="###" > -->
                    <router-link to="/L_sale_navlist_meishi" v-for="(name, index) in names" :key="name.id">                    
                        <dl>
                            <dt><img :src="src[index]" alt=""></dt>
                            <dd>{{ name.name }}</dd>
                        </dl>
                    </router-link>
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
             names: [],
             src: [],            
        };
    },
    components:{
        LSaleNavlisgtMeishi
    },
    methods: {
        nav_list() {
                
            for (var obj of this.names) {
                    // console.log(obj);
                var str = obj.image_hash;
                var first = str.substr(0, 1)
                var second = str.substr(1, 2)
                var last = str.substr(3, str.length-3)
                str = first + '/' + second + '/' + last
                if (str.endsWith('jpeg')) {
                    this.src.push('//fuss10.elemecdn.com/' + str + '.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/')
                } else {
                    this.src.push('//fuss10.elemecdn.com/' + str + '.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/')
                }
            }
        }
    },
    created () {
        this.axios.get('http://10.0.157.249:8888/header')
                .then(res => {
                    this.names = res.data[0].entries;
                    // console.log(this.names);
                    this.nav_list();
            })
    }
  

}
</script>
    
<style lang="css" scoped>
    .L_sale_navlist_wrap{
        width: 100%;
        overflow: hidden; 
        margin:0 0 .6rem 0;  
        height: 3.5rem;    
    }
    .L_sale_navlist_wrap dl{
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