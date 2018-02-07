<template>
  <div id="app">
    <!-- <l-sale-navlisgt-meishi></l-sale-navlisgt-meishi> -->

    <!-- LSaleNavlisgtMeishi> -->
    <bottom-nav v-show="isShow"></bottom-nav>
    <router-view></router-view>   
  </div>
</template>

<script>
import bottomNav from './components/z_bottom_nav'


export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    bottomNav,

  },
  computed: {
    isShow() {
      // console.log(this.$route.path);
      return /(\/sale|\/find|\/order|\/mine)/.test(this.$route.path) ? true : false;

    }
  },
  created() {
    this.checkLogin();
  },
  methods:{
    checkLogin(){
      //检查是否存在session
      //cookie操作方法在源码里有或者参考网上的即可
      if(!this.getCookie('session')){
        //如果没有登录状态则跳转到登录页
        this.$router.push('/login');
      }else{
        //否则跳转到登录后的页面
        this.$router.push('/user_info');
      }
    }
  }
}
</script>

<style>

</style>
