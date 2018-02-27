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
}
</script>

<style>

</style>
