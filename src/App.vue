<template>
  <div id="app">
    <router-view></router-view>
    <div class="tabbar">
      <router-link to="/sale">外卖</router-link>
      <router-link to="/find">发现</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/mine">我的</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  #app .tabbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: pink;
  }

</style>
